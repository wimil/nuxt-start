import Vue from "vue";
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  localize
} from "vee-validate";
import {
  required,
  email,
  regex,
  min,
  max,
  numeric
} from "vee-validate/dist/rules";
import es from "vee-validate/dist/locale/es.json";

//reglas
extend("required", required);
extend("email", email);
extend("regex", regex);
extend("min", min);
extend("max", max);
extend("numeric", numeric);
//extend("url", url);

//idioma
localize({ es });
localize("es");

extend("password", {
  validate: (value, { other }) => value === other,
  message: "La confirmación de contraseña no coincide.",
  params: [{ name: "other", isTarget: true }]
});

/*extend("url", {
  validate(value) {
    return isURL(value);
  },
  message: "El campo {_field_} no es una URL válida"
});*/

//components
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
