import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: {
    primary: colors.blue.darken1,
    secondary: colors.grey.lighten2,
    accent: colors.shades.black,
    error: colors.red.accent3
  }
})
