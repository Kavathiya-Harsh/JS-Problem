// 31 
function stringLength(str) {
  let count = 0;

  for (let ch of str) {
    count++;
  }

  console.log(count);
}


stringLength("hello");      
stringLength("");           
stringLength("JavaScript"); 

// 32

function printCharacters(str) {
  for (let ch of str) {
    console.log(ch);
  }
}
printCharacters("cat");
printCharacters("hi");


// 33

function countVowels(str) {
  let count = 0;
  str = str.toLowerCase();

  for (let ch of str) {
    if (
      ch === 'a' ||
      ch === 'e' ||
      ch === 'i' ||
      ch === 'o' ||
      ch === 'u'
    ) {
      count++;
    }
  }

  console.log(count);
}
countVowels("hello");       
countVowels("JAVASCRIPT");  
countVowels("sky"); 

// 34

// 35

function toUpper(str) {
  console.log(str.toUpperCase());
}


toUpper("hello");   
toUpper("Js");      
toUpper("123abc");


// 36

function toLower(str) {
  console.log(str.toLowerCase());
}
toLower("HELLO");   
toLower("Js");      
toLower("123ABC")

// 37
 
function reverseString(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  console.log(result);
}

s
reverseString("hello");
reverseString("abc");  
reverseString("a"); 

// 38

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}


console.log(isPalindrome("madam"));    
console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello"));   

// 39

function countA(str) {
  let count = 0;

  for (let ch of str.toLowerCase()) {
    if (ch === 'a') {
      count++;
    }
  }

  console.log(count);
}
countA("banana"); 
countA("Apple");  
countA("xyz");    

// 40

function removeSpaces(str) {
  str = str.trim();   // remove start & end spaces
  let result = "";

  for (let ch of str) {
    if (ch !== " ") {
      result += ch;
    }
  }

  console.log(result);
}
removeSpaces("hello world"); 
removeSpaces("  a b  c  ");  
removeSpaces("no_spaces");   

// 42

function replaceA(str) {
  console.log(str.replaceAll('a', 'e'));
}
replaceA("banana");
replaceA("apple");  
replaceA("cat");

// 43

function containsChar(str, ch) {
  console.log(str.includes(ch));
}
containsChar("hello", "e");       
containsChar("hello", "a");    
containsChar("JavaScript", "S");

// 44

function comparestring(a,b){

    if (a.length != b.length) {
        console.log(false);
        return;
        
    }
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        console.log(false);
        return
        
      }  
    }
    console.log(true);
}
comparestring("hello", "hello"); 
comparestring("Hello", "hello"); 
comparestring("js", "js ");   

// 45

function countDigits(str) {
  let count = 0;

  for (let ch of str) {
    if (ch >= '0' && ch <= '9') {
      count++;
    }
  }

  console.log(count);
}
countDigits("abc123");    
countDigits("2025 year"); 
countDigits("no digits"); 

// 46


function countUppercase(str) {
  let count = 0;

  for (let ch of str) {
    if (ch >= 'A' && ch <= 'Z') {
      count++;
    }
  }

  console.log(count);
}
countUppercase("HeLLo");    
countUppercase("javascript"); 
countUppercase("JS 101"); 

// 47 

function countLowercase(str) {
  let count = 0;

  for (let ch of str) {
    if (ch >= 'a' && ch <= 'z') {
      count++;
    }
  }

  console.log(count);
}

countLowercase("HeLLo");      
countLowercase("JAVASCRIPT"); 
countLowercase("Js 101");     

// 48

function removeVowels(str) {
  let result = "";

  for (let ch of str) {
    if (
      ch !== 'a' && ch !== 'e' && ch !== 'i' && ch !== 'o' && ch !== 'u' &&
      ch !== 'A' && ch !== 'E' && ch !== 'I' && ch !== 'O' && ch !== 'U'
    ) {
      result += ch;
    }
  }

  console.log(result);
}
removeVowels("hello");       
removeVowels("JavaScript");  
removeVowels("AEIOU");   

// 49

function removeDigits(str) {
  let result = "";

  for (let ch of str) {
    if (!(ch >= '0' && ch <= '9')) {
      result += ch;
    }
  }

  console.log(result);
}
removeDigits("abc123");        
removeDigits("Js 101 course"); 
removeDigits("2025");

// 50

function toggleCase(str) {
  let result = "";

  for (let ch of str) {
    if (ch >= 'a' && ch <= 'z') {
      result += ch.toUpperCase();
    } else if (ch >= 'A' && ch <= 'Z') {
      result += ch.toLowerCase();
    } else {
      result += ch; 
    }
  }

  console.log(result);
}

toggleCase("HeLLo");   
toggleCase("abcDEF"); 
toggleCase("Js 101"); 




