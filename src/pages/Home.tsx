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
      <TaskList />

      <h3>Completed</h3>
      <ul id="completed-tasks">
        <li>
          <input type="checkbox" checked />
          <label>See the Doctor</label>
          <input type="text" />
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
