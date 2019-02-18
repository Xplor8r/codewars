function validBraces(braces){
  let newBraces = [];
  let lefties = ['(','{','[']
  let righties = [')','}',']']
  for (let i = 0; i < braces.length; i++) {
    if (righties.indexOf(braces[i]) >= 0) { 
      if (newBraces.length === 0 || (newBraces.pop() !== lefties[righties.indexOf(braces[i])])) {
        return false
      }
    } else {
      newBraces.push(braces[i])
    }
  }
  return newBraces == 0
}
