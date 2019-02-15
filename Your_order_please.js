// function order(words){
//   return (words !== "") ? words.split(' ').sort((a, b) => (/\d+/).exec(a) - (/\d+/).exec(b)).join(' '): words;
// }

function order(words){
  return words.split(' ').sort((a, b) => (/\d+/).exec(a) - (/\d+/).exec(b)).join(' ');
}
