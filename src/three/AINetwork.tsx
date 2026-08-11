import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface Node {
  label: string
  x: number // normalized 0-1
  y: number
  phase: number
}

// Fixed, organic-feeling layout rather than pure random placement, so the
// same 8 labeled concepts always read clearly.
// x/y kept within a 0.16–0.84 band (with extra top margin) so pulsing radii
// and the label drawn above each node never clip against the canvas edge.
const NODE_LAYOUT: Node[] = [
  { label: 'AI', x: 0.5, y: 0.5, phase: 0 },
  { label: 'API', x: 0.76, y: 0.32, phase: 0.6 },
  { label: 'DATA', x: 0.8, y: 0.66, phase: 1.2 },
  { label: 'AUTOMATION', x: 0.56, y: 0.82, phase: 1.8 },
  { label: 'CLOUD', x: 0.24, y: 0.72, phase: 2.4 },
  { label: 'PAYMENTS', x: 0.18, y: 0.34, phase: 3.0 },
  { label: 'USER', x: 0.4, y: 0.2, phase: 3.6 },
  { label: 'SYSTEM', x: 0.66, y: 0.18, phase: 4.2 },
]

// Edges as index pairs into NODE_LAYOUT — a hub-and-spoke web around "AI"
// plus a few cross-links so it reads as a system, not a star.
const EDGES: Array<[number, number]> = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7],
  [1, 2], [3, 4], [5, 6], [6, 7], [1, 7],
]

// A handful of edges get a traveling particle to suggest live data flow.
const PARTICLE_EDGES = [0, 2, 5, 9]

export default function AINetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = 0, h = 0, rafId = 0
    let mouseX = -1, mouseY = -1
    const isTouch = window.matchMedia('(max-width:900px)').matches

    const sizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      w = canvas.width = rect.width * devicePixelRatio
      h = canvas.height = rect.width * devicePixelRatio
      ctx.setTransform(1, 0, 0, 1, 0, 0)
    }
    sizeCanvas()
    window.addEventListener('resize', sizeCanvas)

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = ((e.clientX - rect.left) / rect.width) * w
      mouseY = ((e.clientY - rect.top) / rect.height) * h
    }
    if (!isTouch) window.addEventListener('mousemove', onMove)

    const t0 = performance.now()

    const draw = (now: number) => {
      const t = reducedMotion ? 0 : (now - t0) / 1000
      ctx.clearRect(0, 0, w, h)

      // Resolve current positions (base position + very subtle mouse nudge).
      const positions = NODE_LAYOUT.map((n) => {
        let x = n.x * w
        let y = n.y * h
        if (!reducedMotion && mouseX >= 0) {
          const dx = x - mouseX
          const dy = y - mouseY
          const dist = Math.sqrt(dx * dx + dy * dy)
          const radius = w * 0.22
          if (dist < radius) {
            const strength = (1 - dist / radius) * 6 * devicePixelRatio
            x += (dx / (dist || 1)) * strength
            y += (dy / (dist || 1)) * strength
          }
        }
        return { x, y }
      })

      // Edges
      ctx.lineWidth = 1
      EDGES.forEach(([a, b]) => {
        ctx.strokeStyle = 'rgba(200,255,61,0.14)'
        ctx.beginPath()
        ctx.moveTo(positions[a].x, positions[a].y)
        ctx.lineTo(positions[b].x, positions[b].y)
        ctx.stroke()
      })

      // Traveling particles along selected edges
      if (!reducedMotion) {
        PARTICLE_EDGES.forEach((edgeIndex, i) => {
          const [a, b] = EDGES[edgeIndex]
          const speed = 0.15 + i * 0.04
          const progress = (t * speed + i * 0.3) % 1
          const px = positions[a].x + (positions[b].x - positions[a].x) * progress
          const py = positions[a].y + (positions[b].y - positions[a].y) * progress
          ctx.beginPath()
          ctx.arc(px, py, 2 * devicePixelRatio, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(34,211,238,0.85)'
          ctx.fill()
        })
      }

      // Nodes: pulsing radius + label
      NODE_LAYOUT.forEach((n, i) => {
        const pos = positions[i]
        const pulse = reducedMotion ? 0 : Math.sin(t * 0.9 + n.phase) * 0.5 + 0.5
        const baseR = (i === 0 ? 5 : 3.4) * devicePixelRatio
        const r = baseR + pulse * 1.6 * devicePixelRatio

        ctx.beginPath()
        ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2)
        ctx.fillStyle = i === 0 ? '#c8ff3d' : 'rgba(200,255,61,0.85)'
        ctx.fill()

        if (i === 0) {
          ctx.beginPath()
          ctx.arc(pos.x, pos.y, r + 5 * devicePixelRatio, 0, Math.PI * 2)
          ctx.strokeStyle = 'rgba(200,255,61,0.25)'
          ctx.lineWidth = 1
          ctx.stroke()
        }

        ctx.font = `${10 * devicePixelRatio}px 'JetBrains Mono', monospace`
        ctx.fillStyle = 'rgba(245,245,245,0.55)'
        ctx.textAlign = 'center'
        ctx.fillText(n.label, pos.x, pos.y - r - 8 * devicePixelRatio)
      })

      rafId = requestAnimationFrame(draw)
    }
    rafId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', sizeCanvas)
      if (!isTouch) window.removeEventListener('mousemove', onMove)
    }
  }, [reducedMotion])

  return (
    <canvas
      id="ai-canvas"
      ref={canvasRef}
      role="img"
      aria-label="Diagram of AI, API, Data, Automation, Cloud, Payments, User and System nodes connected in a network"
    />
  )
}
