import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/components/DrawerComponent.jsx', // Path to main UI component
      name: 'DrawerComponent', // Name of the component in the bundle
      formats: ['es', 'umd'], // Output formats (ES modules and UMD for broader compatibility)
      fileName: (format) => `drawer-component.${format}.js`, 
      // babel: { // New section for Babel configuration
      //   // Use the configuration from babel.config.js (if any)
      //   ...process.env.NODE_ENV === 'production' && require('./babel.config.cjs'),
      // },
    },
    rollupOptions: {
      // Externalize dependencies that shouldn't be bundled
      external: ['react', 'react-dom'],
      output: {
        // globals for externalized dependencies
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
