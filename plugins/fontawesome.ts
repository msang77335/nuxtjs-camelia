import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPaperPlane,
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
  faBars,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faRegistered } from "@fortawesome/free-regular-svg-icons";

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(
  faPaperPlane,
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
  faYoutube,
  faFacebookF,
  faInstagram,
  faBars,
  faSearch,
  faRegistered,
  faTimes,
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
