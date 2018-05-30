/**
 * Function searching prime number by index 
 * @param {*} x - prime index
 * @example primes numbers  2, 3, 5, 7, 11, 13, 17 ... N
 * if you will call function with argument 3 -> primes(3); 
 * Function will return 5 for you.
 */

function primes(x) {
    let primeNumber = 0;
    let startIndex = 2;
  
    if (x === 0) return 1;
  
    while (primeNumber < x) {
      let secondStartIndex = 2;
      let pass = true;
  
      while (secondStartIndex < startIndex && pass) {
        pass = startIndex % secondStartIndex === 0 ? false : true;
        secondStartIndex++;
      }
  
      if (pass) {
        primeNumber++;
      }
  
      if (primeNumber < x) {
        startIndex++;
      }
    }
    return startIndex;
  }
  
  console.log(primes(2)); // @example - result 3
  