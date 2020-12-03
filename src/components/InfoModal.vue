<template>
  <section v-if="modalVisible">
    <section
      class="z-20 w-screen h-screen bg-green-600 fixed top-0 bg-opacity-75"
      @click="closePopup"
    >
      <div class="absolute inset-0">
        <div class="flex h-full">
          <div
            id="info-modal"
            class="scrollbar-thumb:bg-red-500 scrollbar-track:rounded z-30 m-auto p-3 w-8/12 overflow-y-scroll bg-gray-200 rounded-md shadow-2xl"
          >
            <fieldset
              class="border rounded border-white p-2 w-full bg-white shadow-xl"
            >
              <legend
                class="text-left text-lg uppercase font-semibold px-2 rounded bg-white text-gray-600"
              >
                {{ modalTitle }}
              </legend>
              <div v-if="contentType === 'itinerary'">
                <Itinerary :items="modalContent" />
              </div>
              <!-- // Itinerary -->
            </fieldset>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
//import { useSSRContext } from "vue";
import { useStore } from "vuex";
import Itinerary from "./info/Itinerary.vue";

export default {
  setup() {
    const store = useStore();
    const closePopup = () => {
      store.commit("setInfoModalVisibility", false);
    };

    return {
      closePopup,
    };
  },
  name: "InfoModal",
  components: {
    Itinerary,
  },
  props: {},
  data() {
    return {};
  },

  methods: {},

  computed: {
    modalVisible() {
      const store = useStore();
      return store.state.infoModalVisible;
    },

    modalTitle() {
      const store = useStore();
      return store.state.infoModalContentTitle;
    },

    contentType() {
      const store = useStore();
      return store.state.infoModalContentType;
    },

    modalContent() {
      const store = useStore();
      return store.state.infoModalContent;
    },
  },
};
</script>

<style scoped>
#info-modal {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 80%;
}

/* width */
::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 100vh;
  background: #edf2f7;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #edf2f7;
  border-radius: 100vh;
  border: 1px solid white;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #a0aec0;
}
</style>
