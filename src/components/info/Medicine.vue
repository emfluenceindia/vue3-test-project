<template>
  <section>
    <div></div>
  </section>
</template>

<script>
export default {
  name: "Medicine",
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Object,
      required: true,
    },
  },
};
</script>
