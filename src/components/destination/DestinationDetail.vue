<template>
    <div class="place-dtl">
        <h3>{{place.name}}</h3>
        <div class="photo">
            <img :src="place.image" :alt="place.name" />
        </div>
        <div class="facts">
            <div class="fact">
                <span>Location</span>
                {{place.location}}
            </div>
            <div class="fact">
                <span>Altitude (Mtr.)</span>
                {{place.altitude_mtr}}
            </div>
            <div class="fact">
                <span>Altitude (Feet)</span>
                {{place.altitude_ft}}
            </div>
            <div class="fact">
                <span>Technical Difficulty</span>
                {{place.difficulty}}
            </div>
            <div class="fact">
                <span>Best Visit</span>
                {{place.best_visit}}
            </div>
            <div class="fact">
                <span>Popularity Index</span>
                {{place.popularity_index}}
            </div>
        </div>
        <div class="description">
            <p>{{place.description}}</p>
        </div>
        <div class="action-panel">
            <a href="/">Itinerary</a>
            <a href="/">Preparation</a>
            <a href="/">Precautions</a>
            <a href="/">Medicines</a>
        </div>
    </div>    
</template>

<script>
export default {
    name: 'DestinationDetail',
    props: {
        id: {
            type: String,
        },
        placeName: {
            type: String
        },
        place: {
            type: Object,
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
    padding-bottom: 4px;
    color: chocolate;
    font-weight: normal;
    text-transform: uppercase;
    font-size: 1.8rem;
}

.place-dtl .photo {
    margin: 1rem auto;
    box-sizing: border-box;
}

.place-dtl .photo img {
    max-width: 100%;
    border-radius: .5rem;
    border: 1px solid gainsboro;
    padding: .3rem;
    box-sizing: border-box;
}

.place-dtl .facts {
    width: 100%;
    margin: 2rem auto;
    display: flex;
    flex-wrap: none;
    justify-content: space-between;
    font-size: 12px;
}

.place-dtl .facts .fact {
    flex-grow: 1;
    border: 1px solid gainsboro;
    padding: .7rem;
    box-sizing: border-box;
    text-align: center;
    margin: 0 .1rem;
    background: whitesmoke;
    border-top-left-radius: .5rem;
    border-bottom-right-radius: .5rem;
}

.place-dtl .facts .fact span {
    display: block;
    font-weight: bold;
    color: green;
}

.place-dtl .description {
    width: 100%;
    margin: 1rem auto;
    padding: 0 .2rem;
    box-sizing: border-box;
}

.place-dtl .description p {
    font-size: 13px;
    line-height: 1.5rem;
}

.place-dtl .action-panel {
    width: 100%;
    text-align: center;
    display: flex;
    flex-wrap: none;
    justify-content: space-between;
}

.place-dtl .action-panel a {
    flex-grow: 1;
    background: chocolate;
    color: white;
    text-decoration: none;
    font-size: 12px;
    padding: .6rem 0 .6rem 0;
    margin: 0 .2rem;
    border-radius: .3rem;
    box-sizing: border-box;
    text-transform: uppercase;
    font-weight: normal;
}

</style>