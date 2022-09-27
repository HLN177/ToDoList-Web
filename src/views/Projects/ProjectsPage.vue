<template>
  <div class="about">
    {{count}}
  project
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'ProjectsPage',
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
// .fuck {
//   width: 100%;
//   height: 100%;
// }
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
