import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import AvantBold from "../fonts/ITCAvantGardePro-Bold.woff";
import PointerWhite from "../images/icons/white-default.png";

import Header from "./header";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  :root {
    // Colors
    --black: #111111;
    --pink: #ff71b0;
    --cyan: #00ffff;
    --green: #41fa70;
    --yellow: #fff36d;
    // Cursors
    --pointerwhite: url(${PointerWhite}) 0 0, auto;
  }
  
  @font-face {
    font-family: "AvantGardeBold";
    src: url(${AvantBold}) format("woff");
  }

  html {
    cursor: var(--pointerwhite);
  }

  body {
    background-color: var(--black);
    font-family: "AvantGardeBold";
    
  }
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
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <div>{children}</div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
