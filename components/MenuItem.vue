<template>
  <li
    class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
  >
    <NuxtImg format="webp" :src="item.icon" alt="icon" aria-hidden="true" />
    <p class="ms-3">{{ item.name }}</p>
  </li>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    item: {
      type: Object,
      require: true,
    },
  },
};
</script>
