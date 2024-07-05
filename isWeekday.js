function isWeekday(day) {
  var weekendDays = ['Saturday', 'Sunday'];
   
  return !weekendDays.includes(day);
}

console.log(isWeekday('Saturday'));  // Output: false
console.log(isWeekday('Thursday'));