import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import posed from "react-pose";
import { StaticQuery, graphql } from "gatsby";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import AvantBold from "../fonts/ITCAvantGardePro-Bold.woff";
import PointerWhite from "../images/icons/white-default.png";

import Header from "./header";
import Contact from "./contact";
import LuckyDay from "./luckyday";

const Transition = posed.div({
  enter: {
    // y: 0,
    opacity: 1,
    filter: "blur(0px)"
  },
  exit: {
    // y: 30,
    opacity: 0,
    filter: "blur(20px)"
  }
});

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
        <Transition>
          <Header />
          <div>{children}</div>
          <Contact />
          <LuckyDay />
        </Transition>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
