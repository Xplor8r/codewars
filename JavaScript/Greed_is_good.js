function score( dice ) {
  let points = 0;
  let counter = {};
  for (let num of dice) {
    counter[num] = (counter[num] || 0) + 1;
  }
  for (let key in counter) {
    let k = counter[key];
    if(k >= 3 && key !== '1') {
        points += (key * 100);
    } else if (key === '1') {
      if (k === 3) {
        points += 1000;
      } else if (k < 3) {
        points += (k * 100)
      } else if (k > 3) {
        points += (1000 + ((k - 3) * 100));
      }
    } else if (key === '5' && k < 3) {
        points += (k * 50)
    } else if (key === '5' && k > 3){
        points += (1000 + ((k - 3) * 50));
    }
  }
  return points;
}
