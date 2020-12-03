<template>
  <div class="w-full p-2">
    <div
      class="item p-4 rounded-md my-1 shadow-md"
      v-for="item in items"
      :key="item.id"
    >
      <div class="flex justify-start w-full">
        <span
          class="bg-orange-700 text-white py-1 px-3 text-xs uppercase max-w-sm rounded-md rounded-r-none"
          >{{ item.label }}</span
        >
        <span
          class="bg-blue-800 text-white py-1 px-3 uppercase text-xs w-8/12 text-left"
        >
          {{ item.from }}
          <i class="text-yellow-400 fa fa-arrow-circle-right mx-1"></i>
          {{ item.to }}
        </span>
        <div
          class="text-right text-xs font-sans font-semibold w-3/12 bg-blue-700 text-white rounded-md rounded-l-none capitalize pt-1 px-1"
        >
          <span
            class="mr-1 bg-white px-1 text-blue-900 rounded"
            v-if="item.altitude !== ''"
            >{{ item.altitude }}</span
          >
          <span class="mr-1 bg-white px-1 text-blue-900 rounded">{{
            item.distance
          }}</span>
          <span class="mr-1 bg-white px-1 text-blue-900 rounded">{{
            item.transport
          }}</span>
        </div>
      </div>

      <div class="my-2 text-sm text-left">
        {{ item.description }}
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
