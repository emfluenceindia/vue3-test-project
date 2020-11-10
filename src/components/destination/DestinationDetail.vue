<template>
    <div class="place-dtl">
        <h3>{{place}}</h3>
    </div>    
</template>

<script>
export default {
    name: 'DestinationDetail',
    props: {
        id: {
            type: String,
        },
        place: {
            type: String,
            required: true
        }
    },
    methods: {}
}
</script>

<style scoped>
.place-dtl {
    width: 70%;
    margin: 0 auto;
    text-align: left;
}

.place-dtl h3 {
    margin: 0 auto;
    border-bottom: 1px solid gainsboro;
    padding-bottom: 4px;
    color: orange;
    font-weight: normal;
    text-transform: uppercase;
    font-size: 1.8rem;
}
</style>