// Responsive sizes based on https://websemantics.uk/tools/responsive-font-calculator/. Takes the max size as an argument. The smaller size will be the size passed divided by 1.7. This is totally random, I thought it was a nice scaling. It could be changed. Or it could take the argument as a "scaling factor".

export default size => `
@media (min-width: 320px) {
  
  {
   font-size: calc(${size / 1.7}rem + ((1vw - 0.2rem) * 2.4107));
 }
}
@media (min-width: 768px) {
  {
   font-size: ${size}rem;
 }
}`;

/*
1.875/1.1 = 1.7

In this project, fonts are: 

30px (normal) -> 1.875rem
48px (big) -> 3rem


*/
