// import React from 'react'
// import HadoukenSound from "../images/hadouken.mp3"


// const pressed = [];
// const secretCode = "wesbos";

// export default class Hadouken extends React.Component {
  

//   componentDidMount() {
//     window.addEventListener("keyup", e => {
//       console.log(e.key);
//       pressed.push(e.key);
//       pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
//       if (pressed.join("").includes(secretCode)) {
//         this.playSound();
        
//       }
//       console.log(pressed);
//     });
//   }

//   componentWillUnmount() {
//     window.removeEventListener("keyup", e);
//   }
//   playSound = () => {
//     this.sound.play();

//   }

//   render = () => (
    
    
//     <div>
//       <audio preload="auto" ref={(test) => { this.sound = test; }}><source src={HadoukenSound} type="audio/mpeg"></source></audio>
//     </div>
    
//   )
// }




