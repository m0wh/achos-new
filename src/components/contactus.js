import React from 'react'
import styled from 'styled-components'
import { Element } from 'react-scroll'
import media from '../utils/breakpoints'
import fontSizes from '../utils/fontSizes'
import FacebookIcon from '../images/icons/facebook.svg'
import TinderIcon from '../images/icons/tinder.svg'
import RAIcon from '../images/icons/ra.png'
import YoutubeIcon from '../images/icons/youtube.svg'

const Wrapper = styled.footer`
  padding: var(--generalSpacing);
  padding-top: 3.75vw;
  padding-bottom: 5.25vw;
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: start;
  align-items: baseline;
  color: var(--lightgrey);
  ${ fontSizes(1.875) }
  line-height: var(--bigtextlineheight);
  ${ media.tablet`grid-gap: 5vw;` }
  ${ media.phone`
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    text-align: center;
    ;` }
`

const ContactList = styled.ul`
  list-style: none;
`

const FollowUs = styled.ul`
  list-style: none;
  justify-self: center;
  margin-right: 3vw;
`

const ListItem = styled.li`
  color: ${ props => props.color };
`

const SocialIcon = styled.img`
  color: ${ props => props.color };
  padding-right: 2.08vw;
`

// const Mail = styled.li``;

const ContactUs = () => (
  <Element name="contact">
    <Wrapper>
      <ContactList>
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
          <a
            href="https://wa.me/34630991990"
            target="_blank"
            rel="noopener noreferrer"
          >
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
      </ContactList>
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
            href="https://www.residentadvisor.net/profile/achos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon width="23px" src={RAIcon} />
            RA
          </a>
        </ListItem>
      </FollowUs>
    </Wrapper>
  </Element>
)

export default ContactUs
