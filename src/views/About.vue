<template>
  <div>
    <checkbox-group v-model="listData">
      <checkbox
        v-for="(item, index) in data"
        :key="index"
        :name="item.id"
        :label="item.name"
      ></checkbox>
    </checkbox-group>
  </div>
</template>

<script>
import checkboxGroup from "./compontents/checkboxGroup";
import checkbox from "./compontents/checkbox";
export default {
  name: "",
  components: { checkboxGroup, checkbox },
  data() {
    return {
      data: [
        { name: "22", id: 2 },
        { name: "15", id: 3 },
        { name: "11", id: 41 },
        { name: "11", id: 421 },
        { name: "11", id: 412 },
        { name: "11", id: 14 },
        { name: "11", id: 423 },
        { name: "11", id: 234 },
        { name: "11", id: 1234 },
        { name: "11", id: 42 },
      ],
      listData: [42,234],
    };
  },
};
</script>
<style scoped>
</style>