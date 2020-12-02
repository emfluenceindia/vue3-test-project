<template>
  <section v-if="showInfoModal">
    <section
      class="z-20 w-screen h-screen bg-gray-400 fixed top-0 opacity-75"
      @click="closePopup"
    ></section>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="z-30 m-auto p-3 w-5/12 bg-gray-200 rounded-md shadow-2xl">
          <fieldset
            class="border rounded border-white p-2 w-full bg-white shadow-xl"
          >
            <legend
              class="text-left text-lg uppercase font-semibold px-2 rounded bg-white text-gray-600"
            >
              {{ popupLabel }}
            </legend>
          </fieldset>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "InfoModal",
  props: {
    showInfoModal: {
      type: Boolean,
      required: true,
      default: false,
    },
    modalId: {
      type: Number,
      required: true,
    },
    modalTitle: {
      type: String,
      required: true,
    },
    modalContent: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },

  methods: {
    closePopup() {
      console.log("Closing...");
    },
  },
};
</script>

<style scoped></style>
