<template>
    <section v-if="show">
        <section class="z-20 w-screen h-screen bg-gray-400 fixed top-0 opacity-75" @click="showLoginModal(false)"></section>
        <div class="absolute inset-0">
            <div class="flex h-full">
                <div class="z-30 m-auto p-3 w-5/12 bg-gray-200 rounded-md shadow-2xl">
                    <fieldset class="border rounded border-white p-2 w-full bg-white shadow-xl">
                        <legend class="text-left text-lg uppercase font-semibold px-2 rounded bg-white text-gray-600">Log in</legend>
                        <form @submit.prevent="submitLogin">
                            <div class="w-11/12 m-auto">
                                <div class="w-full text-left mt-5">
                                    <label class="block w-full text-sm font-medium" for="txtLoginId">Email or Username</label>
                                    <input v-model="loginData.loginEmail" type="text" ref="loginInputRef" required maxlength="75" class="border border-l-0 border-r-0 border-t-0 border-gray-300 w-full outline-none" />
                                </div>
                                <div class="w-full text-left mt-3 mb-2">
                                    <label class="block w-full text-sm font-medium" for="txtLoginPassword">Password</label>
                                    <input v-model="loginData.loginPassword" type="password" ref="txtLoginPassword" id="txtLoginPassword" required maxlength="30" class="border border-l-0 border-r-0 border-t-0 border-gray-300 w-full outline-none" />
                                </div>
                            </div>
                            <div class="mt-5 pb-3">
                                <Button behavior="submit" baseColor="green">
                                    <span><i class="fa fa-sign-in" aria-hidden="true"></i>&nbsp;sign in</span>
                                </Button>
                                <Button behavior="submit" baseColor="orange" @click.prevent="showLoginModal(false)">
                                    <span><i class="fa fa-ban" aria-hidden="true"></i>&nbsp;cancel</span>
                                </Button>
                            </div>
                            <div class="mt-5 pb-3">
                                <a href="" @click.prevent="closeLoginAndOpenRegister(false)">Create a free Account!</a>
                            </div>
                        </form>
                    </fieldset>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import firebase from '../utilities/firebase';
import Button from './Button.vue';

export default {
    name: 'LoginModal',
    props: {
        show: {
            type: Boolean,
            required: true
        }
    },
    components: {
        Button
    },
    data() {
        return {
            loginSuccess: false,
            loginState: {
                isLoggedIn: false,
                userEmail: '',
            },
            loginData: {
                loginEmail: '',
                loginPassword: ''
            }
        }
    },
    methods: {
        showLoginModal(value) {
            this.$emit('hidemodal', value);
        },

        closeLoginAndOpenRegister() {
            this.$emit('close-login-and-open-register');
        },

        submitLogin() {
            firebase.default.auth()
            .signInWithEmailAndPassword( this.loginData.loginEmail, this.loginData.loginPassword )
            .then( response => {
                const user_email = response.user.email;
                if( user_email !== '' ) { this.loginSuccess = true; }

                this.loginData.loginEmail = '';
                this.loginData.loginPassword = '';

                this.showLoginModal(false);
                this.$emit( 'updateheader', this.loginSuccess );
            })
            .catch( error => {
                //var errorCode = error.code;
                //var errorMessage = error.message;
                console.log( error );
            });
        }
    },
}
</script>