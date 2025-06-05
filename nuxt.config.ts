import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["/assets/app.css"],
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Poppins: [400, 600],
      Lobster: true
    },
    display: 'swap',
  },
})