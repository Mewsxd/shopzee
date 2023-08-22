import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
// import Announcement from "../components/Announcement/Announcement";
import Products from "../components/Product/Products";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Footer from "../components/Footer/Footer";
import Announcement from "../components/Announcement/Announcement";
import NavBar from "../components/NavBar";
const FilterSpan = styled.span`
  margin-right: 10px;
`;
const Container = styled.div``;
const FilterContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 380px) {
    /* border: 3px solid black; */
  }
`;
const Filter = styled.div`
  @media screen and (max-width: 380px) {
    display: flex;
    flex-direction: column;
  }
`;
const Title = styled.h1`
  margin: 20px;
`;
const Select = styled.select`
  font-size: 15px;
  padding: 10px;
  margin: 10px;
  @media screen and (max-width: 380px) {
    margin: 5px 0px;
  }
`;
const Option = styled.option``;
const ProductList = () => {
  const [selectState, setSelectState] = useState("def");
  const [selectSize, setSelectSize] = useState("def");
  return (
    <Container>
      <Announcement />
      <NavBar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterSpan>Select Type:</FilterSpan>
          <Select
            id="mySelect"
            value={selectState}
            onChange={(e) => setSelectState(e.target.value)}
          >
            <Option value="def" selected>
              Color
            </Option>
            <Option value="red">Red</Option>
            <Option value="black">Black</Option>
            <Option value="blue">Blue</Option>
            <Option value="yellow">Yellow</Option>
          </Select>
          <Select
            value={selectSize}
            onChange={(e) => setSelectSize(e.target.value)}
          >
            <Option value="def" selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterSpan>Sort Product:</FilterSpan>
          <Select>
            <Option selected>Newest</Option>
            <Option>Highest to lowest</Option>
            <Option>Lowest to highest</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products type="FILTER" color={selectState} size={selectSize} />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
