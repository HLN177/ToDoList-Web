<template>
  <div class="task-container">
    <div class="control-bar">
      <el-button
        type="primary"
        size="medium"
        @click="toAddPage"
      >
        Add
      </el-button>
      <!-- <el-button
        type="primary"
        size="medium"
        :disabled="disableDelete"
        @click="handleDelete"
      >
        Delete
      </el-button> -->
    </div>
    <el-table
      ref="task-table"
      :data="tableData"
      @selection-change="handleSelection"
    >
      <!-- <el-table-column
        type="selection"
        width="55">
      </el-table-column> -->
      <el-table-column
        label="Task Name"
        prop="TaskName"
      >
        <template slot-scope="scope">
          <el-button type="text" @click="toEditPage(scope.row._id)">{{scope.row.TaskName}}</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="Start Date"
        prop="StartDate"
      >
      </el-table-column>
      <el-table-column
        label="Due Date"
        prop="DueDate"
      >
      </el-table-column>
      <el-table-column
        label="Status"
        prop="Status"
      >
      </el-table-column>
      <el-table-column label="Operation">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleDelete(scope.row._id)">Delete</el-button>
          <!-- <el-button type="text" size="small">编辑</el-button> -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import apiService from '../../api/apiService';

export default {
  name: 'TasksPage',
  components: {
  },
  props: {

  },
  data() {
    return {
      tableData: [],
      selectedTask: []
    };
  },
  computed: {
    // disableDelete() {
    //   return !this.selectedTask.length;
    // }
  },
  watch: {
    
  },
  mounted() {
    this.getList();
  },
  methods: {
    async getList() {
      const result = await apiService.getTaskList();
      this.tableData = result;
    },
    handleSelection(selectedArr) {
      this.selectedTask = selectedArr.map(item => item._id);
    },
    toAddPage() {
      this.$router.push({name: 'tasksConfig'});
    },
    toEditPage(id) {
      this.$router.push({name: 'tasksConfig', query: {taskId: id}});
    },
    async handleDelete(id) {
      await apiService.deleteTask(id);
      this.$message({
        message: 'Delete Success',
        type: 'success'
      });
      this.getList();
    }
  }
};
</script>
<style lang="less" scoped>
.task-container {
  width: 100%;
  height: 100%;
}
</style>
