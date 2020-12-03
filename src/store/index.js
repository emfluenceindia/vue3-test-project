import { createStore } from "vuex";
//https://www.reddit.com/r/vuejs/comments/hhmhji/how_to_access_vuex_store_with_composition_api/
const store = createStore({
  state() {
    return {
      currentUser: {},
      userDisplayName: "",
      isAuthenticated: false,

      infoModalVisible: false,
      infoModalContent: {},
      infoModalContentType: "",
      infoModalContentTitle: "",

      favList: {},
    };
  },
  mutations: {
    storeUser(state, user) {
      state.currentUser = user;
      state.userDisplayName = user.email.split("@")[0];
      state.isAuthenticated = true;
    },

    setInfoModalVisibility(state, payload) {
      state.infoModalVisible = payload;
    },

    setInfoModalContent(state, payload) {
      state.infoModalContent = payload.content;
      state.infoModalContentType = payload.type;
      state.infoModalContentTitle = payload.title;
    },

    updateFavList(state, payload) {
      state.favList = payload;
    },
  },
});

export default store;
