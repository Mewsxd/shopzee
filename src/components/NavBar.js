import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import "./NavBar.css";
import { Badge } from "@material-ui/core";
import { styled } from "styled-components";
// import { mobile } from "./Responsive";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { signOut } from "firebase/auth";
import { auth } from "./Firebase/Firebase";
const Container = styled.div`
  width: 100%;
  height: 60px;
  left: 0px;
  min-width: 375px;
  @media screen and (max-width: 380px) {
    width: 100vw;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 380px) {
    justify-content: center;
  }
`;
const MenuItem = styled.div`
  margin-left: 24px;
  @media screen and (max-width: 380px) {
    font-size: 0.7rem;
    margin: 0px 5px;
  }
`;
const Wrapper = styled.div`
  padding: 12px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 380px) {
    padding: 12px 5px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media screen and (max-width: 380px) {
    flex: 0.5;
  }
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  @media screen and (max-width: 380px) {
    font-weight: 500;
    flex: 0.5;
    font-size: 1.2rem;
    margin-right: 0.2rem;
    margin-left: 5px;
    text-decoration: underline;
  }
`;
const Right = styled.div`
  flex: 1;
  @media screen and (max-width: 380px) {
    flex: 1;
    padding: 2px 0px;
    margin-right: -5px;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  border: 1px solid grey;
  margin-left: 15px;
  @media screen and (max-width: 380px) {
    margin-left: 10px;
  }
`;

const InputContainer = styled.input`
  &:focus {
    outline: none;
  }
  height: 20px;
  border: none;
  padding-left: 5px;
  @media screen and (max-width: 420px) {
    width: 45px;
  }
`;

const Language = styled.p`
  @media screen and (max-width: 420px) {
    display: none;
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
const Title = styled.h2`
  color: Teal;
  font-style: italic;
  font-weight: 300;
`;
function NavBar(props) {
  const logoutHandler = () => {
    signOut(auth)
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const ctxCart = useContext(CartContext);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            {/* <input */}
            <InputContainer type="text" placeholder="Search"></InputContainer>
            <Search style={{ color: "grey" }} />
          </SearchContainer>
        </Left>
        <Center>
          {/* <Link to="/">Shopzee</Link> */}
          <NavLink to="/">
            <Title>Shopzee</Title>
          </NavLink>
        </Center>
        <Right>
          <Menu>
            <MenuItem>
              {ctxCart.username || <NavLink to="/register">REGISTER</NavLink>}

              {/* REGISTER */}
            </MenuItem>
            <MenuItem>
              {/* SIGN IN */}
              {(ctxCart.username && (
                <NavLink to="/" onClick={logoutHandler}>
                  LOGOUT
                </NavLink>
              )) || <NavLink to="/login">SIGN IN</NavLink>}
            </MenuItem>
            <MenuItem>
              <NavLink to="/cart">
                <Badge
                  badgeContent={Object.values(ctxCart.cartState).reduce(
                    (accumulator, currentValue) => accumulator + currentValue,
                    0
                  )}
                  color="primary"
                >
                  <ShoppingCartOutlined />
                </Badge>
              </NavLink>
            </MenuItem>
          </Menu>
        </Right>
      </Wrapper>
    </Container>
  );
}
export default NavBar;
