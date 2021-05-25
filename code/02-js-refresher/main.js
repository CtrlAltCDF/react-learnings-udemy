//
// let and const
//

// let works the same as var
let myName = "Callum";
console.log(myName); //Callum

myName = "Damien";
console.log(myName); // Damien

// const for constant variable
const myName = "Callum";
console.log(myName); // Callum

myName = "Damien"; // Error
console.log(myName); // Callum

//
// Arrow Functions
//

// the old way
function printMyName(name) {
  console.log(name);
}
printMyName("Callum");

// the new way
const printMyNameArrow = (name) => {
  console.log(`hey there ${name}`);
};
printMyNameArrow("Callum");

// you can omit the brackets around the name if you are only passing one parameter to the function body
// const oneParam = name => {
//   return name;
// };

// if there are no parameters you need a set of empty brackets
const noParams = () => {
  return "got no args";
};

// a function body can be a return
const multiply = (number) => number * 2;

//
// Importing a module
//

// import the default export from a file
import person from "./person";

// the person variable can change to whatever you want when importing due toi the fact that we are importing the default export.
import homie from "./person";

// import and named export
// the baseData has to be the same because we are referencing the names variable from the file
import { baseData } from "./utils";

// if we really wanted to change the named export, we can use an alias
import { baseData as base } from "./utils";

// you can also import all named variables from a file
// NB: the alias "as utils" is not necessary
import * as utils from "./utils";
utils.clean();

//
// Classes
//
class Human {
  constructor() {
    this.gender = "male";
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super(); // this will execute the parent constructor when the current constructor is executed
    this.name = "Callum";
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();

//
// Spread operator
//

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

const person = {
  name: "Callum",
};

const newPerson = {
  ...person,
  gender: "male",
};

//
// Rest operator
//

const filter = (...args) => {
  return args.filter((el) => el % 2 == 0);
};
console.log(filter(1, 3, 5, 7, 9, 10, 12, 14));

//
// Destructuring
//

// array destructuring
const numbers = [1, 2, 3];
const [num1, num2] = numbers;
console.log(num1, num2);

// object destructuring
const { username } = { username: "Callum", online: false };
// console.log(username);
