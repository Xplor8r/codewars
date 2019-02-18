function toCamelCase(str){
  let array = str.split(/[^a-zA-Z0-9]/);
  let newArray = [array[0]];
  for (i=1; i < array.length; i++) {
    let word = array[i];
    newArray.push(word.charAt(0).toUpperCase() + word.slice(1));
  }
  return newArray.join('');
}
