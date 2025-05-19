import { defineConfig } from 'vite';

// https://vitejs.dev/config
export default defineConfig({
  server: {
    port: 5173, // Note: Vite will still increment the port if in use
  }
});
