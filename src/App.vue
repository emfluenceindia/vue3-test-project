<template>
  <InfoTrekHeader brand="Aim High" slogan="Mountain is calling" />
  <div id="container">
    <DestinationList heading="Destinations" @placedetail="showPlaceDetail" />
    <DestinationDetail :place="selectedPlace" />
  </div>
</template>

<script>
import InfoTrekHeader from './components/InfoTrekHeader.vue';
import DestinationList from './components/destination/DestinationList.vue';
import DestinationDetail from './components/destination/DestinationDetail.vue';

export default {  
  name: 'App',
  data() {
    return {
      selectedPlace: '',
    }
  },
  components: {
    InfoTrekHeader,
    DestinationList,
    DestinationDetail
  },
  methods: {
    showPlaceDetail(placeName) {
      this.selectedPlace = placeName;
    }
  },
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  width: 100;
  font-family: 'Lato', sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#container {
  width: 80%;
  margin: 4rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
}
</style>
