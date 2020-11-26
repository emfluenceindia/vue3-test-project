<template>
    <header class="m-0 pt-3 bg-green-800 box-border w-full border-b-1 border-yellow-500 ">
        <div class="flex flex-no-wrap justify-between">
            <!-- Logo and Branding Area -->
            <div>
                <div class="flex flex-wrap m-2">
                    <div>
                        <a href="/"><img class="w-full md:w-24 shadow-md p-2 mr-4" src="../assets/logo-2.png" :alt="brand"></a>
                    </div>
                    <div class="text-left">
                        <h1 class="text-2xl uppercase text-white m-0" style="font-family: 'Fredoka One', cursive;">{{brand}}</h1>
                        <p class="m-0 text-gray-100 text-xs uppercase bg-green-700 text-center rounded p-1">{{slogan}}</p>
                    </div>
                </div>
            </div>
            
            <!-- Social Activity Area -->
            <div class="mr-6 mt-3 text-white">
                <div v-if="isAuthenticated">
                    Welcome {{userDisplayName}}!<i class="fa fa-sign-out"></i> <a @click.prevent="signOut" href="/sign-out">Log Out</a>
                </div>
                <div v-else>
                    <i class="fa fa-sign-in pr-1"></i><a class="mr-3 text-sm uppercase text-yellow-500" href="/sign-in" @click.prevent="openModal(showModal, 'login', 1)">Sign In</a>
                    <i class="fa fa-user-plus pr-1"></i><a class="text-sm uppercase text-yellow-500" href="/sign-up" @click.prevent="openModal(showModal, 'register', 2)">Sign Up</a>
                </div>
                <ul class="flex justify-center flex-no-wrap mt-2">
                    <li v-for="item in socialItems" :key="item.index">
                        <a :href="item.url" :class="item.lower_name"><i :class="item.icon" class="text-2xl mx-2 p-0 text-white" :title="item.name"></i> </a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- mavigation -->
        <Navigation :isAuthenticated="isAuthenticated" :position="header" @open-login-modal="openModal" />
    </header>
</template>

<script>
import Navigation from './MainNavigation.vue';
export default {
    name: 'InfoTrekHeader',
    components: {
        Navigation
    },
    props: {
        brand: {
            type: String,
            required: true
        },
        slogan: {
            type: String,
            required: false
        },
        isAuthenticated: {
            type: Boolean,
            required: true
        },
        userDisplayName: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            socialItems: [
                {
                    id: 1,
                    name: 'Facebook',
                    lower_name: 'facebook',
                    icon: 'fa fa-facebook-square',
                    url: 'https://facebook.com',
                },
                {
                    id: 2,
                    name: 'Twitter',
                    lower_name: 'twitter',
                    icon: 'fa fa-twitter-square',
                    url: 'https://twitter.com',
                },
                {
                    id: 3,
                    name: 'Instagram',
                    lower_name: 'instagram',
                    icon: 'fa fa-instagram',
                    url: 'https://instagram.com',
                },
                {
                    id: 4,
                    name: 'LinkedIn',
                    lower_name: 'linkedin',
                    icon: 'fa fa-linkedin-square',
                    url: 'https://linkedin.com',
                }
            ],

            

            isLoggedIn: true,
            showModal: true,

            user: {
                id: 1,
                username: 'emfluenceindia',
                first_name: 'Subrata',
                last_name: 'Sarkar',
                isAdmin: true,
            }
        }
    },

    methods: {
        openModal(value, label, popupId) {
            console.log(value, label, popupId);
            this.$emit( 'openmodal', { 
                modalState: value, 
                modalLabel: label, 
                currentPopupId: popupId 
            });
        },

        signOut() {
            this.$emit( 'signout' );
        }
    }
}
</script>