// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// formatDuration(62)    // returns "1 minute and 2 seconds"
// formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

function formatDuration (seconds) {
  if (seconds === 0) return "now";
  let year = Math.floor(seconds / 31536000);
  let day = Math.floor((seconds % 31536000) / 86400); 
  let hour = Math.floor(((seconds % 31536000) % 86400) / 3600);
  let minute = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
  let second = (((seconds % 31536000) % 86400) % 3600) % 60;
  let result = [];
  if (year > 0) (year === 1)?result.push(year+" year"):result.push(year+" years");
  if (day > 0) {
    if (year > 0) result.push(", ");
    (day === 1)?result.push(day+" day, "):result.push(day+" days, ");
  }
 
  if (hour > 0) (hour === 1)?result.push(hour+" hour"):result.push(hour+" hours");
  if (minute > 0) {
    if (hour > 0 && (minute > 0 && second > 0)) result.push(", ");
    if (hour > 0 && second === 0) result.push(" and ");
    (minute === 1)?result.push(minute+" minute"):result.push(minute+" minutes");
  }
  if (second > 0) {
    if (minute > 0) result.push(" and ");
    if (hour > 0 && minute === 0) result.push("and ");
    (second === 1)?result.push(second + " second"):result.push(second + " seconds");
  }
  return result.join('');
}
