import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ⚙️ Добавляем разрешённый хост
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174, // тот порт, на котором работает
    allowedHosts: ["fitfully-heortological-donald.ngrok-free.dev"], // ✅ разрешаем ngrok-домен
  },
});
