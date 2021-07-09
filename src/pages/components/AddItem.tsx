import React, { Fragment, useState } from "react";

import { storage } from "../../helpers/localStorage";

import { TextInput } from "../../components/ui-kit/textInput";
import { Label } from "../../components/ui-kit/label";
import { Button } from "../../components/ui-kit/button";

import { InfoBlock, InfoBlockType } from "../../components/share/infoBlock";

const AddItem: React.FC = () => {
  const [task, setTask] = useState("");
  const [showMessage, setShowMessage] = useState<InfoBlockType | null>(null);

  const addItemHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const storedTask = storage.get("Tasks");
    if (storedTask === null) {
      storage.set("Tasks", JSON.stringify([task]));
    } else {
      const tasks = Array.from(JSON.parse(storedTask));
      tasks.push(task);
      storage.set("Tasks", JSON.stringify(tasks));
    }
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

export { AddItem };
