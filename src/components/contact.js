import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const ContactWrapper = styled.footer`
  margin: 2.625rem 3.1875rem 2.625rem 3.5625rem;
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr
  justify-items: start;
  align-items: center;
  color: var(--lightgrey);
  font-size: 2rem;
  line-height: 1.4;
`;

const ContactUs = styled.ul`
  list-style: none;
`;

const FollowUs = styled.ul`
  list-style: none;
  justify-self: center;
  margin-right: 3.8rem;
`;

const ListItem = styled.li`
  color: ${props => props.color};
`;

// const Mail = styled.li``;

const Contact = () => (
  <ContactWrapper>
    <ContactUs>
      <li>Contact</li>
      <ListItem color="var(--pink)">hi@achos.es</ListItem>
      <ListItem color="var(--cyan)">(+34) 935 016 671</ListItem>
      <ListItem color="var(--green)">(+34) 630 991 990</ListItem>
      <ListItem color="var(--yellow)">
        Vigatans 11, Local 2, 08003 Barcelona
      </ListItem>
    </ContactUs>
    <FollowUs>
      <li>Follow Us!</li>
      <ListItem color="var(--pink)">Tinder</ListItem>
      <ListItem color="var(--cyan)">Facebook</ListItem>
      <ListItem color="var(--green)">Instagram</ListItem>
      <ListItem color="var(--yellow)">Twitter</ListItem>
    </FollowUs>
  </ContactWrapper>
);

export default Contact;
