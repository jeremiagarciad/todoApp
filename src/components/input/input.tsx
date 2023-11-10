import styled from "styled-components";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  AddTodo: () => void;
}

const InputContainer: React.FC<InputProps> = ({ value, onChange, AddTodo }) => {
  return (
    <MainIputContainer>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Add Tasks..."
      />
      <button type="button" onClick={AddTodo}>
        AddTask
      </button>
    </MainIputContainer>
  );
};

export default InputContainer;

const MainIputContainer = styled.div`
  display: flex;
  max-width: 100%;
  width: 450px;
  margin: 20px auto;

  & input {
    max-width: 100%;
    width: 100%;
    margin-right: 8px;
    height: 32px;
    padding: 6px;
    border-radius: 50px;
    border-color: blue;
    outline: none;
  }

  & button {
    border-radius: 8px;
    background-color: blue;
    color: white;
    border: none;
    padding: 8px;
  }
`;
