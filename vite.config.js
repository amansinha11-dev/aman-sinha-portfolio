import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Custom plugin to copy images folder
const copyImagesPlugin = () => ({
  name: 'copy-images',
  apply: 'build',
  async writeBundle() {
    const srcPath = path.join(__dirname, 'images')
    const destPath = path.join(__dirname, 'dist', 'images')
    try {
      const fs = await import('fs')
      if (fs.existsSync(srcPath)) {
        // Copy files using Node.js
        const files = fs.readdirSync(srcPath)
        if (!fs.existsSync(destPath)) {
          fs.mkdirSync(destPath, { recursive: true })
        }
        for (const file of files) {
          const src = path.join(srcPath, file)
          const dst = path.join(destPath, file)
          const stat = fs.statSync(src)
          if (stat.isFile()) {
            fs.copyFileSync(src, dst)
          }
        }
      }
    } catch (error) {
      console.warn('Could not copy images folder:', error.message)
    }
  }
})

// https://vite.dev/config/
export default defineConfig({
  base: '/aman-sinha-portfolio/',
  plugins: [react(), copyImagesPlugin()]
})
