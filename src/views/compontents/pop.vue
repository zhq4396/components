<template>
  <div class="overly" v-if="value" @click="onClose">
    <div
      class="content"
      :style="height ? { height: height} : ''"
      :class="bottom ? 'bottom_style' : ''"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean,
    bottom: Boolean,
    height: String,
  },
  methods: {
    onClose() {
      this.$emit("input", false);
    },
  },
};
</script>
<style scoped>
.overly {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}
.content {
  z-index: 2;
  background-color: #fff;
}
.bottom_style {
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>