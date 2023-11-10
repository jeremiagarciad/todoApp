import { useState } from "react";

import InputContainer from "./components/input/input";
import Container from "./components/container";
import Tasks_SRP from "./components/tasks/tasks-srp";
import Summary_SRP from "./components/summary/summary-srp";

export interface Tasks {
  name: string;
  id: string | any;
  done: boolean;
}

const AppTask = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState<Tasks[]>([]);
  const [deletedTasks, setDeletedTasks] = useState<Tasks[]>([]);

  const imputTrim = inputValue.trim();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // ADD: TASK
  const AddTodo = () => {
    if (imputTrim === "") return;

    const newTodo: Tasks = {
      name: inputValue,
      done: false,
      id: task.length + 1,
    };

    setTask([...task, newTodo]);
    setInputValue("");
  };

  // DELETE: TASK
  const DeleteTask = (id: number) => {
    const deletedTask = task.find((t) => t.id === id);

    if (deletedTask) {
      setTask((task) => task.filter((t) => t.id !== id));
      setDeletedTasks([...deletedTasks, deletedTask]);
    }

    console.log(deletedTask);
  };

  // UPDATE: TASK
  const toggleTask = (id: number, done: boolean) => {
    setTask((task) =>
      task.map((t) => {
        if (t.id === id) {
          t.done = done;
        }
        return t;
      })
    );
  };

  return (
    <div>
      <Container className="input-container" title="AppTask">
        <InputContainer
          value={inputValue}
          onChange={handleInputChange}
          AddTodo={AddTodo}
        />
      </Container>

      <Container title="Your tasks..">
        <Summary_SRP task={task} />
      </Container>

      <Container title="Tasks...">
        <Tasks_SRP
          tasks={task}
          handleDelete={DeleteTask}
          toggleDone={toggleTask}
          deletedTask={deletedTasks}
        />
      </Container>
    </div>
  );
};

export default AppTask;
