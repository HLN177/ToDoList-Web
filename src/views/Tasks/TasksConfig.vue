<template>
  <div class="config-container">
    <FormHeader :title="formTitle" @back="backToList"></FormHeader>
    <el-form
      ref="form"
      label-width="180px"
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
          v-if="!this.taskId"
          type="primary"
          size="medium"
          @click="submitForm"
        >
          Add
        </el-button>
        <el-button
          v-else
          type="primary"
          size="medium"
          @click="submitForm"
        >
          Save
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

  </div>
</template>

<script>
import apiService from '../../api/apiService';
import FormHeader from '../../components/FormHeader.vue';
export default {
  name: 'TasksConfig',
  components: {
    FormHeader
  },
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
      taskId: '',
      formTitle: 'Add',
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
      }
    };
  },
  computed: {
  },
  watch: {
    
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const {query: {taskId = ''}} = this.$route;
      if (taskId) {
        this.taskId = taskId;
        this.getTask(this.taskId);
      }
    },
    async getTask(id) {
      const taskInfo = await apiService.getTask(id);
      const {TaskName, StartDate, DueDate} = taskInfo;
      delete taskInfo._id;
      this.originalTaskInfo = taskInfo;
      this.form.taskName = TaskName;
      this.form.timeRange = [StartDate, DueDate];
      this.formTitle = TaskName;
    },
    backToList() {
      this.$router.push({name: 'dashboard'});
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
        ...this.originalTaskInfo
      };
      data.TaskName = this.form.taskName;
      data.StartDate = startDate;
      data.DueDate = dueDate;
      await apiService.updateTask(this.taskId, data);
      this.$message({
        message: 'Success',
        type: 'success'
      });
      this.backToList();
    }
  }
};
</script>
<style lang="less" scoped>
.config-container {
  width: 100%;
  height: 100%;
}
</style>
