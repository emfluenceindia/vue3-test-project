<template>
  <div class="flex w-full mx-10">
    <div class="places">
      <h3><i class="fa fa-map-marker"></i>Destinations</h3>
      <ul>
        <li v-for="place in places" :key="place.id">
          <a
            @click.prevent="getPlace(place)"
            :title="place.name"
            :href="place.url"
            >{{ place.name }}<span>({{ place.location }})</span></a
          >
        </li>
      </ul>
    </div>
    <DestinationDetail :place="selectedPlace" />
  </div>
</template>

<script>
/**
 * Integrating Compositon API for the first time
 */
import { ref } from "vue";
import DestinationDetail from "./DestinationDetail.vue";

export default {
  /**
   * Composition API Setup method starts
   */

  setup() {
    const isLoaded = ref(Boolean);
    const selectedPlace = ref({ id: 0 });
    const places = ref([
      {
        id: 1,
        name: "Bagini Glacier",
        description:
          "Bagini Glacier is proudly seated at an altitude of 14,816 feet in the Garhwal Himalayas. It starts near the base of Trishul and Changabang peaks and flows northwards from here. Being adorned inside the Nanda Devi National Park, the trek offers enchanting views of the placid environs. This trek also gives you the opportunity to feast your eyes on the mighty Dunagiri, Changa Banga and Kalanka peaks too.",
        altitude_mtr: 4516,
        altitude_ft: 14816,
        difficulty: "Moderate to Difficult",
        location: "Uttarakhand",
        popularity_index: 12.7,
        best_visit: "June to October",
        url: "https://infotrek.com/places/bagini-glacier",
        image:
          "https://girirajexpeditions.com/wp-content/uploads/2017/10/4827138488_0acd28c766_b-800x430.jpg",
        info: {
          itinerary: [
            {
              label: "Day 01",
              from: "Haridwar",
              to: "Joshimath",
              transport: "Car",
              distance: "250 Km",
              altitude: "",
              description: "Transfer from Haridwar to Joshimath by car.",
            },
            {
              label: "Day 02",
              from: "Joshimath",
              to: "Ruing Village",
              transport: "Jeep",
              distance: "47 Km",
              altitude: "",
              description:
                "1 Hour drive from Joshimath will take you to Ruing village. Trek starts from Ruing village.",
            },
            {
              label: "Day 03",
              from: "Ruing Village",
              to: "Dronagiri Village",
              transport: "Trek",
              distance: "8 Km",
              altitude: "3610 Mtr",
              description:
                "Our second day of trekking will begin from Ruing Village and today, we shall be walking towards Dronagiri village (8kms from Ruing Village). Night stay at Dronagiri Village",
            },
            {
              label: "Day 04",
              from: "Dronagiri Village",
              to: "Bagini Basecamp",
              transport: "Trek",
              distance: "10 Km",
              altitude: "4484 Mtr",
              description:
                "After breakfast today, we will attempt steep ascending towards Bagini Base Camp. It is a10kms trek between the two destinations. Overnight stay at Bagini Base Camp.",
            },
            {
              label: "Day 05",
              from: "Bagini Basecamp",
              to: "Changbang Basecamp",
              transport: "Trek",
              distance: "12 Km",
              altitude: "4600 Mtr",
              description:
                "After early morning breakfast, we will leave for Changbang Base Camp from Bagini Base Camp. It is a 12 to 14kms trek. We shall also attempt climbing up to advance base camp. By evening we shall try to make it back to Bagini Base Camp. Camping and overnight stay at Bagini Base Camp.",
            },
            {
              label: "Day 06",
              from: "Bagini Basecamp",
              to: "Ruing Village",
              transport: "Trek",
              distance: "18 Km",
              altitude: "",
              description:
                "By following the same route, we will return back to Ruing Village. It will be an 18kms trek.",
            },
            {
              label: "Day 07",
              from: "Ruing Village",
              to: "Jumma",
              transport: "Trek",
              distance: "3 Km",
              altitude: "",
              description:
                "From Jumma, a 3kms trek will lead back to Jumma and from there we shall drive to Joshimath. Overnight stay at Joshimath.",
            },
            {
              label: "Day 08",
              from: "Joshimath",
              to: "Haridwar/Delhi",
              transport: "Car",
              distance: "495 Km",
              altitude: "",
              description: "Trip ends at Haridwar / Delhi",
            },
          ],
          preparation: "",
          precaution: "",
          medicine: "",
        },
        comments: [
          {
            id: 1,
            user: {
              id: 44,
              firstName: "Subrara",
              lastName: "Sarkar",
            },
            date: "2020-08-11",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosq.",
          },
          {
            id: 2,
            user: {
              id: 78,
              firstName: "Sudipto",
              lastName: "Roy",
            },
            date: "2020-08-11",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosq.",
          },
          {
            id: 3,
            user: {
              id: 4,
              firstName: "Jaya",
              lastName: "Sarkar",
            },
            date: "2020-08-11",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosq.",
          },
          {
            id: 4,
            user: {
              id: 21,
              firstName: "Srijoni",
              lastName: "Sarkar",
            },
            date: "2020-08-11",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosq.",
          },
          {
            id: 5,
            user: {
              id: 786,
              firstName: "Shail Bala",
              lastName: "Tripathy",
            },
            date: "2020-08-11",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosq.",
          },
        ],
      },
      {
        id: 2,
        name: "Pindari Glacier",
        description:
          "The Pindari Glacier is a glacier found in the upper reaches of the Kumaon Himalayas, to the southeast of Nanda Devi and Nanda Kot. The glacier is about three kilometers long and 365 meters wide and gives rise to the Pindar River which meets the Alakananda at Karnaprayag in the Garhwal district",
        altitude_mtr: 3660,
        altitude_ft: 12041,
        difficulty: "Easy to Moderate",
        location: "Uttarakhand",
        popularity_index: 19.6,
        best_visit: "May to January",
        url: "https://infotrek.com/places/pindari-glacier",
        image:
          "https://www.indiamike.com/files/images/35/32/09/bara-shigri-glacier.jpg",
        info: {
          itinerary: "Coming soon",
          preparation: "",
          precaution: "",
          medicine: "",
        },
        comments: [],
      },
      {
        id: 3,
        name: "Borasu Pass",
        description:
          "Borasu Pass or Bara-su is a high mountain pass in the Himalaya Mountains of Uttarakhand in the India. The pass is located on the border of Uttarakhand and Himachal Pradesh near the border with Tibet. It was an ancient trade route between Har Ki Doon valley and Kinnaur valley.",
        altitude_mtr: 5450,
        altitude_ft: 17880,
        difficulty: "Moderate to Difficult",
        location: "Uttarakhand",
        popularity_index: 9.97,
        best_visit: "June to October",
        url: "https://infotrek.com/places/borasu-pass",
        image:
          "https://www.himalayanhikers.in/wp-content/uploads/2019/10/Borasu-Pass-Trakers.jpg",
        info: {
          itinerary: "Coming soon",
          preparation: "",
          precaution: "",
          medicine: "",
        },
        comments: [],
      },
      {
        id: 4,
        name: "Kishong Lake",
        description:
          "Situated at an altitude of 4500 meters, the Kishong Lake is flanked by mystical mountains in the north region of Sikkim which remains largely untouched and pristine.",
        altitude_mtr: 4500,
        altitude_ft: 14764,
        difficulty: "Moderate to Diffucult",
        location: "Sikkim",
        popularity_index: 5.79,
        best_visit: "June to October",
        url: "https://infotrek.com/places/kishong-lake",
        image: "https://i.ytimg.com/vi/G5B3Z6mr1iE/maxresdefault.jpg",
        info: {
          itinerary: "Coming soon",
          preparation: "",
          precaution: "",
          medicine: "",
        },
        comments: [],
      },
      {
        id: 5,
        name: "Deo Tibba Basecamp",
        description:
          "Other peaks like Indrasan and the glaciers of Jagatsukh and Deo Tibba are also visible. The maximum altitude gained during Deo Tibba is 14,698 ft (approximately). Best time to do Deo Tibba base camp is between May to October.",
        altitude_mtr: 4480,
        altitude_ft: 14698,
        difficulty: "Moderate",
        location: "Himachal Pradesh",
        popularity_index: 9.8,
        best_visit: "May to October",
        url: "https://infotrek.com/places/deo-tibba-basecamp",
        image:
          "https://www.bikatadventures.com/images/Gallery/IMG1000X548/img-deo-tibba-base-camp-trek2037-Bikat-Adventures.jpg",
        info: {
          itinerary: "Coming soon",
          preparation: "",
          precaution: "",
          medicine: "",
        },
        comments: [],
      },
      {
        id: 6,
        name: "Sandakphu",
        description:
          "Sandakphu is the highest peak in the state of West Bengal, India. It is the highest point of the Singalila Ridge in Darjeeling district on the West Bengal-Nepal border. The peak is located at the edge of the Singalila National Park. Four of the five highest peaks in the world, Everest, Kangchenjunga, Lhotse and Makalu can be seen from its summit.",
        altitude_mtr: 3636,
        altitude_ft: 11929,
        difficulty: "Easy (Beginner)",
        location: "West Bengal",
        popularity_index: 30.9,
        best_visit: "October to March",
        url: "https://infotrek.com/places/sandakphu",
        image:
          "https://indiahikes.com/wp-content/uploads/2016/05/Sandakphu-Sleeping-Buddha-Range-Indiahikes-1.jpg",
        info: {
          itinerary: "Coming soon",
          preparation: "",
          precaution: "",
          medicine: "",
        },
        comments: [],
      },
      {
        id: 7,
        name: "Milam Glacier",
        description:
          "Milam Glacier Trek is a gateway to explore the mystiques of Uttarakhand. Milam Glacier is one of the remotest yet accessible glaciers of Uttarakhand. Milam Glacier is the largest glacier of Kumaon covering an area of 37 square kilometers. The base camp for this 16km long glacier is at Munsiyari.",
        altitude_mtr: 3870,
        altitude_ft: 12700,
        difficulty: "Easy to Moderate",
        location: "Uttarakhand",
        popularity_index: 23.4,
        best_visit: "May to October",
        url: "https://infotrek.com/places/milam-glacier",
        image:
          "https://static2.tripoto.com/media/filter/tst/img/256163/TripDocument/1536668746_1533887116_img_20180531_110402_hdr.jpg",
        info: {
          itinerary: "Coming soon",
          preparation: "",
          precaution: "",
          medicine: "",
        },
        comments: [],
      },
    ]);

    const getPlace = (item) => {
      selectedPlace.value = item;
    };

    return {
      isLoaded,
      selectedPlace,
      places,
      getPlace,
    };
  },

  /* setup() method ends */

  name: "DestinationList",
  components: {
    DestinationDetail,
  },
  props: {
    heading: {
      type: String,
    },
  },
  /*
    data() {
        return {
            isLoaded: false,
            selectedPlace: { id: 0 },
            places: [
                { status: 'Moved inside composition API setup method' }
            ]
        }
    },
    methods: {
        getPlace(item) {
            this.selectedPlace = item;
            //this.$emit( 'placedetail', item );
        }
    },

    beforeUpdate() {
        this.isLoaded = false;
    },

    updated() {
        this.isLoaded = true;
        console.log("Updated");
    }*/
};
</script>

<style scoped>
.places {
  text-align: left;
  width: 25%;
  border-right: 1px solid gainsboro;
  margin: 2rem 0;
}

.places h3 {
  margin: 0 auto 0.75rem 0;
  font-weight: normal;
  font-size: 1rem;
  padding: 6px;
  text-transform: uppercase;
  background: rgb(17, 126, 192);
  color: white;
  box-sizing: border-box;
  width: 90%;
}

.places h3 i {
  color: gainsboro;
  margin-right: 0.5rem;
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
  font-size: 0.9rem;
  color: gray;
  padding: 0.2rem 0;
}

.places ul li:before {
  font-family: "FontAwesome";
  content: "\f1bb";
  color: gray;
  padding-right: 0.25rem;
}

.places ul li a {
  color: rgb(17, 126, 192);
  text-decoration: none;
}

.places ul li a:hover {
  color: black;
}

.places ul li a span {
  color: gray;
  margin-left: 0.25rem;
}
</style>
