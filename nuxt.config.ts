// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: ['@nuxt/ui'],
  
  colorMode: {
  preference: 'light', // default value of $colorMode.preference
  fallback: 'light', 
  }
})
/*this file is used to extend or modify nuxt default config for this project
you camn add metadata or modeules, or environnment variables like API for use
in other places on the app*/
