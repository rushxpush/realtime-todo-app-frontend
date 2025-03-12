'use client';

import { useState } from "react";
import { Button } from "../../components/ui/button";
import { InputWithLabel } from "../../components/ui/InputWithLabel";
import { TextareWithLabel } from "../../components/ui/TextareaWithLabel";

export function CreateTodo() {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const createTodoHandler = () => {
  }

  return (
    <div className="p-5">
      <h1>Create Todo</h1>
      <InputWithLabel id="task" type="text" label="Task" value={task} changeHandler={setTask}  />
      <TextareWithLabel id="description" label="Description" value={description} changeHandler={setDescription} />
      <Button onClick={createTodoHandler}>Create Task</Button>
    </div>
  );
}