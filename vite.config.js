// Vite resolves vite.config.js before vite.config.ts, so this re-exports the
// TypeScript config to keep a single source of truth.
export { default } from './vite.config.ts'
