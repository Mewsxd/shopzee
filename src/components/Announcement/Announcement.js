import { styled } from "styled-components";
import "./Announcement.css";
const Container = styled.div`
  width: 100%;
  text-align: center;
  background-color: teal;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Message = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  color: white;
`;
function Announcement() {
  return (
    <Container>
      <Message>Huge deal! 500$ Off of orders above 2000$</Message>
    </Container>
  );
}

export default Announcement;
