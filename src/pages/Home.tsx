import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getTasksApi } from "../services/task";

import taskActions from "../redux/task/actions";

import { TaskList } from "./components/taskList";
import { AddTaskItem } from "./components/addTaskItem";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getTasks = async () => {
      const data = await getTasksApi();
      if (data.length) {
        dispatch(taskActions.fillTasks(data));
      }
    };
    getTasks();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container">
      <AddTaskItem />

      <h3>Todo</h3>
      <TaskList type="Todo" />

      <h3>Completed</h3>
      <TaskList type="Completed" />
    </div>
  );
}

export default App;
