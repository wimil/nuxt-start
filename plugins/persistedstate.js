import createPersistedState from "vuex-persistedstate";

export default ({ store }) => {
  createPersistedState({
    key: "vuex",
    paths: [
      //datos que se alacenaran en localstorage
    ]
  })(store);
};
