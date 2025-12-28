// Q.1
function num_check(a){

    if (a%2==0) {
        console.log(`Even`); 
    }
    else{
        console.log(`odd`);
        
    }
}
num_check(10)

// Q.2

function max_num(a,b){

    if (a>b) {
        console.log(`a is maximum`);
        
    }
    else{
        console.log(`b is maximum`);
        
    }
}
max_num(10,15)

// Q.3

function max_num(a,b,c){

    if (a>b && a>c) {
        console.log(`a is maximum`);
        
    }
    else if(b>a && b>c){
        console.log(`b is maximum`);
        
    }
    else{
        console.log(`c is maximum`);
        
    }
}
max_num(5,10,8)

// Q.4

function num_sign(a){
    if (a>0) {
        console.log(`positive`);
        
    }
    else if(a<0){
        console.log(`negative`);
        
    }
    else{
        console.log(`Zero`);
        
    }
}
num_sign(15)

// Q.5

function age(a){
    
    if (a>0 && a<=12) {
        console.log(`child`);
        
    }
    else if (a>=13 && a<=19) {
        console.log(`teenager`);
        
    }
    else{
        console.log(`adult`);
        
    }
}
age(15)

// Q.6

function calculateGrade(marks) {
  if (marks >= 90 && marks <= 100) {
    return "A";
  } else if (marks >= 80) {
    return "B";
  } else if (marks >= 70) {
    return "C";
  } else if (marks >= 60) {
    return "D";
  } else if (marks >= 0) {
    return "F";
  } else {
    return "Invalid marks";
  }
}


console.log(calculateGrade(92));
console.log(calculateGrade(75));
console.log(calculateGrade(40));


// Q.7 

function isDivisibleBy5(num) {
  if (num % 5 === 0) {
    return "divisible by 5";
  } else {
    return "not divisible by 5";
  }
}


console.log(isDivisibleBy5(10));
console.log(isDivisibleBy5(11));
console.log(isDivisibleBy5(0));

// Q.8

function divisibleBy3And5(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "divisible by 3 and 5";
  } else {
    return "not divisible by both";
  }
}


console.log(divisibleBy3And5(15)); 
console.log(divisibleBy3And5(30)); 
console.log(divisibleBy3And5(9));  

// Q.9

function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return "leap year";
  } else {
    return "not a leap year";
  }
}


console.log(isLeapYear(2020)); 
console.log(isLeapYear(2021)); 
console.log(isLeapYear(2000)); 
console.log(isLeapYear(1900)); 

// Q.10

function checkRange(num) {
  if (num >= 10 && num <= 50) {
    return "in range";
  } else {
    return "out of range";
  }
}


console.log(checkRange(25)); 
console.log(checkRange(10));
console.log(checkRange(7)); 









