function fromWhere(registrationNumber) {
  if (registrationNumber.startsWith('CY')) {
      return 'Bellville';
  } else if (registrationNumber.startsWith('CJ')) {
      return 'Paarl';
  } else if (registrationNumber.startsWith('CA')) {
      return 'Cape Town';
  } else {
      return 'Some other place!';
  }
}

console.log(fromWhere('CY123'));
console.log(fromWhere('CJ456'));
console.log(fromWhere('CA789'));
console.log(fromWhere('GP101'));