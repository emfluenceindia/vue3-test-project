<template>
  <div v-if="place.id !== 0" class="place-dtl">
    <h3>
      {{ place.name }}
      <i
        class="fas fa-heart mx-2 cursor-pointer"
        :class="favIconClass"
        @click="addToFav(place)"
      ></i>
    </h3>
    <div class="photo">
      <img :src="place.image" :alt="place.name" />
    </div>
    <div class="facts">
      <div class="fact">
        <span>Location</span>
        {{ place.location }}
      </div>
      <div class="fact">
        <span>Altitude (Mtr.)</span>
        {{ place.altitude_mtr }}
      </div>
      <div class="fact">
        <span>Altitude (Feet)</span>
        {{ place.altitude_ft }}
      </div>
      <div class="fact">
        <span>Technical Difficulty</span>
        {{ place.difficulty }}
      </div>
      <div class="fact">
        <span>Best Visit</span>
        {{ place.best_visit }}
      </div>
      <div class="fact">
        <span>Popularity Index</span>
        {{ place.popularity_index }}
      </div>
    </div>
    <div class="description">
      <p>{{ place.description }}</p>
    </div>
    <div class="action-panel">
      <a
        class="bg-gradient-to-b from-orange-500 to-orange-800 hover:to-orange-900"
        href="/"
        @click.prevent="
          showInfoModal(place.info.itinerary, 'itinerary', 'trip itinerary')
        "
        >Itinerary</a
      >
      <a
        class="bg-gradient-to-b from-orange-500 to-orange-800 hover:to-orange-900"
        href="/"
        @click.prevent="
          showInfoModal(place.info.itinerary, 'things', 'things to carry')
        "
        >Things to Carry</a
      >

      <a
        class="bg-gradient-to-b from-orange-500 to-orange-800 hover:to-orange-900"
        href="/"
        @click.prevent="
          showInfoModal(place.info.medicine, 'medicine', 'essential medicines')
        "
        >Medicines</a
      >
      <a
        class="bg-gradient-to-b from-orange-500 to-orange-800 hover:to-orange-900"
        href="/"
        @click.prevent="
          showInfoModal(place.info.itinerary, 'dosdont', 'dos and donts')
        "
        >DOS and DONTS</a
      >
    </div>

    <div class="comments">
      <h3 v-if="place.comments.length > 0">
        <i class="fas fa-comments mr-2 text-blue-700"></i>Recent Comments
      </h3>
      <div v-for="comment in place.comments" :key="comment.id" class="comment">
        <span
          ><i class="fas fa-comment text-green-700 mr-2"></i
          >{{ comment.user.firstName }} wrote on {{ comment.date }}</span
        >
        <p>{{ comment.content }}</p>
      </div>
    </div>
    <div class="w-full text-center">
      <a
        class="bg-gradient-to-b from-green-600 to-green-800 p-2 my-1 border rounded-md text-white text-sm shadow-md uppercase"
        >Add A Comment</a
      >
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
//import { computed, onMounted, ref } from "vue";
import { computed, ref } from "vue";

export default {
  setup() {
    const store = useStore();
    const showInfoModal = (content, contentType, contentTitle) => {
      store.commit("setInfoModalVisibility", true);
      store.commit("setInfoModalContent", {
        content: content,
        type: contentType,
        title: contentTitle,
      });
      //console.log(store.state);
    };

    const isFavorite = ref(false);

    /*
    const isMyFavorite = (place) => {
      const favList = store.state.favList;
      const favItem = favList.find(
        (f) =>
          f.place_id === place.id && f.email === store.state.currentUser.email
      );

      console.log(favItem);
    };

    onMounted(() => {
      isMyFavorite();
    });
    */

    const addToFav = (place) => {
      isFavorite.value = !isFavorite.value;
      const objFav = {
        id: Math.random(),
        place_id: place.id,
        place_name: place.name,
        email: store.state.currentUser.email,
      };
      store.commit("updateFavList", objFav);
    };

    const favIconClass = computed({
      get: () => (!isFavorite.value ? "text-gray-400" : "text-pink-700"),
      set: (val) => {
        isFavorite.value = val;
      },
    });

    return {
      showInfoModal,
      isFavorite,
      addToFav,
      favIconClass,
      //isMyFavorite,
    };
  },

  name: "DestinationDetail",
  data() {
    return {
      //isFavorite = false
    };
  },
  props: {
    id: {
      type: String,
    },
    placeName: {
      type: String,
    },
    place: {
      type: Object,
      required: true,
    },
  },
  computed: {},
  methods: {},

  beforeCreated() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
};
</script>

<style scoped>
.place-dtl {
  width: 70%;
  margin: 2rem auto;
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
  border-radius: 0.5rem;
  border: 1px solid gainsboro;
  padding: 0.3rem;
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
  padding: 0.7rem;
  box-sizing: border-box;
  text-align: center;
  margin: 0 0.1rem;
  background: whitesmoke;
  border-top-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.place-dtl .facts .fact span {
  display: block;
  font-weight: bold;
  color: green;
}

.place-dtl .description {
  width: 100%;
  margin: 1rem auto;
  padding: 0 0.2rem;
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
  color: white;
  text-decoration: none;
  font-size: 13px;
  padding: 0.6rem 0 0.6rem 0;
  margin: 0 0.2rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  text-transform: uppercase;
  font-weight: normal;
  letter-spacing: 0.04rem;
}

.place-dtl .comments {
  width: 100%;
  margin: 2rem auto;
  padding: 1rem;
  box-sizing: border-box;
}

.place-dtl .comments h3 {
  color: gray;
  font-size: 1.3rem;
  margin: 0 auto;
}

.place-dtl .comments .comment {
  border: 1px solid gainsboro;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  margin: 0.7rem auto;
}

.place-dtl .comments .comment span {
  font-size: 0.8rem;
  display: block;
  color: gray;
}

.place-dtl .comments .comment p {
  margin: 0.5rem 0;
  font-size: 0.9rem;
}
</style>
