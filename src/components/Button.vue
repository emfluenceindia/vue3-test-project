<template>
    <button type="behavior" v-if="success === 'true'" class="bg-gradient-to-b from-green-500 to-green-700 rounded text-white py-1 px-3 text-xs antialiased tracking-wide uppercase mx-2 outline-none">{{label}}</button>
    <button type="behavior" v-else class="bg-gradient-to-b from-red-500 to-red-700 rounded text-white py-1 px-3 text-xs antialiased tracking-wide uppercase mx-2 outline-none">{{label}}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        label: {
            type: String,
            required: true
        },
        leftIcon: {
            type: String
        },
        rightIcon: {
            type: String
        },
        behavior: {
            type: String,
            required: true
        },
        success: {
            type: String,
            required: true,
        }
    },
    methods: {

    }
}
</script>

<style scoped>

</style>