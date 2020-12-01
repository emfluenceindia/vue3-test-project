<template>
  <header
    class="m-0 pt-3 bg-green-800 box-border w-full border-b-1 border-yellow-500 "
  >
    <div class="flex flex-no-wrap justify-between">
      <!-- Logo and Branding Area -->
      <div>
        <div class="flex flex-wrap m-2">
          <div>
            <a href="/">
              <img
                class="w-full md:w-24 shadow-md p-2 mr-4"
                src="../assets/logo-2.png"
                :alt="brand"
              />
            </a>
          </div>
          <div class="text-left">
            <h1
              class="text-2xl uppercase text-white m-0"
              style="font-family: 'Fredoka One', cursive;"
            >
              {{ brand }}
            </h1>
            <p
              class="m-0 text-gray-100 text-xs uppercase bg-green-700 text-center rounded p-1"
            >
              {{ slogan }}
            </p>
          </div>
        </div>
      </div>

      <!-- Social Activity Area -->
      <div class="mr-6 mt-3 text-white">
        <div v-if="isAuthenticated">
          <i class="fa fa-user-circle mr-1"></i>
          <span class="text-sm" v-html="userDisplayName"></span>
          <a
            class="uppercase text-white text-xs bg-gradient-to-t from-red-600 to-red-800 px-3 hover:shadow-lg py-1 ml-2 rounded shadow-md"
            @click.prevent="signOut"
            href="/sign-out"
          >
            <i class="fa fa-sign-out mr-1"></i>Log Out
          </a>
        </div>
        <div v-else>
          <i class="fa fa-sign-in pr-1"></i
          ><a
            class="mr-3 text-sm uppercase text-yellow-500"
            href="/sign-in"
            @click.prevent="openModal(showModal, 'login', 1)"
            >Log In</a
          >
          <i class="fa fa-user-plus pr-1"></i
          ><a
            class="text-sm uppercase text-yellow-500"
            href="/sign-up"
            @click.prevent="openModal(showModal, 'register', 2)"
            >Sign Up</a
          >
        </div>
        <ul class="flex justify-center flex-no-wrap mt-2">
          <li v-for="item in socialItems" :key="item.index">
            <a :href="item.url" :class="item.lower_name"
              ><i
                :class="item.icon"
                class="text-2xl mx-2 p-0 text-white"
                :title="item.name"
              ></i>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- 
            Site Navigation
            Responsive: https://medium.com/@Mrsimi/responsive-navbar-in-tailwindcss-the-fast-lane-cce11fdf78f7
            @apply: https://tailwindcss.com/docs/functions-and-directives#apply
            Tailwind CSS: https://www.youtube.com/watch?v=21HuwjmuS7A&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=1
        -->
    <nav
      class="bg-gradient-to-l from-green-600 to-green-400 p-2 mt-6 box-border align-baseline w-full border-b-2 border-gray-400"
    >
      <p id="hamburgerbtn" class="md:hidden text-right">
        <i
          class="fa fa-bars text-white cursor-pointer text-2xl mx-4 rounded bg-gradient-to-b from-orange-500 to-orange-800 shadow-lg px-2 py-1 box-border"
          aria-hidden="true"
        ></i>
      </p>
      <ul class="hidden md:flex md:flex-row justify-left" id="mobilemenu">
        <li
          class="mx-1 box-border"
          v-for="menuItem in menuItems"
          :key="menuItem.id"
        >
          <router-link
            :class="menuItem.title.toLowerCase()"
            class="tracking-wide px-3 py-1 uppercase text-sm block font-semibold text-green-900 hover:shadow-md text-left"
            :to="menuItem.link"
            >{{ menuItem.title }}</router-link
          >
        </li>
        <li class="mx-1 box-border">
          <a
            class="tracking-wide cursor-pointer px-3 py-1 uppercase text-sm block font-semibold text-green-900 hover:shadow-md text-left"
            v-if="isAuthenticated"
            @click.prevent="signOut"
            >Logout</a
          >
          <a
            v-else
            class="tracking-wide cursor-pointer px-3 py-1 uppercase text-sm block font-semibold text-green-900 hover:shadow-md text-left"
            @click.prevent="openModal(showModal, 'login', 1)"
            >log in</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "InfoTrekHeader",
  props: {
    brand: {
      type: String,
      required: true,
    },
    slogan: {
      type: String,
      required: false,
    },
  },

  data() {
    return {
      socialItems: [
        {
          id: 1,
          name: "Facebook",
          lower_name: "facebook",
          icon: "fa fa-facebook-square",
          url: "https://facebook.com",
        },
        {
          id: 2,
          name: "Twitter",
          lower_name: "twitter",
          icon: "fa fa-twitter-square",
          url: "https://twitter.com",
        },
        {
          id: 3,
          name: "Instagram",
          lower_name: "instagram",
          icon: "fa fa-instagram",
          url: "https://instagram.com",
        },
        {
          id: 4,
          name: "LinkedIn",
          lower_name: "linkedin",
          icon: "fa fa-linkedin-square",
          url: "https://linkedin.com",
        },
      ],
      menuItems: [
        {
          id: 1,
          title: "Home",
          link: "/",
        },
        {
          id: 2,
          title: "Destinations",
          link: "/destinations",
        },
        {
          id: 3,
          title: "Stories",
          link: "/stories",
        },
        {
          id: 4,
          title: "About",
          link: "/about",
        },
        {
          id: 5,
          title: "Contact",
          link: "/contact",
        },
      ],
      isLoggedIn: true,
      showModal: true,

      user: {
        id: 1,
        username: "emfluenceindia",
        first_name: "Subrata",
        last_name: "Sarkar",
        isAdmin: true,
      },
    };
  },

  computed: {
    userDisplayName: () => {
      const store = useStore();
      return (
        'Logged in as<span class="text-yellow-500 ml-1 uppercase">' +
        store.state.userDisplayName +
        "</span>"
      );
    },

    isAuthenticated: () => {
      const store = useStore();
      return store.state.isAuthenticated;
    },
  },

  watch: {
    // isLoggedIn(value) {
    //   setTimeout(() => {
    //     if (value === false) {
    //       console.log("You are signed out!");
    //     }
    //   }, 2000);
    // },
  },

  methods: {
    openModal(value, label, popupId) {
      this.$emit("openmodal", {
        modalState: value,
        modalLabel: label,
        currentPopupId: popupId,
      });
    },

    signOut() {
      this.$emit("signout");
    },

    /**
     * hamburger menu
     */
    toggleMobileMenu() {
      let hb = document.getElementById("hamburgerbtn");
      let mobileMenu = document.getElementById("mobilemenu");
      hb.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
      });
    },
  },

  mounted() {
    this.toggleMobileMenu();
  },
};
</script>

<style scoped>
.active {
  display: block;
}

.active a {
  color: darkgreen;
  font-weight: 400;
  text-transform: capitalize;
}

.active a:before {
  font-family: "FontAwesome";
  content: "\f0da";
  color: white;
  margin-right: 0.5rem;
  padding: 0.17rem 0.4rem 0.17rem 0.5rem;
  background-color: darkgreen;
  border-radius: 50%;
}</style
>>
