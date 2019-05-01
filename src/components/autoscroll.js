import React from 'react'
import styled from 'styled-components'
import fontSizes from '../utils/fontSizes'
import media from '../utils/breakpoints'

// ${ media.tablet`display: none;` };

const data = [
  {
    text: `we need designers & artists`,
    href: `mailto:hi@achos.es?Subject=I'm a fucking Designer / Artist and I want my beer!`,
    color: `var(--pink)`
  },
  {
    text: `we need front end & back end developers`,
    href: `mailto:hi@achos.es?Subject=I'm a fucking Developer and I want my beer!`,
    color: `var(--cyan)`
  },
  {
    text: `we need thinkers & social media`,
    href: `mailto:hi@achos.es?Subject=I'm a fucking Thinker / Social and I want my beer!`,
    color: `var(--green)`
  },
  {
    text: `we need accounts & project managers`,
    href: `mailto:hi@achos.es?Subject=I'm a fucking Account Manager / Project manager / I want my beer!`,
    color: `var(--yellow)`
  },
  {
    text: `we need you`,
    href: `mailto:hi@achos.es?Subject=I'm a fucking interested and I want my beer!`,
    color: `white`
  }
]

const Wrapper = styled.section`
  width: 100vw;
  height: 25vh;
  position: relative;
  overflow: hidden;
  padding: 2.625rem 0;
  color: white;
  background: var(--black);
  
`

const ScrollingTexts = styled.div`
  ${ fontSizes(9) };
  position: relative;
  white-space: nowrap;
  width: 200%;
  height: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  text-align: center;
  transform: translateX(-1%); 
  animation: scroll-left 300s linear infinite;
  @keyframes scroll-left {
    0% { 
      transform: translateX(-1%); 
    }
    100% { 
      transform: translateX(-1000%); 
    }
  }
  ${ media.tablet`
    width: 100%;
    @keyframes scroll-left {
      0% { 
        transform: translateX(-1%); 
      }
      100% { 
        transform: translateX(-2000%); 
      }
    }
  ` }
  ${ media.phone`
    width: 100%;
    @keyframes scroll-left {
      0% { 
        transform: translateX(-1%); 
      }
      100% { 
        transform: translateX(-5000%); 
      }
    }
  ` }
    
`

const ScrollingElement = styled.a`
  color: ${ props => props.color };
  margin: 0 2rem;
`

function AutoScroll () {
  return (
    <Wrapper>
      <ScrollingTexts>
        {data.map(item => (
          <ScrollingElement key={item.text} href={item.href} color={item.color}>
            {item.text}
          </ScrollingElement>))}
      </ScrollingTexts>
    </Wrapper>
  )
};

export default AutoScroll
