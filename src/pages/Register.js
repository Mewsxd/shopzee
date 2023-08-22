import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { styled } from "styled-components";
import { auth } from "../components/Firebase/Firebase";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.7)
    ),
    url("https://img.freepik.com/free-vector/pattern-about-shopping_1061-495.jpg?w=740&t=st=1688372503~exp=1688373103~hmac=2bdf2bb677bcb05c151eda8df3b684f8b62236086b16243140942e835013b9fa");
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  background-color: white;
  padding: 20px;
  @media screen and (max-width: 380px) {
    width: 75%;
  }
`;
const Input = styled.input`
  min-width: 40%;
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 13px;
`;
const Agreement = styled.div`
  font-size: 19px;
  margin: 15px 0px;
  @media screen and (max-width: 380px) {
    font-size: 12px;
  }
`;
const Title = styled.h1`
  font-size: 35px;
  margin: 10px 0px;
  font-weight: 300;
`;
const Button = styled.button`
  width: 40%;
  padding: 10px;
  border: none;
  cursor: pointer;
  background-color: lightblue;
`;

const Form = styled.form`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`;
const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [submitDisabled, setSubmitDisabled] = useState();
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (
      (!values.firstname,
      !values.lastname,
      !values.username,
      !values.email,
      !values.password,
      !values.confirmpassword)
    ) {
      return;
    }
    setSubmitDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        setSubmitDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.username,
        });
        navigate("/");
      })
      .catch((err) => console.log("error:- ", err));
    console.log(values);
  };
  return (
    <Container>
      <Wrapper>
        <Title>Create an account</Title>
        <Form>
          <Input
            placeholder="firstname"
            onChange={(e) => {
              setValues((prev) => ({ ...prev, firstname: e.target.value }));
            }}
          />
          <Input
            placeholder="lastname"
            onChange={(e) => {
              setValues((prev) => ({ ...prev, lastname: e.target.value }));
            }}
          />
          <Input
            placeholder="email"
            onChange={(e) => {
              setValues((prev) => ({ ...prev, email: e.target.value }));
            }}
          />
          <Input
            placeholder="username"
            onChange={(e) => {
              setValues((prev) => ({ ...prev, username: e.target.value }));
            }}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => {
              setValues((prev) => ({ ...prev, password: e.target.value }));
            }}
          />
          <Input
            placeholder="confirm password"
            type="password"
            onChange={(e) => {
              setValues((prev) => ({
                ...prev,
                confirmpassword: e.target.value,
              }));
            }}
          />
        </Form>
        <Agreement>
          <input type="checkbox" style={{ marginRight: "10px" }} />I agree to
          the terms and conditions of the services.
        </Agreement>

        <Button
          type="submit"
          onClick={formSubmitHandler}
          disabled={submitDisabled}
        >
          CREATE
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Register;
