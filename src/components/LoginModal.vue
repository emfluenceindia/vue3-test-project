<template>
  <section v-if="show">
    <form @submit.prevent="submitLogin">
      <div class="w-11/12 m-auto">
        <div class="w-full text-left mt-5">
          <label class="block w-full text-sm font-medium" for="txtLoginId"
            >Email or Username</label
          >
          <input
            v-model="loginData.loginEmail"
            type="text"
            ref="loginInputRef"
            required
            maxlength="75"
            class="border border-l-0 border-r-0 border-t-0 border-gray-300 w-full outline-none"
          />
        </div>
        <div class="w-full text-left mt-3 mb-2">
          <label class="block w-full text-sm font-medium" for="txtLoginPassword"
            >Password</label
          >
          <input
            v-model="loginData.loginPassword"
            type="password"
            ref="txtLoginPassword"
            id="txtLoginPassword"
            required
            maxlength="30"
            class="border border-l-0 border-r-0 border-t-0 border-gray-300 w-full outline-none"
          />
        </div>
      </div>
      <div class="mt-5 pb-3">
        <Button :behavior="buttonType.submit" baseColor="green">
          <span
            ><i class="fa fa-sign-in" aria-hidden="true"></i>&nbsp;sign in</span
          >
        </Button>
        <Button
          :behavior="buttonType.reset"
          baseColor="orange"
          @click.prevent="closeModal"
        >
          <span><i class="fa fa-ban" aria-hidden="true"></i>&nbsp;cancel</span>
        </Button>
      </div>
    </form>
  </section>
</template>

<script>
import firebase from "../utilities/firebase";
import Button from "./Button.vue";

export default {
  name: "LoginModal",
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    Button,
  },
  data() {
    return {
      buttonType: {
        submit: "submit",
        reset: "reset",
      },
      loginSuccess: false,
      loginState: {
        isLoggedIn: false,
        userEmail: "",
      },
      loginData: {
        loginEmail: "",
        loginPassword: "",
      },
    };
  },
  mounted() {
    //console.log(this.$store.state);
  },
  unmounted() {
    //console.log(this.$store.state);
  },
  methods: {
    closeModal() {
      this.$emit("hidemodal");
    },

    submitLogin() {
      firebase.default
        .auth()
        .signInWithEmailAndPassword(
          this.loginData.loginEmail,
          this.loginData.loginPassword
        )
        .then((response) => {
          const user_email = response.user.email;
          if (user_email !== "") {
            this.loginSuccess = true;
          }

          this.loginData.loginEmail = "";
          this.loginData.loginPassword = "";

          this.closeModal();
          this.$emit("updateheader", this.loginSuccess);
        })
        .catch((error) => {
          //var errorCode = error.code;
          //var errorMessage = error.message;
          console.log(error);
        });
    },
  },
};
</script>
