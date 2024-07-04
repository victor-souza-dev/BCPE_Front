import basicSsl from "@vitejs/plugin-basic-ssl";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import mockData from "vite-plugin-mock-data";
import progress from "vite-plugin-progress";

// const sslConfig = process.env.NODE_ENV === "production" ? [basicSsl()] : [];

export default defineConfig({
  resolve: {
    alias: {
      src: "/src",
    },
  },
  plugins: [
    react(),
    progress(),
    // ...sslConfig,
    basicSsl(),
    mockData({
      mockAssetsDir: "/assets/isp/styles",
    }),
  ],
});
