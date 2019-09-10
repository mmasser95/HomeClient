import Vue from "vue";
import Vuetify from "vuetify/";
import colors from "vuetify/lib/util/colors";
import es from "vuetify/es5/locale/es";
import "vuetify/dist/vuetify.min.css";
Vue.use(Vuetify, {
  lang: {
    locales: { es },
    current: "es"
  },
  icons: {
    iconfont: "md"
  },
  theme: {
    dark: "true",
    themes: {
      dark: {
        primary: colors.lightGreen.base,
        secondary: colors.green.base,
        accent: colors.green.accent2
      }
    }
  }
});
export default new Vuetify({
  lang: {
    locales: { es },
    current: "es"
  },
  icons: {
    iconfont: "md"
  },
  theme: {
    dark: "true",
    themes: {
      dark: {
        primary: colors.yellow.darken3,
        secondary: colors.deepOrange.lighten1,
        accent: colors.green.accent2
      }
    }
  }
});
