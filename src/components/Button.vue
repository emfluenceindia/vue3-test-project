<template>
    <button :class="buttonStyle" :type="behavior">
        <slot>submit</slot>
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        behavior: {
            type: String,
            required: true
        },
        baseColor: {
            type: String,
            required: true
        }
    },

    computed: {
        buttonStyle: function() {
            const gradientBase = 'bg-gradient-to-b';
            const fromColor = 'from-' + this.baseColor + '-500';
            const toColor = 'to-' + this.baseColor + '-700';
            const commonStyle = 'rounded text-white py-1 px-3 text-xs antialiased tracking-wide uppercase mx-2 outline-none';

            return gradientBase + ' ' + fromColor + ' ' + toColor + ' ' + commonStyle;
        }
    }
}
</script>

<style scoped>

</style>