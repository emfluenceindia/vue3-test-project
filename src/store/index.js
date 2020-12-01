import { createStore } from "vuex";
//https://www.reddit.com/r/vuejs/comments/hhmhji/how_to_access_vuex_store_with_composition_api/
const store = createStore({
  state() {
    return {
      currentUser: {},
      userDisplayName: "",
      isAuthenticated: false,
    };
  },
  mutations: {
    storeUser(state, user) {
      state.currentUser = user;
      state.userDisplayName = user.email.split("@")[0];
      state.isAuthenticated = true;
    },
  },
});

export default store;
