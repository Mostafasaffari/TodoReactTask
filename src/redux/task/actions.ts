import { FILL_TASKS, ITaskActions } from "./types";

const actions: ITaskActions = {
  fillTasks: (tasks) => ({
    type: FILL_TASKS,
    tasks,
  }),
};

export default actions;
