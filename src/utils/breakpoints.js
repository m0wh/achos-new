import { css } from "styled-components";

// Change sizes or add new ones and then reference by ${media.sizename}
const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

/*
EXAMPLES
  ${media.tablet`background-color: mediumseagreen;`}
  ${media.phone`background-color: palevioletred;`}
  ${media.desktop`background-color: palevioletred;`}
*/

export default media;
