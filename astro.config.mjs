// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vue from "@astrojs/vue";
import Icons from "unplugin-icons/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://mola1129.dev",
  vite: {
    plugins: [tailwindcss(), Icons({ compiler: "vue3" })],
  },
  integrations: [vue()],
});
