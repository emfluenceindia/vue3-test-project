<template>
    <!-- https://css-tricks.com/intro-to-vue-5-animations/ -->
    <div v-for="(image, index) in images" :key="image.id" class="slider-container relative w-full m-auto text-center">
        <transition name="fade">
            <img :class="imageLoaded ? 'show' : ''" v-if="this.currentSlide === index" :src="image.url" :alt="image.alt" />
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Slider',
    data() {
        return {
            currentSlide: 0,
            interval: '',
            imageLoaded: false,
            images: [
                {
                    id: 1,
                    url: 'https://emfluenceindia.sirv.com/Slider/1.jpg',
                    alt: "Sandakphu"
                },
                {
                    id: 2,
                    url: 'https://emfluenceindia.sirv.com/Slider/2.jpg',
                    alt: "Sandakphu"
                },
                {
                    id: 3,
                    url: 'https://emfluenceindia.sirv.com/Slider/3.jpg',
                    alt: "Sandakphu"
                },
                {
                    id: 4,
                    url: 'https://emfluenceindia.sirv.com/Slider/4.jpeg',
                    alt: "Sandakphu"
                },
                {
                    id: 5,
                    url: 'https://emfluenceindia.sirv.com/Slider/5.jpg',
                    alt: "Sandakphu"
                }
            ]
        }
    },

    mounted() {
        this.interval = setInterval( () => {
            if( this.imageLoaded ) this.imageLoaded = false;
            if( this.currentSlide === this.images.length - 1 ) {
                this.currentSlide = 0;
            } else {
                this.currentSlide++;
            }
            this.imageLoaded = true;
        }, 8000 );
    },

    beforeUnmount() {
        clearInterval( this.interval );
    }
}
</script>

<style scoped>
    .slider-container {
        overflow: hidden;
        background: url('https://emfluenceindia.sirv.com/Slider/6.jpg') 0 0 no-repeat;
    }

    .slider-container img {
        max-width: 100%;
        margin: 0 auto;
    }

    /*.slider-container img.show {
        opacity: 1;
    }*/

    .fade-enter-active,
    .fade-leave-active {
        /*transition: opacity 0.5s ease;*/
        transition: all 3s ease;
    }

    .fade-enter-from {
        opacity: 0;
        transform: translateX(100%);
    }
    .fade-leave-to {
        display: none;
        opacity: 0;
        transform: translateX(-100%);
    }
</style>