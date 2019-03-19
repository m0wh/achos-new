import MoanSound1 from '../images/moan/moan1.mp3'
import MoanSound2 from '../images/moan/moan2.mp3'
import MoanSound3 from '../images/moan/moan3.mp3'
import MoanSound4 from '../images/moan/moan4.mp3'

const randomMoan = () => {
  const moanSounds = [MoanSound1, MoanSound2, MoanSound3, MoanSound4]
  function getRandomInt (max) {
    return Math.floor(Math.random() * Math.floor(max))
  }
  const chosen = getRandomInt(moanSounds.length)
  return moanSounds[chosen]
}

export default randomMoan
