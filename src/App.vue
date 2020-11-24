<template>
  <div>
    <InfoTrekHeader 
      brand="Aim High" 
      slogan="Mountain is calling" 
      :isAuthenticated="isUserLoggedIn" 
      :userDisplayName="userDisplayName"
      @openmodal="openLoginModal"
      @open-register-modal="hideRegisterModal"
      @signout="logOut" 
    />
    <div id="container">
      <router-view></router-view>
      <!-- <DestinationList heading="Destinations" @placedetail="showPlaceDetail" />
      <DestinationDetail :place="places" /> -->
    </div>
    <LoginModal :show="show" @hidemodal="hideLoginModal" @updateheader="updateHeader" @close-login-and-open-register="closeLoginAndOpenRegister" />
    <RegisterModal :showPopup="showRegisterPopup" @open-register-popup="hideRegisterModal" />
    <AuthPopup :showModal="showModal" :popupId="popupId" :popupLabel="modalLabel" @close-popup="closePopup" />
  </div>
</template>

<script>
import InfoTrekHeader from './components/InfoTrekHeader.vue';
import LoginModal from './components/LoginModal.vue';
import RegisterModal from './components/RegisterModal.vue';
import AuthPopup from './components/AuthenticationModal.vue';
import firebase from './utilities/firebase';
// import DestinationList from './components/destination/DestinationList.vue';
// import DestinationDetail from './components/destination/DestinationDetail.vue';

import { computed, onMounted, ref } from 'vue';

export default {
  name: 'App',

  // Start setup() method
  setup() {
    const placeId = ref(0);
    const places = ref([]);
    const show = ref(false);
    const showModal = ref(false);
    const modalLabel = ref('');
    const showRegisterPopup = ref(false);
    const loginState = ref({});
    const isUserLoggedIn = ref(false);
    const authUserEmail = ref('');
    const popupId = ref(0);

    // functions
    const closePopup = (()=>{
      showModal.value = false;
    });

    const openLoginModal = (( obj ) => {
      //show.value = newValue;
      //console.log(obj);
      showModal.value = obj.modalState;
      modalLabel.value = obj.modalLabel;
      popupId.value = obj.currentPopupId;
      //console.log(newValue, label);
    });

    const hideLoginModal = (newValue => {
      show.value = newValue;
    });

    const hideRegisterModal = (newValue => {
      showRegisterPopup.value = newValue;
    });

    const closeLoginAndOpenRegister = ( () => {
      showRegisterPopup.value = true;
      show.value = false;
    });

    const updateHeader = (loginStatus => {
      isUserLoggedIn.value = loginStatus;
    });

    const logOut = ( () => {
      firebase.default.auth().signOut()
      .then( () => {
        isUserLoggedIn.value = false;
      } )
      .catch( error => { console.log( error ); } );
    });

    // Computed property (getter and setter)
    const userDisplayName = computed({
      get: () => authUserEmail.value.split( '@' )[0],
      set: val => {
        authUserEmail.value = val;
      }
    });

    onMounted(() => {
      firebase.default.auth().onAuthStateChanged( user => {
        if( user ) {
          userDisplayName.value = user.email;
          updateHeader(true);
        } else {
          updateHeader(false);
          // Do something. maybe open the login popup
        }
      });
    });

    return {
      placeId,
      places,
      show,
      showModal,
      modalLabel,
      popupId,
      showRegisterPopup,
      loginState,
      isUserLoggedIn,
      authUserEmail,
      
      closePopup,
      openLoginModal,
      hideLoginModal,
      hideRegisterModal,
      updateHeader,
      logOut,
      userDisplayName,

      closeLoginAndOpenRegister
    }

  },
  // Ends setup() method

  components: {
    InfoTrekHeader,
    LoginModal,
    RegisterModal,
    AuthPopup,
    // DestinationList,
    // DestinationDetail
  },

  /*data() {
    return {
      placeId: 0,
      places: [],
      show: false,
      showRegisterPopup: false,
      loginState: {},
      isUserLoggedIn: false,
      authUserDisplayName: '',
    }
  },

  methods: {
    showPlaceDetail(item) {
      this.places = item;
      console.log(this.places);
    }

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
    },
    
  },
  
  mounted() {
    firebase.default.auth().onAuthStateChanged( user => {
      if( user ) {
        this.authUserDisplayName = user.email.split( '@' )[0];
        this.updateHeader(true);
      } else {
        this.updateHeader(false);
        // Do something. maybe open the login popup
      }
    } );
  }
  */
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
