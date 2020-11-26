<template>
    <div>
        <nav class="bg-gradient-to-l from-green-600 to-green-400 p-2 mt-6 box-border align-baseline w-full border-b-2 border-gray-400">
            <ul class="flex justify-left">
                <li class="mx-1 box-border" v-for="menuItem in menuItems" :key="menuItem.id">
                    <router-link :class="menuItem.title.toLowerCase()" class="tracking-wide px-3 py-1 uppercase text-sm block font-semibold text-green-900 hover:shadow" :to="menuItem.link">{{menuItem.title}}</router-link>
                </li>
                <li class="mx-1 box-border">
                    <a class="tracking-wide cursor-pointer px-3 py-1 uppercase text-sm block font-semibold text-green-900 hover:shadow" v-if="isAuthenticated" @click.prevent="signOut">Logout</a>
                    <a v-else class="tracking-wide cursor-pointer px-3 py-1 uppercase text-sm block font-semibold text-green-900 hover:shadow" @click.prevent="openModal(showModal, 'login', 1)">Login</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'MainNavagation',
    props: {
        isAuthenticated: {
            type: Boolean,
            required: true
        },

        position: {
            type: String,
            required: true,
            default: 'header',
        }
    },
    data() {
        return {
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
        }
    }
}
</script>