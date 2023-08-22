import styled from "styled-components";

import { categories } from "../../data";
import CategoriesItem from "./CategoriesItem";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 380px) {
    flex-direction: column;
    justify-content: stretch;
    /* width: 40%; */
  }
`;

function Categories() {
  return (
    <Container>
      {categories.map((items) => (
        <CategoriesItem item={items} />
      ))}
    </Container>
  );
}

export default Categories;
