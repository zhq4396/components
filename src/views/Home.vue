<template>
  <div class="home">
    <PickerColumns
      v-model="data.company_type"
      label="产业类别"
      placeholder="请输入"
      :rules="[{ required: true }]"
      required
    />
    <div class="s">22</div>
  </div>
</template>

<script>
import PickerColumns from "./compontents/picker_columns.vue";

export default {
  name: "Home",
  components: {
    PickerColumns,
  },
  data() {
    return {
      data: {
        company_type: "",
      },
    };
  },
};
</script>
<style scoped>
.s {
  height: 100px;
  width: 300px;
  background-color: #eee;
}
</style>
