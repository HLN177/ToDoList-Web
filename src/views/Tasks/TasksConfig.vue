<template>
  <div class="config-container">
    <el-form
      ref="form"
      label-width="180px"
      :model="form"
      :rules="rules"
    >
      <el-form-item label="Task Name" prop="name">
        <el-input v-model="form.name" style="width: 220px"></el-input>
      </el-form-item>
      <el-form-item label="Start Date" prop="startDate">
        <el-date-picker
          v-model="form.startDate"
          type="date"
          placeholder="Please Select Date"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="Due Date" prop="dueDate">
        <el-date-picker
          v-model="form.dueDate"
          type="date"
          placeholder="Please Select Date"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          size="medium"
          @click="submitForm"
        >
          add
        </el-button>
        <el-button
          type="primary"
          size="medium"
          @click="backToList"
        >
          goback
        </el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
import apiService from '../../api/apiService';

export default {
  name: 'TasksConfig',
  components: {
  },
  props: {

  },
  data() {
    return {
      taskId: '',
      form: {
        taskName: '',
        startDate: '',
        dueDate: ''
      },
      rules: {
        name: [
          { required: true, message: 'Please input task name.', trigger: 'blur' }
        ],
        startDate: [
          { type: 'date', required: true, message: 'Please select start date', trigger: 'change' }
        ],
        dueDate: [
          { type: 'date', required: true, message: 'Please select due date', trigger: 'change' }
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
      const {params: taskId = ''} = this.$route;
      if (taskId) {
        this.taskId = taskId;
      }
    },
    backToList() {
      this.$router.push({name: 'dashboard'});
    },
    submitForm() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          this.handleAdd();
        }
      });
    },
    async handleAdd() {
      const data = {
        TaskName: this.form.name,
        StartDate: this.form.startDate,
        DueDate: this.form.dueDate
      };
      await apiService.createTask(data);
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
