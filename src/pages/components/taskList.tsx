import React, { useState } from "react";
import { useSelector } from "react-redux";

import { AppState } from "../../redux/store";

import { TaskItem } from "./taskItem";

const TaskList: React.FC = () => {
  const { tasks } = useSelector((state: AppState) => state.Task);

  return (
    <ul id="incomplete-tasks">
      {tasks.map(
        (task) =>
          !task.isDone && (
            <li key={task.id}>
              <TaskItem id={task.id} title={task.title} />
            </li>
          )
      )}
    </ul>
  );
};

export { TaskList };
