<template>
  <div>
    <InfoTrekHeader 
      brand="Aim High" 
      slogan="Mountain is calling" 
      :isAuthenticated="isUserLoggedIn" 
      @openmodal="openLoginModal"
      @open-register-modal="hideRegisterModal"
      @signout="logOut" 
    />
    <div id="container">
      <router-view></router-view>
      <!-- <DestinationList heading="Destinations" @placedetail="showPlaceDetail" />
      <DestinationDetail :place="places" /> -->
    </div>
    <LoginModal :show="show" @hidemodal="hideLoginModal" @updateheader="updateHeader" />
    <RegisterModal :showPopup="showRegisterPopup" @open-register-popup="hideRegisterModal" />
  </div>
</template>

<script>
import InfoTrekHeader from './components/InfoTrekHeader.vue';
import LoginModal from './components/LoginModal.vue';
import RegisterModal from './components/RegisterModal.vue';
import firebase from './utilities/firebase';
// import DestinationList from './components/destination/DestinationList.vue';
// import DestinationDetail from './components/destination/DestinationDetail.vue';

export default {  
  name: 'App',
  data() {
    return {
      placeId: 0,
      places: [],
      show: false,
      showRegisterPopup: false,
      loginState: {},
      isUserLoggedIn: false,
    }
  },
  components: {
    InfoTrekHeader,
    LoginModal,
    RegisterModal,
    // DestinationList,
    // DestinationDetail
  },
  methods: {
    /*showPlaceDetail(item) {
      this.places = item;
      console.log(this.places);
    }*/

    openLoginModal(value) {
      this.show = value;
      //console.log(this.show);
    },

    hideLoginModal(value) {
      this.show = value;
      //console.log(this.show);
    },

    hideRegisterModal(value) {
      this.showRegisterPopup = value;
    },

    updateHeader(loginStatus) {
      this.isUserLoggedIn = loginStatus;
    },

    logOut() {
      firebase.default.auth().signOut()
      .then( () => {
        this.isUserLoggedIn = false;
      } )
      .catch( error => { console.log( error ); } );
    }
  },
  mounted() {
    firebase.default.auth().onAuthStateChanged( user => {
      if( user ) {
        this.updateHeader(true);
      } else {
        this.updateHeader(false);
        // Do something. maybe open the login popup
      }
    } );
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: 'Lato', sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#container {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  overflow-x: hidden;
}
</style>
