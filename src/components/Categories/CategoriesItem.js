import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 70vh;
  position: relative;
  @media screen and (max-width: 380px) {
    margin: 10px 5px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media screen and (max-width: 380px) {
    width: 100%;
    height: 40vh;
  }
`;
const Info = styled.div`
  color: white;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  margin-bottom: 20px;
`;
const Button = styled.button`
  &:hover {
    transform: scale(1.1);
  }
  border: none;
  padding: 10px;
  color: grey;
  font-weight: 500;
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
function CategoriesItem({ item }) {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>
          <NavLink to="/products">SHOP NOW</NavLink>
        </Button>
      </Info>
    </Container>
  );
}

export default CategoriesItem;
