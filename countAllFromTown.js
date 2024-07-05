function countAllFromTown(registrationNumbers, town) {
    
  const regNumbersArray = registrationNumbers.split(',');

  
  let count = 0;

  
  regNumbersArray.forEach(regNumber => {
      
      if (regNumber.trim().startsWith(town)) {
          
          count++;
      }
  });

  
  return count;
}


const fromStellies = countAllFromTown('CL 124,CY 567,CL 345,CJ 456,CL 341', 'CL');
console.log(fromStellies);
