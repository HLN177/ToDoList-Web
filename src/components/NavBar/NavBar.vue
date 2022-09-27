<template>
  <el-menu
    :default-active="defaultActive"
    :router="true"
    class="menu"
  >
    <el-menu-item
      v-for="item in menuItems"
      :index="item.index"
      :key="item.index"
      :route="item.route"
    >
      <span slot="title">{{ item.name }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import MenuConfig from './NavBarData';

const {defaultActive, menuItems} = MenuConfig;

export default {
  components: {
  },
  props: {

  },
  data() {
    return {
      defaultActive,
      menuItems
    };
  },
  methods: {
  }
};
</script>
<style lang="less" scoped>
.menu{
  height: 100%;
}
</style>
