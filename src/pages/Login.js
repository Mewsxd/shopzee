import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { styled } from "styled-components";
import { auth } from "../components/Firebase/Firebase";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

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
  width: 25%;
  background-color: white;
  padding: 20px;
  @media screen and (max-width: 380px) {
    width: 70%;
  }
`;
const Input = styled.input`
  min-width: 40%;
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 13px;
  /* margin: 10px; */
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
const Link = styled.a`
  font-size: 14px;
  margin: 10px 0px;
  text-decoration: underline;
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 15px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-wrap: wrap;
`;
const Login = () => {
  const ctxCart = useContext(CartContext);
  const navigate = useNavigate();
  const [btnDisable, setBtnDisable] = useState();

  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });
  const loginSubmitHandler = (e) => {
    e.preventDefault();
    if (!loginState.email || !loginState.password) {
      return;
    }
    setBtnDisable(true);
    signInWithEmailAndPassword(auth, loginState.email, loginState.password)
      .then((res) => {
        setBtnDisable(false);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  // const loginSubmitHandler = () => {};
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="email"
            onChange={(e) => {
              setLoginState((prev) => ({ ...prev, email: e.target.value }));
            }}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => {
              setLoginState((prev) => ({ ...prev, password: e.target.value }));
            }}
          />
        </Form>
        <Button onClick={loginSubmitHandler} disabled={btnDisable}>
          LOGIN
        </Button>
        <Links>
          <Link>Forgot Password?</Link>
          <Link>Don't have an account?Sign up</Link>
        </Links>
      </Wrapper>
    </Container>
  );
};

export default Login;
