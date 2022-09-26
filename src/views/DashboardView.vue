<template>
  <el-container class="container">
    <el-aside width="200px">
      <NavBar />
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import NavBar from '../components/NavBar/NavBar.vue';

export default {
  components: {
    NavBar
  },
  props: {

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
  methods: {
  }
};
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
