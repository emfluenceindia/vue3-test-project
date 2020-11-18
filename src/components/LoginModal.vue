<template>
    <section v-if="isOpened">
        <section class="z-20 w-screen h-screen bg-green-600 fixed top-0 opacity-75" @click="isOpened = false"></section>
        <div class="absolute inset-0">
            <div class="flex h-full">
                <div class="z-30 m-auto p-2 bg-white rounded shadow">
                    <h1>Login</h1>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'LoginModal',
    props: {
        
    },
    data() {
        return {
            isOpened: true
        }
    }
}
</script>

<style scoped>

</style>