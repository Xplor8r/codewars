// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(str){
  let array = str.split(/[^a-zA-Z0-9]/);
  let newArray = [array[0]];
  for (i=1; i < array.length; i++) {
    let word = array[i];
    newArray.push(word.charAt(0).toUpperCase() + word.slice(1));
  }
  return newArray.join('');
}
