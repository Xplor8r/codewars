// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// nput to the function is guaranteed to be a single string.

// Examples
// Valid inputs:

// 1.2.3.4
// 123.45.67.89
// Invalid inputs:

// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Note that leading zeros (e.g. 01.02.03.04) are considered invalid.

function isValidIP(str) {
  return str.split('.').filter((o)=>parseInt(o.match(/^-{0,1}\d+$/))<=255&&(o.length===1||(!o[0].match(/0/g)&&!o[0].match(/-/g)))).length===4;
}
