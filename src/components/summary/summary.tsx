import styled from "styled-components";

const Summary = ({
  itemName,
  itemValue,
}: {
  itemName: string;
  itemValue: number;
}) => {
  return (
    <SummaryItem>
      <Container>
        <h5>{itemName}</h5>
        <span>{itemValue}</span>
      </Container>
    </SummaryItem>
  );
};

export default Summary;

const SummaryItem = styled.article`
  width: 140px;
  padding: 8px;
  background-color: #f9b572;
  margin-right: 8px;
  border-radius: 6px;

  h5 {
    color: white;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
