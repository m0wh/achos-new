import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import posed from "react-pose";
// import { StaticQuery, graphql } from "gatsby";
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import SEO from './SEO'
import media from '../utils/breakpoints'
import AvantBold from '../fonts/ITCAvantGardePro-Bold.woff'
import PointerWhite from '../images/icons/white-default.png'
import PlusCursor from '../images/icons/white-+.png'
import BlackMail from '../images/icons/black-contact2.png'
import DownCursor from '../images/icons/white-down.png'
import WhiteX from '../images/icons/white-x.png'
import ZoomIn from '../images/icons/white-zoom.png'
import ZoomOut from '../images/icons/white-zoom2.png'
import Resizer from './resizer'

import Cookie from './cookie'
import { useSpring, useTransition, animated, config } from 'react-spring'
import Header from './header'
import TapToClose from './taptoclose'

// export const pageFade = {
//   initial: {
//     opacity: 0,
//     filter: 'blur(100px)'
//   },
//   enter: {
//     opacity: 1,
//     transition: { duration: transitionDuration },
//     delay: transitionDelay,
//     beforeChildren: true,
//     filter: 'blur(0px)'
//   },
//   exit: {
//     opacity: 0,
//     transition: { duration: transitionDuration },
//     filter: 'blur(100px)'
//   }
// }

const GlobalStyle = createGlobalStyle`
  ${ reset }
  
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
      --pointerwhite: url(${ PointerWhite }) 0 0, auto;
      --plusminus: url(${ PlusCursor }) 40 40, auto;
      --mail: url(${ BlackMail }) 40 40, auto;
      --down: url(${ DownCursor }) 40 40, auto;
      --whiteX: url(${ WhiteX }) 40 40, auto;
      --zoomIn: url(${ ZoomIn }) 40 40, auto;
      --zoomOut: url(${ ZoomOut }) 40 40, auto;
    //
    
    // Line-height
    --regularlineheight: 1.53;
    --bigtextlineheight: 1.4;
    --mobilelineheight: 1.7;

    // Margins and padding
    --generalSpacing: 2.625vw 3.5625vw;
    --sectionSpacer: 6.25rem auto 7.25rem auto;
    ${ media.phone`--sectionSpacer: 1.5625rem auto;` }
  }

  // body > * {
  //   border: 1px solid red;
  // }
  
  @font-face {
    font-family: "AvantGardeBold";
    src: url(${ AvantBold }) format("woff");
  }

  html {
    cursor: var(--pointerwhite);
    overflow-x: hidden;
  }


  body {
    background-color: var(--black);
    font-family: "AvantGardeBold", sans-serif;
    line-height: var(--regularlineheight);
    ${ media.phone`line-height: var(--mobilelineheight);` }
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
`

const Layout = ({ children, location }) => {
  const [on, off] = useState(true)
  const transition = useTransition(on, null, {
    from: { filter: `blur(100px)` },
    enter: { filter: `blur(0px)` },
    leave: { filter: `blur(100px)` }
  })
  return (
    <>
    <SEO />
    <GlobalStyle />
      {typeof location !== `undefined` && location.pathname === '/' && (<TapToClose />)}
      {transition.map(({ item, key, props }) =>
        item && (
          <animated.main key={key} style={props} id="content" role="main">
            <Resizer />
            <Header />
            {typeof location !== `undefined` && location.pathname === '/' && (<Cookie />)}
            {children}
          </animated.main>
        )
      )}

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
