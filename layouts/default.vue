<template>
  <MenuButton class="z-50" @isSidebarShown="sidebarShown" />
  <aside
    id="default-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0"
    :class="isSidebarShown ? 'translate-x-0' : '-translate-x-full'"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul class="space-y-2 font-medium mt-9 sm:mt-0">
        <MenuItem v-for="item in sidebarItems" :key="item.id" :item="item" />
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  components: {
    MenuItem: () => import("~/components/MenuItem.vue"),
    MenuButton: () => import("~/components/MenuButton"),
  },

  data() {
    return {
      sidebarItems: [],
      isSidebarShown: false,
    };
  },

  created() {
    this.getSidebarItems();
  },

  methods: {
    async getSidebarItems() {
      await this.$api
        .get("/v3/63120735-7fbe-428a-9226-c10ca1ab43b6")
        .then((response) => {
          //   console.log(response);
          this.sidebarItems = response.data;
        });
    },
    sidebarShown(value) {
      this.isSidebarShown = value;
    },
  },
};
</script>
