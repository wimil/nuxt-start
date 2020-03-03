import functions from "../helpers/functions";

export default ({ app }, inject) => {
  inject("fn", functions);
};
