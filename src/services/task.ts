import { ITask } from "../entities/task";
import { storage } from "../helpers/localStorage";

const addTaskApi = (task: string): Promise<ITask[]> => {
  return new Promise((resolve, reject) => {
    try {
      const storedTask = storage.get("Tasks");
      let newTask: ITask = {
        isDone: false,
        title: task,
        id: 1,
      };
      if (storedTask === null) {
        storage.set("Tasks", JSON.stringify([newTask]));
      } else {
        const tasks = Array.from(JSON.parse(storedTask)) as ITask[];
        newTask = {
          ...newTask,
          id: tasks[tasks.length - 1].id,
        };
        tasks.push(newTask);
        storage.set("Tasks", JSON.stringify(tasks));
      }
      setTimeout(() => {
        const taskList = Array.from(
          JSON.parse(storage.get("Tasks")!)
        ) as ITask[];
        resolve(taskList);
      }, 1000);
    } catch {
      reject();
    }
  });
};

const getTasksApi = (): Promise<ITask[]> => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        const storedTask = storage.get("Tasks");
        if (storedTask !== null) {
          const taskList = Array.from(JSON.parse(storedTask)) as ITask[];
          resolve(taskList);
        } else {
          resolve([]);
        }
      }, 1000);
    } catch {
      reject();
    }
  });
};

export { addTaskApi, getTasksApi };
