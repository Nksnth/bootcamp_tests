function isFromBellville(registrationNumber) {
    return registrationNumber.startsWith('CY');
}

console.log(isFromBellville('CY123'));
console.log(isFromBellville('CY987'));
console.log(isFromBellville('CA456'));