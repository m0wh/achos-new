import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import {
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

import FacebookIcon from "../images/icons/facebook.svg";
import TinderIcon from "../images/icons/tinder.svg";
import TwitterIcon from "../images/icons/twitter.svg";
import YoutubeIcon from "../images/icons/youtube.svg";

const ContactWrapper = styled.footer`
  margin: 3.75rem 3.1875rem 5.25rem 3.5625rem;
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

const SocialIcon = styled.img`
  color: ${props => props.color};
  padding-right: 2rem;
`;

// const Mail = styled.li``;

const Contact = () => (
  <Element name="contact">
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
        <ListItem color="var(--pink)">
          <SocialIcon src={TinderIcon} />
          Tinder
        </ListItem>
        <ListItem color="var(--cyan)">
          <SocialIcon src={FacebookIcon} />
          Facebook
        </ListItem>
        <ListItem color="var(--green)">
          <SocialIcon src={YoutubeIcon} />
          Instagram
        </ListItem>
        <ListItem color="var(--yellow)">
          <SocialIcon src={TwitterIcon} />
          Twitter
        </ListItem>
      </FollowUs>
    </ContactWrapper>
  </Element>
);

export default Contact;
