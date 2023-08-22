import {
  EmailOutlined,
  Facebook,
  Instagram,
  LocationOnOutlined,
  Phone,
  PhoneOutlined,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import { styled } from "styled-components";
const Container = styled.div`
  display: flex;
  @media screen and (max-width: 380px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  ${"" /* margin: 10px; */}
  padding:20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  @media screen and (max-width: 380px) {
    display: none;
  }
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
  width: 80%;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 10px 0px;
  margin-right: 10px;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 700;
`;
const List = styled.li`
  ${
    "" /* padding: 0;
  margin: 0; */
  }
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.ul`
  margin: 0;
  padding: 0;
  width: 41%;
  margin-bottom: 15px;
`;

const Contacts = styled.div``;

const ContactItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;
// const Address = styled.p``;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Shopzee</Logo>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat
          ultricies lacus, vel viverra sem placerat sed. Maecenas auctor quam
          nec turpis luctus, et finibus tellus eleifend. Fusce id mi
          ullamcorper, vestibulum sapien a, pellentesque nulla.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Policy</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <Contacts>
          <ContactItem>
            <Room style={{ marginRight: "10px" }} />
            123 Elm Street, Apt 1A, Smallville, Fakeville 12345
          </ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: "10px" }} />
            +91 233467
          </ContactItem>
          <ContactItem>
            <EmailOutlined style={{ marginRight: "10px" }} />
            abd@gmail.com
          </ContactItem>
          <ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
          </ContactItem>
        </Contacts>
      </Right>
    </Container>
  );
};

export default Footer;
