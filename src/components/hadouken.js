// import React from 'react'
// import Konami from 'react-konami-code'
// import HadoukenSound from "../images/hadouken.mp3"

// export default class Hadouken extends React.Component {
//   easterEgg = () => {
//     this.sound.play();

//   }

//   render = () => (
//     <>
//     <Konami action={this.easterEgg} code={[40, 39, 65]} resetDelay={0}>
//       <audio preload="auto" ref={(test) => { this.sound = test; }}><source src={HadoukenSound} type="audio/mpeg"></source></audio>
//     </Konami>
//     </>
//   )
// // }

// const pressed = [];
// const secretCode = "wesbos";

// window.addEventListener("keyup", e => {
//   console.log(e.key);
//   pressed.push(e.key);
//   pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
//   if (pressed.join("").includes(secretCode)) {
//     console.log("DING DING!");
//     cornify_add();
//   }
//   console.log(pressed);
// });
