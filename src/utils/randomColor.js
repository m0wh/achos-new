export default function randomColor() {
  const colors = [
    "var(--pink)",
    "var(--cyan)",
    "var(--green)",
    "var(--yellow)"
  ];

  // "shuffle" from StackOverFlow :)
  function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    return array[getRandomInt(3)];
  }

  return shuffle(colors);
}
