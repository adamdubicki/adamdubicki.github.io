// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      // @ts-ignore
      langs: ["javascript", "typescript", "astro", "html", "css"],
    },
  },
});
