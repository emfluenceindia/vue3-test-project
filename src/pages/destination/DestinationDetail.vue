<template>
  <div v-if="place.id !== 0" class="place-dtl">
    <h3>{{ place.name }}</h3>
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
        >Preparation</a
      >
      <a
        class="bg-gradient-to-b from-orange-500 to-orange-800 hover:to-orange-900"
        href="/"
        >Precautions</a
      >
      <a
        class="bg-gradient-to-b from-orange-500 to-orange-800 hover:to-orange-900"
        href="/"
        >Medicines</a
      >
    </div>

    <div class="comments">
      <h3 v-if="place.comments.length > 0">Recent Comments</h3>
      <div v-for="comment in place.comments" :key="comment.id" class="comment">
        <span>{{ comment.user.firstName }} wrote on {{ comment.date }}</span>
        <p>{{ comment.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";

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
      console.log(store.state);
    };

    return {
      showInfoModal,
    };
  },

  name: "DestinationDetail",
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

.place-dtl .comments h3:before {
  content: "\f086";
  font-family: "FontAwesome";
  color: rgb(17, 126, 192);
  padding-right: 0.5rem;
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

.place-dtl .comments .comment span:before {
  font-family: "FontAwesome";
  content: "\f007";
  padding-right: 0.5rem;
  color: rgb(17, 126, 192);
}

.place-dtl .comments .comment p {
  margin: 0.5rem 0;
  font-size: 0.9rem;
}
</style>
