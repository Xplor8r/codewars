var uniqueInOrder=function(iterable){
  let newList = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== (iterable[i + 1])) {
      newList.push(iterable[i]);
    }
  }
  return newList;
}
