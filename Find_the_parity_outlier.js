function findOutlier(integers){
   let odds = [];
   let evens = [];
   for (var i = 0; i < integers.length; i++) {
        if (Math.abs(integers[i] % 2) != 1) {
            evens.push(integers[i]);
        }
        else {
            odds.push(integers[i]);
        }
    };
   if (odds.length < evens.length) {
     return odds[0];
     } else {
     return evens[0];
     }
}
