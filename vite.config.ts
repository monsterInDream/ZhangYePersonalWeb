import { defineConfig, ConfigEnv} from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default ({mode}:ConfigEnv) => defineConfig({ 
  plugins: [
    tailwindcss(),
  ],
  base: mode === 'production' ? '/ZhangYePersonalWeb/' : '/'
})