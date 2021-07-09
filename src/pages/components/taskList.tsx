import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { AppState } from "../../redux/store";

import taskActions from "../../redux/task/actions";

import { CheckBox } from "../../components/ui-kit/checkBox";
import { Button } from "../../components/ui-kit/button/Button";
import { TextInput } from "../../components/ui-kit/textInput/TextInput";
import { editTaskApi } from "../../services/task";

const TaskList: React.FC = () => {
  const [editTaskId, setEditTaskId] = useState(-1);
  const [newTitle, setNewTitle] = useState("");

  const dispatch = useDispatch();

  const { tasks } = useSelector((state: AppState) => state.Task);

  const saveHandle = async () => {
    const data = await editTaskApi(editTaskId, newTitle);
    dispatch(taskActions.fillTasks(data));
    setEditTaskId(-1);
    setNewTitle("");
  };
  return (
    <ul id="incomplete-tasks">
      {tasks.map(
        (task) =>
          !task.isDone && (
            <li key={task.id}>
              <CheckBox />
              {editTaskId !== -1 && task.id === editTaskId ? (
                <>
                  <TextInput
                    value={newTitle || task.title}
                    onChange={(e) => setNewTitle(e.target.value)}
                  />
                  <Button className="save" onClick={saveHandle}>
                    Save
                  </Button>
                </>
              ) : (
                <>
                  <label>{task.title}</label>
                  <Button
                    className="edit"
                    onClick={() => setEditTaskId(task.id)}
                  >
                    Edit
                  </Button>
                  <Button className="delete">Delete</Button>
                </>
              )}
            </li>
          )
      )}
    </ul>
  );
};

export { TaskList };
