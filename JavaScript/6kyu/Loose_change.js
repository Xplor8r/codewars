// Welcome young Jedi! In this Kata you must create a function that takes an amount of US currency in cents, and returns a dictionary/hash which shows the least amount of coins used to make up that amount. The only coin denominations considered in this exercise are: Pennies (1¢), Nickels (5¢), Dimes (10¢) and Quarters (25¢). Therefor the dictionary returned should contain exactly 4 key/value pairs.

// Notes:

// If the function is passed either 0 or a negative number, the function should return the dictionary with all values equal to 0.
// If a float is passed into the function, its value should be be rounded down, and the resulting dictionary should never contain fractions of a coin.
// Examples
// loose_change(56)    ==>  {'Nickels': 1, 'Pennies': 1, 'Dimes': 0, 'Quarters': 2}
// loose_change(-435)  ==>  {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}
// loose_change(4.935) ==>  {'Nickels': 0, 'Pennies': 4, 'Dimes': 0, 'Quarters': 0}

function looseChange(cents){
  let amount = cents;
  if (cents <= 0) {
    amount = 0;
  }
  let coins = {};
  let values = [['Quarters',25],['Dimes',10],['Nickels',5],['Pennies',1]]
  for (let val of values){
    let subamount = Math.floor(amount/val[1]);
    coins[val[0]] = (coins[val[0]] || 0) + subamount
    amount-=(subamount * val[1])
  }
  return coins
}
