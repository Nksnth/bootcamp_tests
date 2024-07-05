function countRegNumber(registrationString) {

  var registrationNumbers = registrationString.split(',');


  return registrationNumbers.length;
}

var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328');
console.log(regCount); 