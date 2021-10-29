<template>
  <div @click="handleClick" class="check">
    <div class="checkbox" :class="isCheked ? 'active' : ''">
      {{ label }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
    name: {
      type: [Number, String],
    },
  },
  data() {
    return {
      isCheked: this.$parent.value.indexOf(this.name) > -1 ? true : false,
    };
  },
  methods: {
    handleClick() {
      this.isCheked = !this.isCheked;
      if (this.isCheked) {
        this.$parent.$emit("pushItem", this.name);
      } else {
        this.$parent.$emit("removeItem", this.name);
      }
    },
  },
};
</script>
<style scoped>
.check {
  margin: 10px 10px 0;
}
.checkbox {
  padding: 10px 10px;
  width: 60px;
  border: 1px solid #eee;
  box-sizing: border-box;
  text-align: center;
  color: #333;
}
.active {
  background-color: rgb(89, 137, 226);
  color: #fff;
  border: 1px solid rgb(89, 137, 226);
}
</style>