<template>
    <section v-if="showPopup">
        <form @submit.prevent="submitRegister">
            <div class="w-11/12 m-auto">
                <div class="w-full text-left mt-5">
                    <label class="block w-full text-sm font-medium" for="txtRegisterEmail">Email</label>
                    <input v-model="userEmail" type="email" id="txtRegisterEmail" required maxlength="75" class="border border-l-0 border-r-0 border-t-0 border-gray-300 w-full outline-none" />
                </div>
                <div class="w-full text-left mt-3 mb-2">
                    <label class="block w-full text-sm font-medium" for="txtRegisterPassword">Password</label>
                    <input v-model="userPassword" type="password" id="txtRegisterPassword" required maxlength="30" pattern="[A-Za-z_.0-9]+" class="border border-l-0 border-r-0 border-t-0 border-gray-300 w-full outline-none" />
                </div>
                <!--
                <div class="w-full text-left mt-3 mb-2">
                    <label class="block w-full text-sm font-medium" for="txtRegisterFullName">Full Name</label>
                    <input v-model="userData.registerFullName" type="text" id="txtRegisterFullName" required maxlength="50" pattern="[A-Za-z\s]+" class="border border-l-0 border-r-0 border-t-0 border-gray-300 w-full outline-none" />
                </div>
                <div class="w-full text-left mt-3 mb-2">
                    <label class="block w-full text-sm font-medium" for="txtRegisterPhone">Phone</label>
                    <input v-model="userData.registerPhone" type="text" id="txtRegisterPhone" required maxlength="12" pattern="[0-9\s]+" class="border border-l-0 border-r-0 border-t-0 border-gray-300 w-full outline-none" />
                </div>
                -->
            </div>
            <div class="mt-5 pb-3">
                <Button behavior="submit" baseColor="green">
                    <span><i class="fa fa-user-plus" aria-hidden="true"></i>&nbsp;sign up</span>
                </Button>
                <Button @click.prevent="closeModal" baseColor="orange">
                    <span><i class="fa fa-ban" aria-hidden="true"></i>&nbsp;cancel</span>
                </Button>
            </div>
        </form>
    </section>
</template>

<script>

import firebase from '../utilities/firebase';
import Button from './Button.vue';
import { ref } from 'vue';

export default {
    name: 'RegisterModal',
    props: {
        showPopup: {
            type: Boolean,
            required: true,
        }
    },

    components: {
        Button
    },

    setup( props, { emit } ) {
        const userEmail = ref('');
        const userPassword = ref('');
        
        const submitRegister = () => {
            firebase.default.auth().createUserWithEmailAndPassword( userEmail.value, userPassword.value )
            .then( () => { 
                userEmail.value = '';
                userPassword.value = '';
                //showRegisterModal(false);
                closeModal();
            } )
            .catch( err => {
                console.log( err );
            } )
        };

        // const showRegisterModal = (value) => {
        //     emit( 'open-register-popup', value );
        // }

        const closeModal = () => {
            emit('hidemodal');
        }

        return {
            submitRegister,
            //showRegisterModal,
            closeModal,
            userEmail,
            userPassword
        }
    },
}
</script>

<style scoped>

</style>