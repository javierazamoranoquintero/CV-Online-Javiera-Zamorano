import { defineConfig } from 'vite';

export default defineConfig({
    base: '/CV-Online-Javiera-Zamorano/',
    server: {
        port: 5173,
        host: true,
        open: false,
        watch: {
            usePolling: true,
        },
    },
    build: {
        outDir: 'dist',
        sourcemap: true,
    },
});