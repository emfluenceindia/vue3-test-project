<template>
    <section v-if="showPopup">
        <!-- Common overlay screen fill -->
        <section class="z-20 w-screen h-screen bg-gray-400 fixed top-0 opacity-75" @click="closePopup(true)"></section>
        <div class="absolute inset-0">
            <div class="flex h-full">
                <div class="z-30 m-auto p-3 w-5/12 bg-gray-200 rounded-md shadow-2xl">
                    <fieldset class="border rounded border-white p-2 w-full bg-white shadow-xl">
                        <legend class="text-left text-lg uppercase font-semibold px-2 rounded bg-white text-gray-600">{{popupLabel}}</legend>
                        <!-- Login popup -->
                        <section v-if="showLogin" id="login">
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
                                    <Button behavior="submit" baseColor="orange" @click.prevent="closePopup(true)">
                                        <span><i class="fa fa-ban" aria-hidden="true"></i>&nbsp;cancel</span>
                                    </Button>
                                </div>
                            </form>
                        </section>

                        <!-- Register popup -->
                        <section v-if="showRegister" id="register">
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
                                </div>
                                <div class="mt-5 pb-3">
                                    <Button behavior="submit" baseColor="green">
                                        <span><i class="fa fa-user-plus" aria-hidden="true"></i>&nbsp;sign up</span>
                                    </Button>
                                    <Button @click.prevent="closePopup(true)" baseColor="orange">
                                        <span><i class="fa fa-ban" aria-hidden="true"></i>&nbsp;cancel</span>
                                    </Button>
                                </div>
                            </form>
                        </section>
                    </fieldset>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Button from './Button.vue';
export default {
    name: 'AuthicationModal',
    components: {
        Button
    },
    props: {
        showPopup: {
            type: Boolean,
            required: true,
            default: false
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
            
        },
        submitLogin() {

        }
    }
}
</script>

<style scoped>

</style>