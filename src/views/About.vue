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
    <!-- <pop v-model="show" :bottom="true" height="40%">sdds11111111111</pop> -->
    <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->
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
        "1001",
        "1100",
        "100",
        "230",
        "123",
        "203",
        "12",
        "111",
        "111s",
        "121",
      ],
      listData: [],
    };
  },
  created() {
    console.log(this.data);
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