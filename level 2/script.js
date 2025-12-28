// Q.11

function printOneToTen() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
printOneToTen();

// Q.12

function printOneToN(N) {
  let result = "";
  for (let i = 1; i <= N; i++) {
    result += i + " ";
  }
  console.log(result.trim());
}


printOneToN(5);
printOneToN(1); 
printOneToN(3);

// Q.13

function printEvenNumbers(n) {
  let result = [];

  for (let i = 2; i <= n; i += 2) {
    result.push(i);
  }

  console.log(result.join(" "));
}


printEvenNumbers(10); 
printEvenNumbers(7); 
printEvenNumbers(2);  

// Q.14

function printOddNumbers(n) {
  let result = [];

  for (let i = 1; i <= n; i += 2) {
    result.push(i);
  }

  console.log(result.join(" "));
}


printOddNumbers(10); 
printOddNumbers(5); 
printOddNumbers(1);  

// Q.15

function sumToN(n) {
  return (n * (n + 1)) / 2;
}

console.log(sumToN(5));  
console.log(sumToN(1));  
console.log(sumToN(10)); 

// Q.16

function productToN(n) {
  let product = 1;

  for (let i = 1; i <= n; i++) {
    product *= i;
  }

  return product;
}
console.log(productToN(4)); 
console.log(productToN(1)); 
console.log(productToN(5)); 

// Q.17

function printTable(n) {
  let result = [];

  for (let i = 1; i <= 10; i++) {
    result.push(n * i);
  }

  console.log(result.join(" "));
}
printTable(5); 
printTable(2); 
printTable(7); 

// Q.18

function countDivisibleBy3(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      count++;
    }
  }

  return count;
}
console.log(countDivisibleBy3(10)); 
console.log(countDivisibleBy3(7));  
console.log(countDivisibleBy3(2));  

// Q.19

function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(5)); 
console.log(factorial(0)); 
console.log(factorial(3)); 

// Q.20

function multiplesOf7(N) {
    let result = [];
    for (let i = 1; i <= N; i++) {
        result.push(7 * i);
    }
    console.log(result.join(" "));
}
multiplesOf7(3);
multiplesOf7(5);
multiplesOf7(1);









