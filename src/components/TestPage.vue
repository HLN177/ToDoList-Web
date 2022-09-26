<template>
  <div class="fuck">
    {{count}}
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  components: {
  },
  props: {

  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      count: state => state.count
    })
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
</style>
