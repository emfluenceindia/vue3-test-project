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
                        <!-- Register popup -->
                    </fieldset>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
//import Button from './Button.vue';
export default {
    name: 'AuthicationModal',
    components: {
        //Button
    },
    props: {
        showModal: {
            type: Boolean,
            required: true
        },
        showLogin: {
            type: Boolean,
            required: true,
            default: false
        },
        showRegister: {
            type: Boolean,
            required: true,
            default: false
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
            console.log('dsdsdsd');
            this.$emit( 'close-popup' );
        },
        submitLogin() {

        }
    }
}
</script>

<style scoped>

</style>