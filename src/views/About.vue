<template>
  <div>
    <checkbox-group v-model="listData">
      <checkbox
        v-for="(item, index) in data"
        :key="index"
        :name="index"
        :label="item"
      ></checkbox>
    </checkbox-group>
    <pop v-model="show" :bottom="true" height="40%">sdds11111111111</pop>
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
  </div>
</template>

<script>
import checkboxGroup from "./compontents/checkboxGroup";
import checkbox from "./compontents/checkbox";
import pop from "./compontents/pop";
export default {
  name: "",
  components: { checkboxGroup, checkbox, pop },
  data() {
    return {
      show: false,
      data: [
        "11",
        "11",
        "121212",
        "121212",
        "121212",
        "121212",
        "121212",
        "121212",
        "121212",
        "121212",
      ],
      listData: [],
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
  },
};
</script>
<style scoped>
</style>