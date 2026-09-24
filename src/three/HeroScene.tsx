import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

/**
 * The "digital garage door" hero scene. Ported from the original vanilla
 * prototype into a self-contained effect with explicit disposal: geometries,
 * materials and the renderer are all freed on unmount, the resize listener
 * is removed, and the rAF loop is cancelled. Nothing here runs before the
 * canvas ref exists or after the component unmounts.
 */
export default function HeroScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || reducedMotion) return

    let rafId = 0
    let disposed = false

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.set(0, 1.4, 9)

    const resize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
    }
    resize()
    window.addEventListener('resize', resize)

    // Disposal registry — every geometry/material we create gets tracked here.
    const disposables: Array<{ dispose: () => void }> = []
    const track = <T extends { dispose: () => void }>(x: T): T => {
      disposables.push(x)
      return x
    }

    const grid = new THREE.GridHelper(40, 40, 0x3a3a3a, 0x1a1a1a)
    grid.position.y = -2.2
    scene.add(grid)
    track(grid.geometry)
    if (Array.isArray(grid.material)) grid.material.forEach(track)
    else track(grid.material as THREE.Material)

    const frameGeo = track(new THREE.BoxGeometry(6.4, 4.4, 0.2))
    const frameEdgesGeo = track(new THREE.EdgesGeometry(frameGeo))
    const frameMat = track(new THREE.LineBasicMaterial({ color: 0x333333 }))
    const frame = new THREE.LineSegments(frameEdgesGeo, frameMat)
    frame.position.y = 0.2
    scene.add(frame)

    const doorGroup = new THREE.Group()
    const slatCount = 10
    for (let i = 0; i < slatCount; i++) {
      const slatGeo = track(new THREE.BoxGeometry(6.0, 4.4 / slatCount - 0.04, 0.15))
      const slatMat = track(new THREE.MeshBasicMaterial({ color: 0x161616 }))
      const slat = new THREE.Mesh(slatGeo, slatMat)
      slat.position.y = -2.2 + (4.4 / slatCount) * i + 4.4 / slatCount / 2
      const edgesGeo = track(new THREE.EdgesGeometry(slatGeo))
      const edgesMat = track(new THREE.LineBasicMaterial({ color: 0xc8ff3d, transparent: true, opacity: 0.25 }))
      slat.add(new THREE.LineSegments(edgesGeo, edgesMat))
      doorGroup.add(slat)
    }
    doorGroup.position.y = 0.2
    scene.add(doorGroup)

    const floorGlowGeo = track(new THREE.PlaneGeometry(6, 6))
    const floorGlowMat = track(new THREE.MeshBasicMaterial({ color: 0xc8ff3d, transparent: true, opacity: 0.06 }))
    const floorGlow = new THREE.Mesh(floorGlowGeo, floorGlowMat)
    floorGlow.rotation.x = -Math.PI / 2
    floorGlow.position.y = -2.15
    scene.add(floorGlow)

    const nodesGroup = new THREE.Group()
    const nodeColors = [0xc8ff3d, 0x8b5cf6, 0x22d3ee, 0xff8a3d]
    const nodes: THREE.Mesh[] = []
    for (let i = 0; i < 26; i++) {
      const size = 0.06 + Math.random() * 0.14
      const geo =
        Math.random() > 0.5
          ? track(new THREE.BoxGeometry(size, size, size))
          : track(new THREE.OctahedronGeometry(size * 0.9))
      const color = nodeColors[Math.floor(Math.random() * nodeColors.length)]
      const mat = track(new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity: 0.75 }))
      const mesh = new THREE.Mesh(geo, mat)
      mesh.position.set((Math.random() - 0.5) * 5, -1.6 + Math.random() * 3.6, (Math.random() - 0.5) * 3.5 - 1)
      mesh.userData = { speed: 0.2 + Math.random() * 0.4, offset: Math.random() * 10, baseY: mesh.position.y }
      nodesGroup.add(mesh)
      nodes.push(mesh)
    }
    scene.add(nodesGroup)

    const lineMat = track(new THREE.LineBasicMaterial({ color: 0xc8ff3d, transparent: true, opacity: 0.12 }))
    for (let i = 0; i < 14; i++) {
      const a = nodes[Math.floor(Math.random() * nodes.length)]
      const b = nodes[Math.floor(Math.random() * nodes.length)]
      if (a === b) continue
      const geo = track(new THREE.BufferGeometry().setFromPoints([a.position, b.position]))
      nodesGroup.add(new THREE.Line(geo, lineMat))
    }

    let mouseX = 0
    let mouseY = 0
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth - 0.5
      mouseY = e.clientY / window.innerHeight - 0.5
    }
    window.addEventListener('mousemove', onMouseMove)

    // Door rise animation: starts closed, rises on mount.
    doorGroup.position.y = 0.2 + 4.4
    const tween = gsap.to(doorGroup.position, { y: 0.2 + 4.6, duration: 1.8, delay: 0.4, ease: 'power3.inOut' })

    // Fade the floating nodes in per-material (Object3D itself has no CSS-style
    // "opacity" prop, so we animate each material's opacity individually).
    const nodeFadeTweens: gsap.core.Tween[] = []
    nodesGroup.traverse((obj) => {
      const mesh = obj as THREE.Mesh
      const mat = mesh.material as (THREE.Material & { opacity?: number }) | undefined
      if (mat && typeof mat.opacity === 'number') {
        const target = mat.opacity
        nodeFadeTweens.push(gsap.fromTo(mat, { opacity: 0 }, { opacity: target, duration: 1, delay: 1.4 }))
      }
    })

    const clock = new THREE.Clock()
    const animate = () => {
      if (disposed) return
      const t = clock.getElapsedTime()
      nodes.forEach((n) => {
        n.rotation.x += 0.003 + n.userData.speed * 0.002
        n.rotation.y += 0.004
        n.position.y = n.userData.baseY + Math.sin(t * n.userData.speed + n.userData.offset) * 0.15
      })
      camera.position.x += (mouseX * 1.2 - camera.position.x) * 0.03
      camera.position.y += (1.4 - mouseY * 0.6 - camera.position.y) * 0.03
      camera.lookAt(0, 0.2, 0)
      renderer.render(scene, camera)
      rafId = requestAnimationFrame(animate)
    }
    rafId = requestAnimationFrame(animate)

    return () => {
      disposed = true
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      tween.kill()
      nodeFadeTweens.forEach((t) => t.kill())
      disposables.forEach((d) => d.dispose())
      renderer.dispose()
    }
  }, [reducedMotion])

  if (reducedMotion) {
    // Respect prefers-reduced-motion: render a static gradient instead of the WebGL scene.
    return (
      <div
        id="hero-canvas"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle at 50% 60%, rgba(200,255,61,0.08), transparent 60%)',
        }}
      />
    )
  }

  return <canvas id="hero-canvas" ref={canvasRef} aria-hidden="true" />
}
