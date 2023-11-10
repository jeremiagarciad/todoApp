import styled from "styled-components";

const TasksItem = ({
  name,
  id,
  done,
  toggleDone,
  handleDelete,
}: {
  name: string;
  id: string;
  done: boolean;
  toggleDone: (id: string, done: boolean) => void;
  handleDelete: (id: string | any) => any;
}) => {
  return (
    <TaskItemContainer>
      <InputContainer>
        <input
          type="checkbox"
          checked={done}
          onChange={() => toggleDone(id, !done)}
        />
        {name}
        <button type="button" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </InputContainer>
    </TaskItemContainer>
  );
};

export default TasksItem;

const TaskItemContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  padding: 4px;
  border-radius: 4px;

  box-shadow: 0px 4px 19px -3px rgba(0, 0, 0, 0.73);
  -webkit-box-shadow: 0px 4px 19px -3px rgba(0, 0, 0, 0.73);
  -moz-box-shadow: 0px 4px 19px -3px rgba(0, 0, 0, 0.73);
`;
