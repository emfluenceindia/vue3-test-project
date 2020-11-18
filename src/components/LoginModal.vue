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
                                    <input v-model="loginData.loginEmail" type="text" id="txtLoginId" required maxlength="75" class="border border-l-0 border-r-0 border-t-0 border-gray-300 w-full outline-none" />
                                </div>
                                <div class="w-full text-left mt-3 mb-2">
                                    <label class="block w-full text-sm font-medium" for="txtLoginPassword">Password</label>
                                    <input v-model="loginData.loginPassword" type="password" id="txtLoginPassword" required maxlength="30" class="border border-l-0 border-r-0 border-t-0 border-gray-300 w-full outline-none" />
                                </div>
                            </div>
                            <div class="mt-5 pb-3">
                                <button type="submit" class="bg-gradient-to-b from-green-500 to-green-700 rounded text-white py-1 px-3 text-xs antialiased tracking-wide uppercase mx-2 outline-none">submit</button>
                                <button class="bg-gradient-to-b from-orange-500 to-orange-700 rounded text-white py-1 px-3 text-xs antialiased tracking-wide uppercase outline-none" @click="showLoginModal(false)">Cancel</button>
                            </div>
                        </form>
                    </fieldset>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'LoginModal',
    props: {
        show: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            isOpened: this.show,
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

        submitLogin() {
            console.log(this.loginData);
        }
    }
}
</script>