import React, { useState } from "react";
import { useSelector } from "react-redux";

import { AppState } from "../../redux/store";

import { TaskItem } from "./taskItem";

interface IProps {
  type: "Completed" | "Todo";
}
const TaskList: React.FC<IProps> = ({ type }) => {
  const { tasks } = useSelector((state: AppState) => state.Task);

  return (
    <ul id={type === "Todo" ? "incomplete-tasks" : "completed-tasks"}>
      {tasks.map((task) => {
        if (!task.isDone && type === "Todo") {
          return (
            <li key={task.id}>
              <TaskItem id={task.id} title={task.title} />
            </li>
          );
        }
        if (task.isDone && type === "Completed") {
          return (
            <li key={task.id}>
              <TaskItem id={task.id} title={task.title} isDone={task.isDone} />
            </li>
          );
        }
      })}
    </ul>
  );
};

export { TaskList };
