<template>
  <div class="wrap" :style="{height: height + '%', width: width + '%'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: [Number],
      default: 100
    },
    height: {
      type: [String, Number],
      default: 100
    }
  },
  data() {
    return {
    };
  },
  computed: {
  },
  watch: {
    
  },
  mounted() {
  },
  beforeDestroy() {

  },
  methods: {
  }
};
</script>
<style lang="less" scoped>
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
