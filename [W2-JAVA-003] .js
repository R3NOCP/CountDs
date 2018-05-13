// countDs

function countCharD(string, characters) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == characters) {
      counted += 1;
    }
  }
  return counted;
}

function countDs(string) {
  return countCharD(string, "D");
}

console.log(countDs("DDC"));
console.log(countCharD("Kikkert", "k"));
