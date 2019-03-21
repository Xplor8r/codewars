function wave(string){
  let newWave = [];
  for(let i = 0; i < string.length; i++) {
    let char = string.charAt(i);
    if (char.match(/[a-z]/i)) {
      newWave.push(string.substring(0, i) + char.toUpperCase() + string.slice((i + 1)));
    }
  }
  return newWave;
}
