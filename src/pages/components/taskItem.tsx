import React, { useState } from "react";
import { useDispatch } from "react-redux";

import taskActions from "../../redux/task/actions";

import { CheckBox } from "../../components/ui-kit/checkBox";
import { Button } from "../../components/ui-kit/button/Button";
import { TextInput } from "../../components/ui-kit/textInput/TextInput";
import { deleteTaskApi, doneTaskApi, editTaskApi } from "../../services/task";

interface IProps {
  id: number;
  title: string;
  isDone?: boolean;
}
const TaskItem: React.FC<IProps> = ({ id, title, isDone }) => {
  const [editTaskId, setEditTaskId] = useState(-1);
  const [newTitle, setNewTitle] = useState("");

  const dispatch = useDispatch();

  const saveHandle = async () => {
    const data = await editTaskApi(editTaskId, newTitle);
    dispatch(taskActions.fillTasks(data));
    setEditTaskId(-1);
    setNewTitle("");
  };
  const isDoneHandle = (id: number) => async () => {
    const data = await doneTaskApi(id);
    dispatch(taskActions.fillTasks(data));
  };
  const deleteTaskHandle = (id: number) => async () => {
    if (window.confirm("Are you sure?")) {
      const data = await deleteTaskApi(id);
      dispatch(taskActions.fillTasks(data));
    }
  };
  return (
    <>
      <CheckBox onChange={isDoneHandle(id)} checked={isDone} />
      {editTaskId !== -1 && id === editTaskId ? (
        <>
          <TextInput
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <Button className="save" onClick={saveHandle}>
            Save
          </Button>
        </>
      ) : (
        <>
          <label>{title}</label>
          <Button
            className="edit"
            onClick={() => {
              setEditTaskId(id);
              setNewTitle(title);
            }}
          >
            Edit
          </Button>
          <Button className="delete" onClick={deleteTaskHandle(id)}>
            Delete
          </Button>
        </>
      )}
    </>
  );
};

export { TaskItem };
