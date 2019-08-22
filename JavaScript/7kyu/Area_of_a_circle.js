// Complete the function circleArea so that it will return the area of a circle with the given radius. Round the returned number to two decimal places (except for Haskell). If the radius is not positive or not a number, return false.

// Example:

// circleArea(-1485.86);    //returns false
// circleArea(0);           //returns false
// circleArea(43.2673);     //returns 5881.25
// circleArea(68);          //returns 14526.72
// circleArea("number");    //returns false

var circleArea = function(radius) {
  if (radius <= 0) return false;
  if (typeof radius === 'string') return false;
  let area = Math.pow(radius,2)*Math.PI
  return Math.round( area * 1e2) / 1e2;
};
