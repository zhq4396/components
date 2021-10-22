<template>
  <div>
    <van-field
      v-bind="$attrs"
      v-on="$listeners"
      @click="showPicker"
      v-model="type"
      readonly
    >
      <template #right-icon>
        <van-icon name="arrow" color="#969696" />
      </template>
    </van-field>
    <van-popup position="bottom" v-model="picShow">
      <van-picker
        show-toolbar
        title="产业类别"
        :columns="clo"
        @cancel="closePicker"
        @confirm="confirmPicker"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    clo:Array
  },
  data() {
    return {
      picShow: false,
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
  computed: {
    type: {
      get() {
        const i = this.columns.filter((item) => {
          return item.label == this.value;
        });
        const type = i.length > 0 ? i[0].text : "";
        return type;
      },
    },
  },
  methods: {
    showPicker() {
      this.picShow = true;
    },
    closePicker() {
      this.picShow = false;
    },
    confirmPicker(value) {
      this.picShow = false;
      this.$emit("input", value.label);
    },
  },
};
</script>

<style lang="less" scoped>
.van-field {
  position: relative;
  padding: 13px 26px;
}
.van-field::after {
  position: absolute;
  box-sizing: border-box;
  display: block;
  content: "";
  pointer-events: none;
  right: 0.426667rem;
  bottom: 0;
  left: 0.426667rem;
  border-bottom: 0.026667rem solid #ebedf0;
  transform: scaleY(0.5);
}
</style>