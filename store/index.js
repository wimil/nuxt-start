export const strict = false;

export const state = () => ({
  //estados
});

export const getters = {
  authenticated(state) {
    //console.log(state.auth);
    return state.auth.loggedIn;
  },

  user(state) {
    return state.auth.user;
  }
};

export const actions = {
  //acciones
};

export const mutations = {
  //mutaciones
};
