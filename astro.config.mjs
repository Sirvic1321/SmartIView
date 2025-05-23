import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://sirvic1321.github.io/',
  base: '/', // <-- root
  integrations: [tailwind(), compress()],
});
  