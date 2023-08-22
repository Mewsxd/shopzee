import { styled } from "styled-components";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link, useNavigate } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: gray;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Container = styled.div`
  flex: 1;
  min-width: 280px;
  height: 350px;
  margin: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:hover ${Info} {
    transition: all 0.5s ease;
    opacity: 1;
  }
  @media screen and (max-width: 380px) {
    margin: 5px 5px;
  }
  /* border: 1px solid black; */
`;
const Circle = styled.div``;
const Image = styled.img`
  height: 70%;
  z-index: 2;
`;

const Icon = styled.div`
  cursor: pointer;
  background-color: white;
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  margin: 10px;
  &:hover {
    transform: scale(1.1);
  }
`;
const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: red;
    background: white;
  }
  &:visited {
    color: black;
  }
`;

function Product({ item }) {
  const navigate = useNavigate();

  function setCurProduct() {
    ctxCart.curProductHandler(item);
    // navigate("/productInfo");
    console.log(item);
  }
  const ctxCart = useContext(CartContext);
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Link to="/productInfo" onClick={setCurProduct}>
          {/* {console.log(item)} */}
          <Icon>
            <SearchOutlined />
          </Icon>
        </Link>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
        <Icon>
          <ShoppingCartOutlined
            onClick={() => ctxCart.addItemsToCart(item.id)}
          />
        </Icon>
      </Info>
    </Container>
  );
}

export default Product;
