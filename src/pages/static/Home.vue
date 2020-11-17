<template>
    <div>
        <section class="slider relative">
            <Slider />
        </section>
    </div>
    <div class="w-11/12 m-auto">
        <section>
            <h2 class="text-2xl p-2">Recently Added</h2>
            <div class="flex flex-wrap mb-4 m-auto">
                <div class="w-1/6 my-2" v-for="image in images" :key="image.id">
                    <img class="rounded" :src="image.url" alt="Some text" />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Slider from './Slider.vue';

export default {
  components: { Slider },
    name: 'Home',
    data() {
        return {
            images: [
                {
                    id: 1,
                    url: 'https://emfluenceindia.sirv.com/Sandakphu/1.jpg?thumbnail=200'
                },
                {
                    id: 2,
                    url: 'https://emfluenceindia.sirv.com/Sandakphu/2.jpg?thumbnail=200'
                },
                {
                    id: 3,
                    url: 'https://emfluenceindia.sirv.com/Sandakphu/3.jpg?thumbnail=200'
                },
                {
                    id: 4,
                    url: 'https://emfluenceindia.sirv.com/Sandakphu/4.jpg?thumbnail=200'
                },
                {
                    id: 5,
                    url: 'https://emfluenceindia.sirv.com/Sandakphu/5.jpg?thumbnail=200'
                },
                {
                    id: 6,
                    url: 'https://emfluenceindia.sirv.com/Sandakphu/6.jpg?thumbnail=200'
                },
                {
                    id: 7,
                    url: 'https://emfluenceindia.sirv.com/Sandakphu/8.jpg?thumbnail=200'
                },
                {
                    id: 8,
                    url: 'https://emfluenceindia.sirv.com/Sandakphu/8.jpg?thumbnail=200'
                },
                {
                    id: 9,
                    url: 'https://emfluenceindia.sirv.com/Sandakphu/9.jpg?thumbnail=200'
                },
                {
                    id: 10,
                    url: 'https://emfluenceindia.sirv.com/Sandakphu/10.jpg?thumbnail=200'
                },
                {
                    id: 11,
                    url: 'https://emfluenceindia.sirv.com/Sandakphu/11.jpg?thumbnail=200'
                },
                {
                    id: 12,
                    url: 'https://emfluenceindia.sirv.com/Sandakphu/12.jpg?thumbnail=200'
                },
            ]
        }
    }
}
</script>

<style scoped>

</style>