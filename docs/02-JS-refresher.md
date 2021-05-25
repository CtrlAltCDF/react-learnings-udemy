## const and let

---

```javascript
let // the new var, use it for variables only

const // only use for constants
```

## Arrow Functions

---

### Older ways to define functions in JS

```javascript
var myFunc = function () {
  // body here
};

function myFunc() {
  // body here
}
```

### Arrow functions are always stored in const/let functions

```javascript
const myFunc = () => {
  // the `this` keyword will stay in the context at runtime
  // body here
};
```

## Modules are used split code up among multiple files

---

see sample code for more

## Classes

---

classes are a next gen java feature, classes are blueprints for JS objects
they have the following features:

- properties
- methods
- constructors
- inheritance

see sample code for more

### ES7 classes

ES7 classes allow you to:

- add properties to the class body without the constructor
- add arrow function as properties to the class body

```javascript
class Person {
    const name = "Person A";
    const getName = () => {
        return this.name;
    }
}
```

Note: ES7 classes are new at this stage, some editors will throw errors, also keep in mind that constructors can be implicit.

## Spread and Rest Operators

---

Spread operator: used to split up array elements or object properties

```javascript
const newArray = [...oldArr, 1, 2];
const newObject = { ...oldObject, newProp: 5 };
```

Rest operator: used to merge a list of function arguments into an array

```javascript
const persons = (...args) => {
  return args.sort();
};
```

## Destructuring

---

Destructuring allows you to pullout single variables from an object and store them as variables

```javascript
// array destructuring
const [a, b] = ["Callum", "Fleming"];
const { name } = { name: "Callum", gender: "male" };
```

## Reference and Primitive types

---

```javascript
// primitive types number, bool, string
const num1 = 1;
// num2 is a copy of num1
const num2 = num1;

// objects and arrays are reference types
const person = {
  name: "Callum",
};

// this is a reference not a copy
const secondPerson = person;

// this is the same for arrays

// to create a copy use the spread operator
const newPerson = { ...person };
```

## JS Array Functions

---

Not really next-gen JavaScript, but also important: JavaScript array functions like map() , filter() , reduce() etc.

You'll see me use them quite a bit since a lot of React concepts rely on working with arrays (in immutable ways).

The following page gives a good overview over the various methods you can use on the array prototype - feel free to click through them and refresh your knowledge as required:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

Particularly important in this course are:

map() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

find() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

findIndex() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

filter() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

reduce() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b

concat() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b

slice() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

splice() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
