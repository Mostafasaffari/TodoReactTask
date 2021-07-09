import { storage } from "../helpers/localStorage";

const addTaskApi = (task: string): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    try {
      const storedTask = storage.get("Tasks");
      if (storedTask === null) {
        storage.set("Tasks", JSON.stringify([task]));
      } else {
        const tasks = Array.from(JSON.parse(storedTask));
        tasks.push(task);
        storage.set("Tasks", JSON.stringify(tasks));
      }
      setTimeout(() => {
        const taskList = Array.from(
          JSON.parse(storage.get("Tasks")!)
        ) as string[];
        resolve(taskList);
      }, 1000);
    } catch {
      reject();
    }
  });
};

const getTasksApi = (): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        const storedTask = storage.get("Tasks");
        if (storedTask !== null) {
          const taskList = Array.from(JSON.parse(storedTask)) as string[];
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
