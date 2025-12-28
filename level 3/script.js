// Q.21

function countDigits(n) {
  n = Math.abs(n);

  if (n === 0) return 1;

  let count = 0;
  while (n > 0) {
     count++;
    n = Math.floor(n / 10);
   
  }
  return count;
}

console.log(countDigits(0));     
console.log(countDigits(1234));  
console.log(countDigits(-98)); 

// Q.22

function sumOfDigits(n) {
  n = Math.abs(n);

  let sum = 0;
  while (n > 0) {
     sum += n % 10;
      n = Math.floor(n / 10);
  }
  return sum;
}
console.log(sumOfDigits(123));
console.log(sumOfDigits(505)); 
console.log(sumOfDigits(9)); 

// Q.23

function productofdigits(n){

    n=Math.abs(n);

    let res= 1 ;

    while(n>0){
        res *= n%10;
        n=Math.floor(n/10)
    }
    return res;
}
console.log(productofdigits(456));

// Q.24

function reverse_num(n){

    let sign = n < 0 ? -1 : 1;
  n = Math.abs(n);


    n=Math.abs(n);

    let rev= 0
    while(n>0){
        rev=rev * 10 +( n%10)
        n= Math.floor(n/10)
    }
    return sign * rev

}
console.log(reverse_num(-78965));

// 25

function isPalindrome(n) {
  let original = n;

  let rev = 0;
  while (n > 0) {
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
  }

  return original === rev;
}

console.log(isPalindrome(121)); 
console.log(isPalindrome(123)); 
console.log(isPalindrome(0));  

// 26

function  num_prime(n){

    if(n<=0)return false;

    for (let i = 2; i < n; i++) {
        if (n%i == 0) {
           return false; 
        }
    }
    return true;
}
console.log(num_prime(2));
console.log(num_prime(17));
console.log(num_prime(15));

// 27 

function num_prime(n){

    for (let num = 2; num <=n; num++) {
        let prime = true
        for (let i = 2; i <num; i++) {
            if (num%i == 0) {
                prime = false
                break;   
            }
            
        }
        if (prime) {
            console.log(num);          
        }
    }
}
num_prime(15)


// Q.28

function fibonacci (n){
    let a=0;b=1;

    for (let i = 0; i < n; i++) {

        console.log(a);
        let next = a+b;
        a=b;
        b=next;
        
    }
}
fibonacci(5)

// Q 29

function gcd(a,b){

    let gcd = 1 ; 
    let min = Math.min(a,b)

    for (let i = 0; i <min; i++) {

        if (a%i === 0 && b%i===0) {
            gcd = i ;          
        }
    }
    console.log(gcd);
    
}
gcd(12,18)

// Q.30

function lcm(a,b){

    let max = Math.max(a,b);

    while (true) {
        if (max%a == 0 && max%b == 0) {
            console.log(max);
            break
        }
        max++
    }
}
lcm(3,9)
lcm(5,7)






