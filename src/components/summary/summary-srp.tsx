import Summary from "./summary";
import styled from "styled-components";
import { Tasks } from "./../../App";

const Summary_SRP = ({ task }: { task: Tasks[] }) => {
  const total = task.length;
  const pending = task.filter((t) => t.done === false).length;
  const done = task.filter((t) => t.done === true).length;
  // TODO: total eliminadas.

  return (
    <SummaryContainer>
      <Summary itemName={"Total tasks"} itemValue={total} />
      <Summary itemName={"Pending tasks"} itemValue={pending} />
      <Summary itemName={"Done"} itemValue={done} />
    </SummaryContainer>
  );
};

export default Summary_SRP;

const SummaryContainer = styled.article`
  max-width: 100%;
  width: 450px;
  margin: 16px auto;
  display: flex;
  justify-content: space-between;
`;
