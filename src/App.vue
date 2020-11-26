<template>
  <div>
    <InfoTrekHeader 
      :brand="branding.title"
      :slogan="branding.catchLine" 
      :isAuthenticated="isUserLoggedIn" 
      :userDisplayName="userDisplayName"
      @openmodal="openAuthModal"
      @signout="logOut" 
    />
    <div id="container">
      <router-view></router-view>
    </div>
    <AuthPopup 
      :showModal="showModal" 
      :popupId="popupId" 
      :popupLabel="modalLabel" 
      @close-popup="closePopup" 
    />
  </div>
</template>

<script>
import InfoTrekHeader from './components/InfoTrekHeader.vue';
import AuthPopup from './components/AuthenticationModal.vue';
import firebase from './utilities/firebase';

import { computed, onMounted, ref } from 'vue';

export default {
  name: 'App',
  //emits:[ 'openmodal', 'signout' ],

  // Start setup() method
  setup() {
    const showModal = ref(false);
    const modalLabel = ref('');
    const isUserLoggedIn = ref(false);
    const authUserEmail = ref('');
    const popupId = ref(0);
    const branding = ref({
      title: 'Mountain Walkers',
      catchLine: 'the best view awaits you at the top',
    });

    // functions
    const closePopup = (()=>{
      showModal.value = false;
    });

    const openAuthModal = (( obj ) => {
      console.log(obj);
      showModal.value = obj.modalState;
      modalLabel.value = obj.modalLabel;
      popupId.value = obj.currentPopupId;
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
      branding,
      showModal,
      modalLabel,
      popupId,
      isUserLoggedIn,
      authUserEmail,
      
      closePopup,
      openAuthModal,
      updateHeader,
      logOut,
      userDisplayName,
    }

  },
  // Ends setup() method

  components: {
    InfoTrekHeader,
    AuthPopup,
  },
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
