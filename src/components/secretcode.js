import React, { Component } from 'react'
import Konami from 'react-konami-code'
import HadoukenSound from '../images/hadouken.mp3'

class SecretCode extends Component {
  easterEgg = () => {
    this.sound.play()
  }

  render = () => (
    <Konami action={this.easterEgg} code={['65', '67', '72', '79', '83']} resetDelay={500}>
      <audio preload="auto" ref={test => { this.sound = test }}><source src={HadoukenSound} type="audio/mpeg"></source></audio>
    </Konami>
  )
}

export default SecretCode
