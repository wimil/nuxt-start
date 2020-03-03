export default ({ store, redirect }) => {
    //console.log(store.state.auth.loggedIn)
  if (store.getters['authenticated']) {
    redirect("/");
  }
};
