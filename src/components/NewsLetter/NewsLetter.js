import { SendOutlined } from "@material-ui/icons";
import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  height: 350px;
  width: 99%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fdf4f4;
  margin-bottom: 50px;
`;
const Title = styled.h1`
  margin: 15px;
  font-size: 65px;
  @media screen and (max-width: 380px) {
    font-size: 45px;
    margin: 10px 0px;
    /* text-align: center; */
  }
`;
const Desc = styled.p`
  font-size: 25px;
  margin: 15px;
  @media screen and (max-width: 380px) {
    font-size: 15px;
    margin: 10px 0px;
    /* text-align: center; */
  }
`;
const Email = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  @media screen and (max-width: 380px) {
    margin: 10px 0px;
  }
`;
const Input = styled.input`
  outline: none;
  border: 1px solid gray;
  padding-left: 15px;
  font-size: 20px;
  width: 600px;
  height: 40px;
  @media screen and (max-width: 380px) {
    width: 200px;
    height: 25px;
    font-size: 14px;
  }
`;
const Button = styled.button`
  border: none;
  background-color: teal;
  color: white;
  width: 90px;
  height: 45px;
  @media screen and (max-width: 380px) {
    width: 45px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const sendUI = {
  fontSize: "20px",
};
const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get frequent updates regarding your brands</Desc>
      <Email>
        <Input placeholder="Your name" />
        <Button>
          <SendOutlined style={sendUI} />
        </Button>
      </Email>
    </Container>
  );
};

export default NewsLetter;
