# React Basics

React is a JS library for building user interfaces. It adds complexity, however for complex apps it makes development easier.

## What are components

---

components are reusable and reactive blocks of JSX which contain HTML, CSS and Javascript that allow us to separate concerns. Component usage often looks like custom HTML elements that take in custom developer defined attributes.

## Declarative approach

---

You the developer, create the desired target/end states(s) and React figures out the javascript DOM instructions

## Creating a app (NodeJS needed)

use create-react-app tool to create a new react project

```shell
npx create-react-app [app-name-placeholder]
```

replace [app-name-placeholder] with whatever your app is called or the current dir.

create-react-app gives us a ready to go development environment where you have a development server ready to start.

once you have created your project `cd` in the directory and start it with `npm start`

### looking at the project

`src/` folder:

- where components are stored

`public/`

- file that are exposed to the public web
- it also holds the index.html that is where the react app latches onto (div#root)

## JSX

---

Javascript XML

Developed by react is used to store HTML, CSS and Javascript in a single file, this file also contains the state of the component that will be rendered the the DOM. This is part of the declarative approach as opposed to the imperative approach.

## Component Tree

---

All new components branch off of the `<App />` component to crete a component tree

- `<App />`
  - `<Header />`
  - `<Tasks />`
    - `<Task />`
    - `<Task />`
    - `<Task />`

NB: Component Names are title cased eg: `ExpenseItem`

## Component Return Statement

---

You must only have one root element returned per Component.

## Props

---

Props are used to pass data to a component through attributes on a component

```jsx
function SimpleComponent(props) {
  return <div>Name: {props.name}</div>;
}

export default SimpleComponent;
```

```jsx
const username = "Callum";
<SimpleComponent name={username}></SimpleComponent>;
```

## Splitting Components

Every component should be focussed on one core task and they combine to create a bigger more complex user interface, each component should be small and manageable in order to keep a separation of concerns and keep you components maintainable and understandable.
