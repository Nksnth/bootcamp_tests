function countAllPaarl(registrationNumbers) {
    
    const regNumbersArray = registrationNumbers.split(', ');

    
    let count = 0;

    
    regNumbersArray.forEach(regNumber => {
        
        if (regNumber.startsWith('CJ')) {
            
            count++;
        }
    });

    
    return count;
}