import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Element } from "react-scroll";
import media from "../utils/breakpoints";

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
  align-items: baseline;
  color: var(--lightgrey);
  font-size: 2rem;
  line-height: 1.4;
  ${media.tablet`grid-gap: 4rem;`}
  ${media.phone`grid-gap: 0;`}
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
        <ListItem color="var(--pink)">
          <a
            href="mailto:hi@achos.es?Subject=Shut up and take my money!"
            target="_blank"
            rel="noopener noreferrer"
          >
            hi@achos.es
          </a>
        </ListItem>
        <ListItem color="var(--cyan)">
          <a href="tel:+34935016671" target="_blank" rel="noopener noreferrer">
            (+34) 935 016 671
          </a>
        </ListItem>
        <ListItem color="var(--green)">
          <a href="tel:+34630991990" target="_blank" rel="noopener noreferrer">
            (+34) 630 991 990
          </a>
        </ListItem>
        <ListItem color="var(--yellow)">
          <a
            href="https://goo.gl/maps/p4svHoawcbq"
            target="_blank"
            rel="noopener noreferrer"
          >
            <address>Vigatans 11, Local 2, 08003 Barcelona</address>
          </a>
        </ListItem>
      </ContactUs>
      <FollowUs>
        <li>Follow Us!</li>

        <ListItem color="var(--pink)">
          <a
            href="http://www.gotinder.com/@achos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon src={TinderIcon} />
            Tinder
          </a>
        </ListItem>

        <ListItem color="var(--cyan)">
          <a
            href="http://www.facebook.com/achosagency"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon src={FacebookIcon} />
            Facebook
          </a>
        </ListItem>
        <ListItem color="var(--green)">
          <a
            href="http://www.instagram.com/achosagency"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon src={YoutubeIcon} />
            Instagram
          </a>
        </ListItem>
        <ListItem color="var(--yellow)">
          <a
            href="https://twitter.com/achosagency"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon src={TwitterIcon} />
            Twitter
          </a>
        </ListItem>
      </FollowUs>
    </ContactWrapper>
  </Element>
);

export default Contact;
