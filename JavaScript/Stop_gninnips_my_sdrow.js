function spinWords(string){
  let array = string.split(' ');
  let newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > 4) {
      let spun = array[i].split('').reverse().join('');
      newArray.push(spun);
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray.join(' ');
}
