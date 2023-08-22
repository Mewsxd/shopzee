import React, { useContext } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer/Footer";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import { styled } from "styled-components";
import { Add, Remove } from "@material-ui/icons";
import { CartContext } from "../Context/CartContext";

const Wrapper = styled.div`
  display: flex;
  width: 99vw;
  margin-top: 20px;
`;

const Image = styled.img`
  height: 100%;
  $object-fit: cover;
  @media screen and (max-width: 380px) {
    height: 35%;
  }
`;
const Left = styled.div`
  padding: 15px;
  flex: 1;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 380px) {
    align-items: flex-start;
  }
`;
const Right = styled.div`
  flex: 1;
  padding: 15px;
  @media screen and (max-width: 380px) {
    padding: 0;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 50px;
  font-weight: 200;
  @media screen and (max-width: 380px) {
    font-size: 30px;
  }
`;
const Price = styled.h1`
  font-size: 45px;
  font-weight: 200;
  @media screen and (max-width: 380px) {
    font-size: 30px;
  }
`;

const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  margin: 20px 0px;
  justify-content: space-between;
  /* flex-direction: column; */
  @media screen and (max-width: 380px) {
    /* justify-content: center; */
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    /* margin: 0;
    padding: 0; */
    /* justify-content: center; */
  }
`;
const Filter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 380px) {
    margin: 10px 0px;
    justify-content: flex-start;
  }
`;
const FilterTitle = styled.p`
  margin-right: 10px;
`;
const FilterOption = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: 10px;
  @media screen and (max-width: 380px) {
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }
`;
const FilterSize = styled.select`
  padding: 10px;
`;
const AddContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  @media screen and (max-width: 380px) {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
const Button = styled.button`
  padding: 15px;
  font-weight: 800;
  border: 2px solid teal;
  background-color: white;
  &:hover {
    background-color: teal;
    color: white;
  }
  cursor: pointer;
  @media screen and (max-width: 380px) {
  }
`;
const AmountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FilterSizeOption = styled.option``;
const Amount = styled.div`
  border: 1px solid black;
  margin: 15px;
  font-size: 19px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid teal;
`;
const Desc = styled.p`
  margin: 30px 0px;
  width: 80%;
  @media screen and (max-width: 380px) {
    width: 75%;
  }
`;
const InnerContainer = styled.div``;
const ProductInfo = () => {
  const ctxCart = useContext(CartContext);
  return (
    <div>
      <NavBar />
      <Wrapper>
        <Left>
          <Image src={ctxCart.curProduct.img} />
        </Left>
        <Right>
          <InnerContainer>
            <Title>{ctxCart.curProduct.name}</Title>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Desc>

            <Price>{ctxCart.curProduct.price}$</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color:</FilterTitle>
                {/* {ctxCart.curProduct.} */}
                <FilterOption color={ctxCart.curProduct.color}></FilterOption>
                {/* <FilterOption color="blue"></FilterOption>
              <FilterOption color="purple"></FilterOption> */}
              </Filter>
              <Filter>
                <FilterTitle>Size:</FilterTitle>
                <FilterSize>
                  <FilterSizeOption disabled selected>
                    Size
                  </FilterSizeOption>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                {ctxCart.cartState[ctxCart.curProduct.id] > 0 && (
                  <Remove
                    onClick={() =>
                      ctxCart.removeItemsFromCart(ctxCart.curProduct.id)
                    }
                    style={{ cursor: "pointer" }}
                  />
                )}
                <Amount>{ctxCart.cartState[ctxCart.curProduct.id]}</Amount>
                <Add
                  onClick={() => ctxCart.addItemsToCart(ctxCart.curProduct.id)}
                  style={{ cursor: "pointer" }}
                />
              </AmountContainer>
              <Button
                // {ctxCart.curProduct.id>1 disabled}
                onClick={() => ctxCart.addItemsToCart(ctxCart.curProduct.id)}
                // {ctxCart.curProduct.id>1}
              >
                Add to cart
              </Button>
            </AddContainer>
          </InnerContainer>
        </Right>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default ProductInfo;
