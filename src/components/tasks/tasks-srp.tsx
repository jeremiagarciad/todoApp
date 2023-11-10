import { Tasks } from "../../App";
import TasksItem from "./task-item";

// Renderiza las tareas, tasksItems

const Tasks_SRP = ({
  tasks,
  handleDelete,
  toggleDone,
}: {
  tasks: Tasks[];
  handleDelete: (id: string | any) => void;
  toggleDone: (id: string, done: boolean) => void;
}) => {
  return (
    <div>
      {tasks.length ? (
        tasks.map((t) => (
          <TasksItem
            key={t.id}
            name={t.name}
            done={t.done}
            id={t.id}
            toggleDone={toggleDone}
            handleDelete={handleDelete}
          />
        ))
      ) : (
        <div> No hay Tareas</div>
      )}
    </div>
  );
};

export default Tasks_SRP;
