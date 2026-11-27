// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vue from "@astrojs/vue";
import Icons from "unplugin-icons/vite";

// `site` is the production origin used for canonical URLs. `base` stays "/" so
// the build emits root-relative asset URLs (`/_astro/...`, `/profile.png`,
// `/favicon.svg`). Preview deploys are served from `*.pages.dev` at the domain
// root; an absolute asset prefix or a non-root `base` would request those
// files from the wrong host.
// https://astro.build/config
export default defineConfig({
  site: "https://mola1129.dev",
  base: "/",
  vite: {
    plugins: [tailwindcss(), Icons({ compiler: "vue3" })],
  },
  integrations: [vue()],
});
