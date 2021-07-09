import { FILL_TASKS, ITaskState, TaskActionTypes } from "./types";

const initState: ITaskState = {
  tasks: [],
};

const taskReducer = (state = initState, action: TaskActionTypes) => {
  switch (action.type) {
    case FILL_TASKS: {
      return {
        ...state,
        tasks: action.tasks,
      };
    }
    default:
      return state;
  }
};

export default taskReducer;
