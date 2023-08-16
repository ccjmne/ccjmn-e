import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [{
    name: 'html-as-template',
    transform(src: string, id: string): { code: string } | null {
      return /\.html$/.test(id) ? {
        code: `const template = document.createElement('template')
          template.innerHTML = ${JSON.stringify(src)}
          export default template`,
      } : null
    },
  }],
})
