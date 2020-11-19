<template>
    <section v-if="showPopup">
        <section class="z-20 w-screen h-screen bg-gray-400 fixed top-0 opacity-75" @click="showRegisterModal(false)"></section>
        <div class="absolute inset-0">
            <div class="flex h-full">
                <div class="z-30 m-auto p-3 w-5/12 bg-gray-200 rounded-md shadow-2xl">
                    <fieldset class="border rounded border-white p-2 w-full bg-white shadow-xl">
                        <legend class="text-left text-lg uppercase font-semibold px-2 rounded bg-white text-gray-600">Register</legend>
                        <form @submit.prevent="submitRegister">
                            <div class="w-11/12 m-auto">
                                <div class="w-full text-left mt-5">
                                    <label class="block w-full text-sm font-medium" for="txtRegisterEmail">Email</label>
                                    <input v-model="userData.registerEmail" type="email" id="txtRegisterEmail" required maxlength="75" class="border border-l-0 border-r-0 border-t-0 border-gray-300 w-full outline-none" />
                                </div>
                                <div class="w-full text-left mt-3 mb-2">
                                    <label class="block w-full text-sm font-medium" for="txtRegisterPassword">Password</label>
                                    <input v-model="userData.registerPassword" type="password" id="txtRegisterPassword" required maxlength="30" pattern="[0-9\s]+" class="border border-l-0 border-r-0 border-t-0 border-gray-300 w-full outline-none" />
                                </div>
                                <div class="w-full text-left mt-3 mb-2">
                                    <label class="block w-full text-sm font-medium" for="txtRegisterFullName">Full Name</label>
                                    <input v-model="userData.registerFullName" type="text" id="txtRegisterFullName" required maxlength="50" pattern="[A-Za-z\s]+" class="border border-l-0 border-r-0 border-t-0 border-gray-300 w-full outline-none" />
                                </div>
                                <div class="w-full text-left mt-3 mb-2">
                                    <label class="block w-full text-sm font-medium" for="txtRegisterPhone">Phone</label>
                                    <input v-model="userData.registerPhone" type="text" id="txtRegisterPhone" required maxlength="12" pattern="[0-9\s]+" class="border border-l-0 border-r-0 border-t-0 border-gray-300 w-full outline-none" />
                                </div>
                            </div>
                            <div class="mt-5 pb-3">
                                <button type="submit" class="bg-gradient-to-b from-green-500 to-green-700 rounded text-white py-1 px-3 text-xs antialiased tracking-wide uppercase mx-2 outline-none">submit</button>
                                <button class="bg-gradient-to-b from-orange-500 to-orange-700 rounded text-white py-1 px-3 text-xs antialiased tracking-wide uppercase outline-none" @click.prevent="showRegisterModal(false)">Cancel</button>
                            </div>
                        </form>
                    </fieldset>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

//import firebase from '../utilities/firebase';

export default {
    name: 'RegisterModal',
    props: {
        showPopup: {
            type: Boolean,
            required: true,
        }
    },
    data() {
        return {
            registerSuccess: false,
            userData: {
                registerEmail: '',
                registerPassword: '',
                registerFullName: '',
                registerPhone: '',
            }
        }
    },
    methods: {
        showRegisterModal(value) {
            this.$emit( 'open-register-popup', value );
        },

        submitRegister() {
            //firebase.default.auth().createUserWithEmailAndPassword()
            
            this.userData.registerEmail = '';
            this.userData.registerPassword = '';
            this.userData.registerFullName = '';
            this.userData.registerPhone = '';

            this.showRegisterModal(false);
        }
    }
}
</script>

<style scoped>

</style>