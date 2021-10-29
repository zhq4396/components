<template>
  <div class="group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    removeItem(value) {
      const index = this.value.indexOf(value);
      this.value.splice(index, 1);
      this.$emit("input", this.value);
    },
    pushItem(value) {
      this.value.push(value);
      this.$emit("input", this.value);
    },
  },
  created() {},
  mounted() {
    this.$on("pushItem", this.pushItem);
    this.$on("removeItem", this.removeItem);
  },
};
</script>
<style scoped>
.group {
  display: flex;
  flex-wrap: wrap;
  padding: 0 10px;
}
</style>