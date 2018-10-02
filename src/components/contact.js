import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const ContactWrapper = styled.footer`
  margin: 2.625rem 3.1875rem 0 3.5625rem;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  font-size: 2rem;
  color: var(--lightgrey);
`;

const ContactUs = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  color: ${props => props.color};
`;

const Mail = styled.li``

const Contact = () => (
  <ContactWrapper>
    <ContactUs>
      <li>Contact</li>

    </ContactUs>
  </ContactWrapper>
);

export default Contact;
