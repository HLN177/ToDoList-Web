<template>
  <div class="task-view">
    <div class="header">
      Reading List
    </div>
    <div class="list">
      <div
        class="list-item"
        v-for="item in taskList"
        :key="item._id"
      >
        <div class="task-icon">
          <i class="el-icon-delete" @click="handleDelete(item._id)"></i>
        </div>
        <div class="task-content">
          <div class="task-name">
            <el-button type="text" @click="toEdit(item)">{{item.TaskName}}</el-button>
          </div>
          <div class="task-due-date">
            {{ item.DueDate }}
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <el-button @click="toAdd">Add Task</el-button>
      <el-drawer
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
      </el-drawer>
    </div>
  </div>
</template>

<script>
import apiService from '../../api/apiService';
export default {
  data() {
    const checkTimeRange = (rule, value, callback) => {
      if (!Array.isArray(value) || !value.length) {
        return callback(new Error('Please select time.'));
      }
      const [startTime, dueTime] = value;
      if (!startTime) {
        return callback(new Error('Please select start time.'));
      }
      if (!dueTime) {
        return callback(new Error('Please select due time.'));
      }
      callback();
    };

    return {
      taskList: [],
      drawer: false,
      title: 'Add',
      form: {
        taskName: '',
        originalTaskInfo: '',
        timeRange: []
      },
      rules: {
        taskName: [
          { required: true, message: 'Please input task name.', trigger: 'blur' }
        ],
        timeRange: [
          { required: true, validator: checkTimeRange, trigger: 'blur' }
        ]
      },
      taskId: '',
      currentTask: ''
    };
  },
  computed: {
  },
  watch: {
    
  },
  mounted() {
    this.getList();
  },
  beforeDestroy() {

  },
  methods: {
    async getList(params) {
      const tasks = await apiService.getTaskList(params);
      this.taskList = tasks;
    },
    toAdd() {
      this.taskId = '';
      this.title = 'Add';
      this.currentTask = '';
      this.form =  {
        taskName: '',
        timeRange: []
      },
      this.drawer = true;
    },
    toEdit(task) {
      const {_id, TaskName, StartDate, DueDate} = task;
      this.currentTask = task;
      this.taskId = _id;
      this.title = TaskName;
      this.form = {
        taskName: TaskName,
        timeRange: [StartDate, DueDate]
      };
      this.drawer = true;
    },
    submitForm() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          if (this.taskId) {
            this.handleEdit()
          } else {
            this.handleAdd();
          }
        }
      });
    },
    async handleAdd() {
      const [startDate, dueDate] = this.form.timeRange;
      const data = {
        TaskName: this.form.taskName,
        StartDate: startDate,
        DueDate: dueDate
      };
      await apiService.createTask(data);
      this.$message({
        message: 'Success',
        type: 'success'
      });
      this.backToList();
    },
    async handleEdit() {
      const [startDate, dueDate] = this.form.timeRange;
      const data = {
        ...this.currentTask
      };
      data.TaskName = this.form.taskName;
      data.StartDate = startDate;
      data.DueDate = dueDate;
      delete data._id;
      await apiService.updateTask(this.taskId, data);
      this.$message({
        message: 'Success',
        type: 'success'
      });
      this.backToList();
    },
    async handleDelete(id) {
      await apiService.deleteTask(id);
      this.$message({
        message: 'Success',
        type: 'success'
      });
      this.backToList();
    },
    backToList() {
      this.drawer = false;
      this.getList();
    }
  }
};
</script>
<style lang="less" scoped>
.task-view {
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  padding: 40px 40px;
  .header {
    height: 30px;
  }
  .list {
    height: calc(100% - 50px);
    overflow-y: scroll;
    .list-item {
      height: 80px;
      display: flex;
      border-bottom: 1px solid black;
      justify-content: center;
      padding: 5px 0;
      .task-icon {
        height: 100%;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
      }
      .task-content {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;

        .task-name {

        }
        .task-due-date {

        }
      }
    }
  }
  .bottom{
    height: 20px;
  }
}
</style>