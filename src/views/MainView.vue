<template>
  <div class="container">
    <div class="header">
      <el-button icon="el-icon-search" circle @click="handleSearch"></el-button>
      <el-input class="header-search" v-model="searchInput" placeholder="Quick Find"></el-input>
      <el-button icon="el-icon-plus" circle @click="addTask"></el-button>
    </div>
    <div class="main-list">
      <ComponentWrap
        :width="40"
      >
        <ProjectView ref="project-view"></ProjectView>
      </ComponentWrap>
      <div class="line"></div>
      <ComponentWrap
        :width="60"
      >
        <TaskView ref="task-view"></TaskView>
      </ComponentWrap>
    </div>
  </div>
</template>

<script>
import ComponentWrap from '../components/TechInterview/ComponentWrap.vue';
import TaskView from './InTasks/TaskView.vue';
import ProjectView from './InProjects/ProjectView.vue';
export default {
  name: 'MainView',
  components: {
    ComponentWrap,
    TaskView,
    ProjectView
  },
  props: {

  },
  data() {
    return {
      searchInput: ''
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
    handleSearch() {
      const params = {
        name: this.searchInput
      };
      this.$refs['task-view'].getList(this.searchInput ? params : '');
    },
    addTask() {
      this.$refs['task-view'].toAdd();
    }
  }
};
</script>
<style lang="less" scoped>
  .container {
    width: 100%;
    height: 100%;
    .header {
      height: 80px;
      padding: 0 10px;
      background-color: #ffdb4c;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .header-search {
        width: 200px;
      }
    }
    .main-list {
      width: 100%;
      height: calc(100% - 80px);
      display: flex;
      .line {
        width: 0;
        height: 100%;
        border-left: 1px solid black;
      }
    }
  }
</style>
