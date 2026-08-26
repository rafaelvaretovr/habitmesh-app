import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// not proud of this part

export default defineConfig({
  plugins: [vue()],
  server: { port: 5173 },
});
