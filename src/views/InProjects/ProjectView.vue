<template>
  <div class="project-view">
    <div class="header">
      <span>Projects</span>
      <i class="el-icon-edit"></i>
    </div>
    <div class="list"></div>
    <div class="bottom">
      <el-button @click="toAdd">Add Task</el-button>
      <!-- <el-drawer
        :title="title"
        :visible.sync="drawer"
        size="30%"
      >
        <el-form
          ref="form"
          :model="form"
          :rules="rules"
        >
          <el-form-item label="Task Name" prop="taskName">
            <el-input v-model="form.taskName" style="width: 220px"></el-input>
          </el-form-item>
          <el-form-item label="Start Date" prop="timeRange">
            <el-date-picker
              v-model="form.timeRange"
              type="daterange"
              start-placeholder="Start Date"
              end-placeholder="Due Date"
              value-format="yyyy-MM-dd"
              :default-time="[]"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              size="medium"
              @click="submitForm"
            >
              {{ taskId ? 'Save' : 'Add'}}
            </el-button>
            <el-button
              type="primary"
              size="medium"
              @click="backToList"
              plain
            >
              Back
            </el-button>
          </el-form-item>
        </el-form>
      </el-drawer> -->
    </div>
  </div>
</template>

<script>
// import apiService from '../../api/apiService';

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
  },
  watch: {
    
  },
  mounted() {
  },
  beforeDestroy() {

  },
  methods: {
    toAdd() {
      console.log('addProject');
    }
  }
};
</script>
<style lang="less" scoped>
.project-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .header {
    height: 60px;
    display: flex;
    justify-content: space-between;
  }
  .list {
    height: calc(100% - 120px);
    overflow-y: scroll;
  }
  .bottom {
    height: 60px;
  }
}
</style>
