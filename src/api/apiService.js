import service from "./axios";

const LIST_PARAMS = ['status', 'name', 'sortBy', 'isAsc'];

const URL = {
  TASK: '/api/task',
  TASK_BY_ID: '/api/task/<id>',
  PROJECT: '/api/project',
  PROJECT_BY_ID: '/api/project/<id>',
  ADD_TASKS_TO_PROJECT: '/api/project/addTasksToProject',
  PROJECT_BY_NAME: '/api/project/getTaskByProjectName?name=<name>',
};

const apiService = {
  createTask(data) {
    const url = URL.TASK;
    return service.post(url, data);
  },
  getTaskList(params = {}) {
    const paramsArr = Object.entries(params);
    let url = URL.TASK;
    if (paramsArr.length) {
      const strArr = []
      for(let [k, v] of paramsArr) {
        if (LIST_PARAMS.indexOf(k) !== -1) {
          strArr.push(`${k}=${v}`);
        }
      }
      if (strArr.length) {
        const paramStr = strArr.join('&');
        url = `${url}?${paramStr}`;
      }
    }
    return service.get(url);
  },
  getTask(id) {
    const url = URL.TASK_BY_ID.replace('<id>', id)
    return service.get(url);
  },
  updateTask(id, data) {
    const url = URL.TASK_BY_ID.replace('<id>', id)
    return service.put(url, data);
  },
  deleteTask(id) {
    const url = URL.TASK_BY_ID.replace('<id>', id)
    return service.delete(url);
  }
};

export default apiService;