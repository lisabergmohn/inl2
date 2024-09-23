"use strict";

//Uppgift 1
function min(p1, p2) {
  if (p1 < p2) {
    return p1;
  } else {
    return p2;
  }
}

console.log(min(20, 112));

function max(p3, p4) {
  if (p3 > p4) {
    return p3;
  } else {
    return p4;
  }
}

console.log(max(300, 3000));

//Uppgift 2
function range(n) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr.push(i);
  }
  return arr;
}

var testArray = range(10);
console.log(testArray);

//Uppgift 3
function sum(numbers) {
  let sumOfNumbers = 0;

  for (var i = 0; i < numbers.length; i++) {
    sumOfNumbers += numbers[i];
  }

  return sumOfNumbers;
}

var numbers = [5, 10, 15, 20, 25];
var sumOfNumbers = sum(numbers);
console.log(sumOfNumbers);

//Uppgift 4
function countCharacter(testString, letter) {
  var count = 0;

  for (var i = 0; i < testString.length; i++) {
    if (testString.charAt(i) === letter) {
      count += 1;
    }
  }

  return count;
}

console.log(countCharacter("Jane Doe", "e")); // => 2

//Uppgift 5
function palindrome(str) {
  var newString = str.replace(/\W|_/g, "").toLowerCase();

  for (let i = 0; i < newString.length; i++) {
    if (newString[i] !== newString[newString.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(palindrome("sirap - paris")); // skickar tillbaka "true"
console.log(palindrome("lorem ipsum")); // skickar tillbaka "false"

//Uppgift 6
var person = {
  firstname: "Lisa",
  lastname: "Berg Karlmark",
  age: 100,
  family: ["Inger", "Eva", "Zoltan", "Dag", "Gunilla"],
};

//Uppgift 7

var person1 = {
  fullname: "Jane Doe",
  age: 25,
  family: ["John", "Eliza", "Elsie"],
};

function printPerson(person1) {
  return person1;
}

console.log(person1.fullname + ", " + person1.age + ", " + person1.family);

//Uppgift 8

function createBox(height, width) {
  return {
    height: height,
    width: width,
  };
}

var box = createBox(15, 20);

console.log(box.height); // skickar tillbaka 15
console.log(box.width); // skickar tillbaka 20

//Uppgift 9
function Triangle(height, width) {
  return {
    height: height,
    width: width,
    area: function () {
      return (this.height * this.width) / 2;
    },
  };
}

var tri = Triangle(12, 14);
console.log(tri.height); // skickar tillbaka 12
console.log(tri.width); // skickar tillbaka 14
// Observera att vi anropar "area()"
console.log(tri.area()); // skickar tillbaka 84

//Uppgift 10
var testObject1 = {
  width: 15,
  height: 20,
};

function attributes(testObject1) {
  return Object.keys(testObject1);
}

var attrsFromObject1 = attributes(testObject1);
console.log(attrsFromObject1); // skickar tillbaka ["width", "height"]

var testObject2 = {
  a: 1,
  b: 2,
  c: 3,
};

function attributes(testObject2) {
  return Object.keys(testObject2);
}

var attrsFromObject2 = attributes(testObject2);
console.log(attrsFromObject2); // skickar tillbaka ["a", "b", "c"]
