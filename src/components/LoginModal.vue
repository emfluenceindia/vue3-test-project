<template>
    <section v-if="show">
        <section class="z-20 w-screen h-screen bg-gray-400 fixed top-0 opacity-75" @click="showLoginModal(false)"></section>
        <div class="absolute inset-0">
            <div class="flex h-full">
                <div class="z-30 m-auto py-3 px-5 w-4/12 bg-white rounded-md shadow-2xl">
                    <fieldset class="border rounded border-gray-400 p-2">
                        <legend class="text-left text-sm uppercase font-semibold px-1">Login</legend>
                        <div class="w-11/12 m-auto">
                            <div class="w-full text-left">
                                <label class="block w-full text-sm font-medium" for="txtLoginId">Username</label>
                                <input type="text" id="txtLoginId" required maxlength="75" class="border border-l-0 border-r-0 border-t-0 border-orange-400 w-full outline-none" />
                            </div>
                            <div class="w-full text-left mt-3 mb-2">
                                <label class="block w-full text-sm font-medium" for="txtLoginPassword">Password</label>
                                <input type="password" id="txtLoginPassword" required maxlength="30" class="border border-l-0 border-r-0 border-t-0 border-orange-400 w-full outline-none" />
                            </div>
                        </div>
                    </fieldset>
                    <div class="mt-5">
                        <button class="bg-green-600 rounded text-white py-1 px-3 text-xs antialiased tracking-wide uppercase mx-2 outline-none">login</button>
                        <button class="bg-orange-600 rounded text-white py-1 px-3 text-xs antialiased tracking-wide uppercase outline-none" @click="showLoginModal(false)">Cancel</button>
                    </div>
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
        }
    },
    methods: {
        showLoginModal(value) {
            this.$emit('hidemodal', value);
        }
    }
}
</script>

<style scoped>

</style>