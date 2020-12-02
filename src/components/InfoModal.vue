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
                <div class="w-full p-2">
                  <div
                    class="item p-4 rounded-md my-1 shadow-md"
                    v-for="day in modalContent"
                    :key="day.label"
                  >
                    <div class="flex justify-start w-full">
                      <span
                        class="bg-orange-700 text-white py-1 px-3 text-xs uppercase max-w-sm rounded-md rounded-r-none"
                        >{{ day.label }}</span
                      >
                      <span
                        class="bg-blue-800 text-white py-1 px-3 uppercase text-xs w-8/12 text-left"
                      >
                        {{ day.from }}
                        <i
                          class="text-yellow-400 fa fa-arrow-circle-right mx-1"
                        ></i>
                        {{ day.to }}
                      </span>
                      <div
                        class="text-right text-xs font-sans font-semibold w-3/12 bg-blue-700 text-white rounded-md rounded-l-none capitalize pt-1 px-1"
                      >
                        <span
                          class="mr-1 bg-white px-1 text-blue-900 rounded"
                          v-if="day.altitude !== ''"
                          >{{ day.altitude }}</span
                        >
                        <span
                          class="mr-1 bg-white px-1 text-blue-900 rounded"
                          >{{ day.distance }}</span
                        >
                        <span
                          class="mr-1 bg-white px-1 text-blue-900 rounded"
                          >{{ day.transport }}</span
                        >
                      </div>
                    </div>

                    <div class="my-2 text-sm text-left">
                      {{ day.description }}
                    </div>
                  </div>
                </div>
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
  props: {
    modalId: {
      type: Number,
      required: true,
    },
    // modalTitle: {
    //   type: String,
    //   required: true,
    // },
    // modalContent: {
    //   type: Object,
    //   required: true,
    // },
  },
  data() {
    return {};
  },

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
