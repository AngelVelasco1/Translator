import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
const env = loadEnv("development", process.cwd(), 'VITE')

const port = env.VITE_FRONTEND_PORT as unknown
const numberport = port as number

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: env.VITE_HOSTNAME,
    port: numberport
  }
})
