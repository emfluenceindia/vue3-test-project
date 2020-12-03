<template>
  <div class="flex justify-start flex-wrap p-2">
    <div
      class="item p-4 rounded-md my-1 shadow-md w-1/2"
      v-for="item in items"
      :key="item.id"
    >
      <div class="flex justify-start w-full">
        <span class="text-green-800 text-lg uppercase font-semibold"
          ><i class="fas fa-file-prescription text-orange-500 mr-2 text-lg"></i
          >{{ item.label }}</span
        >
      </div>

      <div class="my-2 text-sm text-left">
        <span class="font-semibold mr-1">Purpose:</span> {{ item.description }}
      </div>
      <div
        v-if="item.info"
        class="my-2 text-sm text-left border rounded-md bg-yellow-300 p-2"
      >
        <span class="text-red-600 font-semibold">Info: </span>
        {{ item.info }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Medicine",
  props: {
    items: {
      type: Object,
      required: true,
    },
  },
};
</script>
