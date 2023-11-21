// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  typescript: {
    strict: true,
  },
  build: {
    transpile: ["@fortawesome/vue-fontawesome"],
  },
  css: [
    "~/assets/styles/reset.css",
    "~/assets/styles/globals.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
});
