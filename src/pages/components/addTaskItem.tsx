import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";

import { addTaskApi } from "../../services/task";

import taskActions from "../../redux/task/actions";

import { TextInput } from "../../components/ui-kit/textInput/TextInput";
import { Label } from "../../components/ui-kit/label/Label";
import { Button } from "../../components/ui-kit/button/Button";

import {
  InfoBlock,
  InfoBlockType,
} from "../../components/share/infoBlock/infoBlock";

const AddTaskItem: React.FC = () => {
  const [task, setTask] = useState("");
  const [showMessage, setShowMessage] = useState<InfoBlockType | null>(null);

  const dispatch = useDispatch();

  const addItemHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await addTaskApi(task);
    dispatch(taskActions.fillTasks(data));
    setShowMessage("success");
    setTask("");
    setTimeout(() => {
      setShowMessage(null);
    }, 3000);
  };
  return (
    <Fragment>
      {showMessage && (
        <InfoBlock type={showMessage} message="Adding Task done!" />
      )}
      <form onSubmit={addItemHandler}>
        <Label htmlFor="new-task">Add Item</Label>
        <TextInput
          id="new-task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button type="submit">Add</Button>
      </form>
    </Fragment>
  );
};

export { AddTaskItem };
