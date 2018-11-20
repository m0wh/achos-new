import React from "react";
import posed, { PoseGroup } from "react-pose";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
// import posed from "react-pose";
import { StaticQuery, graphql } from "gatsby";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import media from "../utils/breakpoints";
import AvantBold from "../fonts/ITCAvantGardePro-Bold.woff";
import PointerWhite from "../images/icons/white-default.png";
import PlusCursor from "../images/icons/white-+.png";

import Header from "./header";
import ContactUs from "./contactus";
import LuckyDay from "./luckyday";

const transitionDuration = 300;
const transitionDelay = 350;

const Transition = posed.div({
  enter: {
    opacity: 1,
    transition: { duration: transitionDuration },
    delay: transitionDelay,
    beforeChildren: true,
    filter: "blur(0px)"
  },
  exit: {
    opacity: 0,
    filter: "blur(100px)",
    transition: { duration: transitionDuration }
  }
});

// TODO: set variables for line-heights (either in fontSizes util or simple CSS vars)

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  :root {
    // Colors
      --black: #111111;
      --lightblack: #181818;
      --pink: #ff71b0;
      --cyan: #00ffff;
      --green: #41fa70;
      --yellow: #fff36d;
      --lightgrey: #cacaca;
      --darkgrey: #9b9b9b;
    //

    // Cursors
      --pointerwhite: url(${PointerWhite}) 0 0, auto;
      --plusminus: url(${PlusCursor}) 40 40, auto;
    //
    
    // Line-height
    --regularlineheight: 1.53;
    --bigtextlineheight: 1.4;
    --mobilelineheight: 1.7;

    // 
  }

  // html > * {
  //   border: 1px solid red;
  // }
  
  @font-face {
    font-family: "AvantGardeBold";
    src: url(${AvantBold}) format("woff");
  }

  html {
    cursor: var(--pointerwhite);
    overflow-x: hidden;
  }


  body {
    background-color: var(--black);
    font-family: "AvantGardeBold", sans-serif;
    line-height: var(--regularlineheight);
    ${media.phone`line-height: var(--mobilelineheight);`}
    
    
    
    
  }

  a {
    cursor: var(--pointerwhite);
    text-decoration: none;
    color: inherit;
    &:hover {
      color: white;
      text-decoration: underline;
    }
  }


  // Scrollbar styles
    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: linear-gradient(to bottom, rgba(0,255,255,1) 0%, rgba(255,115,176,1) 33%, rgba(64,250,123,1) 66%, rgba(255,243,109,1) 100%);
    &:hover {
      background: linear-gradient(to bottom, rgba(255,243,109,1) 0%, rgba(64,250,123,1) 33%, rgba(255,115,176,1) 66%, rgba(0,255,255,1) 100%);
    }  
    }

    ::-webkit-scrollbar-track {
      background: #333;
    }
  //
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <PoseGroup>
          <Transition
            key={typeof location !== `undefined` && location.pathname}
          >
            <Header />

            {children}
            {typeof location !== `undefined` && location.pathname === "/" && (
              <ContactUs />
            )}
            <LuckyDay />
          </Transition>
        </PoseGroup>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
