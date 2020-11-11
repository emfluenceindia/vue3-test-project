<template>
    <div class="places">
        <h3><i class="fa fa-map-marker"></i>{{heading}}</h3>
        <ul>
            <li v-for="place in places" :key="place.id">
                <a @click.prevent="getPlace(place)" :title="place.name" :href="place.url">{{place.name}}<span>({{place.location}})</span></a>
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
                    description: 'Bagini Glacier is proudly seated at an altitude of 14,816 feet in the Garhwal Himalayas. It starts near the base of Trishul and Changabang peaks and flows northwards from here. Being adorned inside the Nanda Devi National Park, the trek offers enchanting views of the placid environs. This trek also gives you the opportunity to feast your eyes on the mighty Dunagiri, Changa Banga and Kalanka peaks too.',
                    altitude_mtr: 4516,
                    altitude_ft: 14816,
                    difficulty: 'Moderate to Difficult',
                    location: 'Uttarakhand',
                    popularity_index: 12.7,
                    best_visit: 'June to October',
                    url: 'https://infotrek.com/places/bagini-glacier',
                    image: 'https://girirajexpeditions.com/wp-content/uploads/2017/10/4827138488_0acd28c766_b-800x430.jpg',
                },
                {
                    id: 2,
                    name: 'Pindari Glacier',
                    description: 'The Pindari Glacier is a glacier found in the upper reaches of the Kumaon Himalayas, to the southeast of Nanda Devi and Nanda Kot. The glacier is about three kilometers long and 365 meters wide and gives rise to the Pindar River which meets the Alakananda at Karnaprayag in the Garhwal district',
                    altitude_mtr: 3660,
                    altitude_ft: 12041,
                    difficulty: 'Easy to Moderate',
                    location: 'Uttarakhand',
                    popularity_index: 19.6,
                    best_visit: 'May to January',
                    url: 'https://infotrek.com/places/pindari-glacier',
                    image: 'https://www.indiamike.com/files/images/35/32/09/bara-shigri-glacier.jpg',
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
        getPlace(item) {
            this.$emit( 'placedetail', item );
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