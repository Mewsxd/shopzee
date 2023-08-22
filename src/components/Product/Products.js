import styled from "styled-components";
import { popularProducts } from "../../data";
import Product from "./Product";
const Container = styled.div`
  width: 95%;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 380px) {
    padding: 0px 0px;
    width: 95%;
  }
`;
function Products(props) {
  return (
    <Container>
      {props.type === "HOME" &&
        popularProducts.map((item) => {
          return <Product item={item} key={item.id} />;
        })}
      {props.type === "FILTER" &&
        popularProducts
          .filter((item) => {
            if (props.color === "def") {
              return item;
            }
            return item.color === props.color;
          })
          .filter((item) => {
            if (props.size === "def") {
              return item;
            }
            return item.size.find((word) => word === props.size) === props.size;
          })
          .map((item) => {
            console.log(item);
            return <Product item={item} key={item.id} />;
          })}
    </Container>
  );
}

export default Products;
