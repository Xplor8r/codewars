function generateHashtag (str) {
  let hashTag = ['#'];
  let array = str.split(/[^a-zA-Z0-9]/);
  if (array.join('') === '' || array.join('').length >= 140) { return false }
  for (i=0; i < array.length; i++) {
    hashTag.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
  }
  return hashTag.join('');
}
