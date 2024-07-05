function yearsAgo(year) {
  const currentYear = new Date().getFullYear();
  return currentYear - year;
}

console.log(yearsAgo(2019));