import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer/Footer";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import { styled } from "styled-components";
const Container = styled.div``;
const InnerContainer = styled.div``;
export const Wishlist = () => {
  return (
    <>
      <NavBar />
      <Container>
        <h1>Wishlist:-</h1>
        <InnerContainer></InnerContainer>
      </Container>
      <NewsLetter />
      <Footer />
    </>
  );
};
