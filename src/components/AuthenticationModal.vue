<template>
    <section v-if="showModal">
        <!-- Common overlay screen fill -->
        <section class="z-20 w-screen h-screen bg-gray-400 fixed top-0 opacity-75" @click="closePopup()"></section>
        <div class="absolute inset-0">
            <div class="flex h-full">
                <div class="z-30 m-auto p-3 w-5/12 bg-gray-200 rounded-md shadow-2xl">
                    <fieldset class="border rounded border-white p-2 w-full bg-white shadow-xl">
                        <legend class="text-left text-lg uppercase font-semibold px-2 rounded bg-white text-gray-600">{{popupLabel}}</legend>
                        <!-- Login popup -->
                        <section v-if="popupId === 1">
                            Login
                        </section>
                        <section v-else>
                            Register
                        </section>
                        <!-- Register popup -->
                    </fieldset>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
//import Button from './Button.vue';
// import Login from './LoginModal.vue';
// import Register from './RegisterModal.vue';

export default {
    name: 'AuthicationModal',
    components: {
        //Button,
        // Login,
        // Register
    },
    props: {
        showModal: {
            type: Boolean,
            required: true
        },
        popupId: {
            type: Number,
            required: true
        },
        popupLabel: {
            type: String,
            required: true
        }
    },
    data() {
        return {

        }
    },
    computed: {

    },
    methods: {
        closePopup() {
            this.$emit( 'close-popup' );
        },
        submitLogin() {

        }
    }
}
</script>

<style scoped>

</style>