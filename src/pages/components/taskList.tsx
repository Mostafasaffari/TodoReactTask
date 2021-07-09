import React from "react";
import { useSelector } from "react-redux";

import { AppState } from "../../redux/store";

const TaskList: React.FC = () => {
  const { tasks } = useSelector((state: AppState) => state.Task);
  return (
    <ul id="incomplete-tasks">
      {tasks.map((task) => (
        <li key={task.id}>
          <input type="checkbox" />
          <label>{task.title}</label>
          <input type="text" />
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </li>
      ))}
    </ul>
  );
};

export { TaskList };
