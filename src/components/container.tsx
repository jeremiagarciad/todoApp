import React from "react";
import { ContainerTemplate } from "@interfaces/container_interface";
import styled from "styled-components";

const Container: React.FC<ContainerTemplate> = ({ title, children }) => {
  return (
    <MainContainer>
      {title && <h2 className="title_text">{title}</h2>}
      <div>{children}</div>
    </MainContainer>
  );
};

export default Container;

const MainContainer = styled.div`
  height: 100%;
  max-width: 100%;
  text-align: center;
  margin-top: 24px;
`;
