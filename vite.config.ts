import { defineConfig, ConfigEnv} from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default ({mode}:ConfigEnv) => defineConfig({ 
  plugins: [
    tailwindcss(),
  ],
  base: mode === 'production' ? '/ZhangYePersonalWeb/' : '/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        contact: 'src/page/contact.html',
      }
    }
  }
})