<template>
  <div class="form-header">
    <div class="text-wrap">
      <el-button icon="el-icon-back" circle @click="back"></el-button>
      <span class="text">{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
    };
  },
  methods: {
    back() {
      this.$emit('back');
    }
  }
};
</script>
<style lang="less" scoped>
.form-header {
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  .text-wrap {
    width: 100%;
    display: flex;
    align-items: center;
    .text {
      margin-left: 10px;
      font-size: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
