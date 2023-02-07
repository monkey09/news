import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        grey: '#F5F5F5'
      },
      dark: {
        grey: '#000'
      }
    }
  }
})
