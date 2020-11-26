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
        <nav class="bg-gradient-to-l from-green-600 to-green-400 p-2 mt-6 box-border align-baseline w-full border-b-2 border-gray-400">
            <ul class="flex justify-left">
                <li class="mx-1 box-border" v-for="menuItem in menuItems" :key="menuItem.id">
                    <router-link :class="menuItem.title.toLowerCase()" class="tracking-wide px-3 py-1 uppercase text-sm block font-semibold text-green-900 hover:shadow-md" :to="menuItem.link">{{menuItem.title}}</router-link>
                </li>
                <li class="mx-1 box-border">
                    <a class="tracking-wide cursor-pointer px-3 py-1 uppercase text-sm block font-semibold text-green-900 hover:shadow-md" v-if="isAuthenticated" @click.prevent="signOut">Logout</a>
                    <a v-else class="tracking-wide cursor-pointer px-3 py-1 uppercase text-sm block font-semibold text-green-900 hover:shadow-md" @click.prevent="openModal(showModal, 'login', 1)">log in</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'InfoTrekHeader',
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
            menuItems: [
                    {
                        id: 1,
                        title: 'Home',
                        link: '/'
                    },
                    {
                        id: 2,
                        title: 'Destinations',
                        link: '/destinations'
                    },
                    {
                        id: 3,
                        title: 'Stories',
                        link: '/stories'
                    },
                    {
                        id: 4,
                        title: 'About',
                        link: '/about'
                    },
                    {
                        id: 5,
                        title: 'Contact',
                        link: '/contact'
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