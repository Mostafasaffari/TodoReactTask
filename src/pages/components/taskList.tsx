import React from "react";
import { useSelector } from "react-redux";

import { AppState } from "../../redux/store";

const TaskList: React.FC = () => {
  const { tasks } = useSelector((state: AppState) => state.Task);
  console.log(tasks);
  return (
    <ul id="incomplete-tasks">
      {tasks.map((task, index) => (
        <li key={index}>
          <input type="checkbox" />
          <label>{task}</label>
          <input type="text" />
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </li>
      ))}
    </ul>
  );
};

export { TaskList };
