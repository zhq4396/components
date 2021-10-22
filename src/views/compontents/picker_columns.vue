<template>
  <VanPicker v-bind="$attrs" v-on="$listeners" :clo="columns" />
</template>

<script>
import VanPicker from "./picker_con.vue";

export default {
  name: "Home",
  components: {
    VanPicker,
  },
  data() {
    return {
      columns: [
        {
          text: "王五",
          label: "2",
        },
        {
          text: "是的",
          label: "3",
        },
      ],
    };
  },
};
</script>

<style>
</style>