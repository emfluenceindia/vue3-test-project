<template>
  <div></div>
</template>

<script>
export default {
  name: "InfoModal",
  props: {
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
};
</script>

<style scoped></style>
