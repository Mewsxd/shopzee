import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: teal;
  height: 1.5rem;
  min-width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Message = styled.p`
  color: white;
  font-size: 0.8rem;
  font-weight: 700;
  @media screen and (max-width: 380px) {
    font-weight: 500;
  }
`;
const Extra = () => {
  return (
    <Container>
      <Message>Huge deal! 500$ Off of orders above 2000$</Message>
    </Container>
  );
};

export default Extra;
