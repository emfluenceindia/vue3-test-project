<template>
    <div class="places">
        <h3><i class="fa fa-map-marker"></i>{{heading}}</h3>
        <ul>
            <li v-for="place in places" :key="place.id">
                <a @click.prevent="showPlaceName(place.name)" :title="place.name" :href="place.url">{{place.name}}<span>({{place.location}})</span></a>
            </li>
        </ul>
    </div>    
</template>

<script>
export default {
    name: 'DestinationList',
    props:{
        heading: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            places: [
                {
                    id: 1,
                    name: 'Bagini Glacier',
                    altitude_mtr: '',
                    altitude_ft: '',
                    difficulty: '',
                    location: 'Uttarakhand',
                    popularity_index: 0,
                    url: 'https://infotrek.com/places/bagini-glacier',
                },
                {
                    id: 2,
                    name: 'Pindari Glacier',
                    altitude_mtr: '',
                    altitude_ft: '',
                    difficulty: '',
                    location: 'Uttarakhand',
                    popularity_index: 0,
                    url: 'https://infotrek.com/places/pindari-glacier',
                },
                {
                    id: 3,
                    name: 'Borasu Pass',
                    altitude_mtr: '',
                    altitude_ft: '',
                    difficulty: '',
                    location: 'Uttarakhand',
                    popularity_index: 0,
                    url: 'https://infotrek.com/places/borasu-pass',
                },
                {
                    id: 4,
                    name: 'Kishong Lake',
                    altitude_mtr: '',
                    altitude_ft: '',
                    difficulty: '',
                    location: 'Sikkim',
                    popularity_index: 0,
                    url: 'https://infotrek.com/places/kishong-lake',
                },
                {
                    id: 5,
                    name: 'Deo Tibba Basecamp',
                    altitude_mtr: '',
                    altitude_ft: '',
                    difficulty: '',
                    location: 'Himachal Pradesh',
                    popularity_index: 0,
                    url: 'https://infotrek.com/places/deo-tibba-basecamp',
                },
                {
                    id: 6,
                    name: 'Sandakphu',
                    altitude_mtr: '',
                    altitude_ft: '',
                    difficulty: '',
                    location: 'West Bengal',
                    popularity_index: 0,
                    url: 'https://infotrek.com/places/sandakphu',
                }
            ]
        }
    },
    methods: {
        showPlaceName(placeName) {
            this.$emit('placedetail', placeName);
        }
    }
}
</script>

<style scoped>
    .places {
        text-align: left;
        width: 28%;
        border-right: 1px solid gainsboro;
    }

    .places h3 {
        margin: 0 auto .75rem 0;
        font-weight: normal;
        font-size: 1rem;
        padding: 6px;
        text-transform: uppercase;
        background: olivedrab;
        color: white;
        box-sizing: border-box;
        width: 90%;
    }
    
    .places h3 i {
        color: greenyellow;
        margin-right: .5rem;
    }

    .places ul {
        width: 90%;
        margin: 0;
        padding: 0;
        list-style: none;
        text-align: left;
    }

    .places ul li {
        display: block;
        font-size: .9rem;
        color: gray;
        padding: .2rem 0;
    }

    .places ul li a {
        color: olivedrab;
        text-decoration: none;
    }

    .places ul li a span {
        color: gray;
        margin-left: .25rem;
    }
    
</style>