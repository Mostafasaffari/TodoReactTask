export const FILL_TASKS = "FILL_TASKS";

export interface ITaskState {
  tasks: string[];
}

interface IFillTasks {
  type: typeof FILL_TASKS;
  tasks: ITaskState["tasks"];
}

export interface ITaskActions {
  fillTasks: (tasks: ITaskState["tasks"]) => IFillTasks;
}

export type TaskActionTypes = IFillTasks;
