import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer/Footer";
import { popularProducts } from "../data";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link, useNavigate } from "react-router-dom";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  @media screen and (max-width: 380px) {
  }
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  @media screen and (max-width: 380px) {
    justify-content: space-between;
    padding: 0;
    margin: 20px 0px;
  }
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  @media screen and (max-width: 380px) {
  }
`;

const TopTexts = styled.div`
  @media screen and (max-width: 380px) {
    display: none;
  }
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 380px) {
    flex-direction: column;
  }
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  @media screen and (max-width: 380px) {
    width: 50%;
    height: 50%;
    object-fit: cover;
  }
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: black;
    background: transparent;
  }
  &:visited {
    color: black;
  }
`;
const Cart = () => {
  const navigate = useNavigate();
  const ctxCart = useContext(CartContext);
  return (
    <Container>
      <NavBar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>
            <NavLink to="/products">CONTINUE SHOPPING</NavLink>
          </TopButton>
          <TopTexts>
            <TopText>
              Shopping Bag(
              {Object.values(ctxCart.cartState).reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
              )}
              )
            </TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {popularProducts.map((items) => {
              if (ctxCart.cartState[items.id] > 0) {
                return (
                  <Product>
                    <ProductDetail>
                      <Image src={items.img} />
                      <Details>
                        <ProductName>
                          <b>Product:</b> {items.name}
                        </ProductName>
                        <ProductId>
                          <b>ID:</b> {items.id}
                        </ProductId>
                        <ProductColor color={items.color} />
                        <ProductSize>
                          <b>Size:</b> 37.5
                        </ProductSize>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        <Add onClick={() => ctxCart.addItemsToCart(items.id)} />
                        <ProductAmount>
                          {ctxCart.cartState[items.id]}
                        </ProductAmount>
                        <Remove
                          onClick={() => ctxCart.removeItemsFromCart(items.id)}
                          style={{ cursor: "pointer" }}
                        />
                      </ProductAmountContainer>
                      <ProductPrice>${items.price}</ProductPrice>
                    </PriceDetail>
                    <Hr />
                  </Product>
                );
              }
            })}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {ctxCart.totalAmount}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {ctxCart.totalAmount}</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
