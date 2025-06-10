function multiply(numb1, numb2, numb3){
    if (numb1 === numb2 || numb1 === numb3 || numb2 === numb3){
        return "Error: Numbers must be different"
    }
    return numb1*numb2*numb3
}
console.log(multiply(1,5,8));
// function that converts minutes to seconds. I made it so it makes sure the user is entering a number
const convertToSeconds = function(minutes) {
  if (typeof minutes !== 'number' || isNaN(minutes)) {
    throw new TypeError('Input must be a valid number');
  }
  if (minutes < 0) {
    throw new RangeError('Input must be a positive number');
  }
  return minutes * 60;
};
console.log(convertToSeconds(10));
// function that converts fahrenheit to celcius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
console.log(fahrenheitToCelsius(32));
// function that reverses a string and then returns the reversed string
function reverseString(str){
  return str.split('').reverse().join('');
}
console.log(reverseString('shumeez'));
// function that counts the number of vowels in a string
function countVowels(str) {
    const vowels = "aeiou";
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count; // Returns the vowel count
}
console.log(countVowels("shumeez"));
// function that checks if the number provided is a prime number
function isPrime(num) {
    // first we are eliminating the obvious
    if (num <= 1) return false;  // 0, 1, and negatives are not prime numbers
    if (num === 2) return true;  // 2 is the only even prime
    if (num % 2 === 0) return false;  // Eliminate even numbers
    // we start at 3 since we already checked for 0, 1 and 2.
    // i'm only checking up until the squareroot because after that it just reverses itself
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(1));
console.log(isPrime(21));
console.log(isPrime(2));
console.log(isPrime(11));