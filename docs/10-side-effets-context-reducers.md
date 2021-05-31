late an input

- controlled components: internal state is controlled by react

# Effects and side effects

effects/side effects side effects are the "other" things that are happening in your website, where react renders the component bases on state a side effect would for example fire off a HTTP request. An effect is not responsible (directly) to bring something onto the screen i.e sending requests, dealing with errors.

Simply: a side effect/effect is everything that happens outside a components rendering.

# useEffect

- run code in response to something
- needs a list of dependencies to "watch"
- if a dependency changes, the code in the function is run
- `useEffect` always runs once, after render
- you usually add all variables that the effect is working with as a dependency (in the array)
  - however this is with in reason, don't as state change functions
  - don't local API's eg `fetch()` or `localStorage`

_"So long story short: You must add all "things" you use in your effect function if those "things" could change because your component (or some parent component) re-rendered. That's why variables or state defined in component functions, props or functions defined in component functions have to be added as dependencies!"_

- cleanup function id a returned function from the effect, it runs before each effect call and on component dismount. note that the cleanup will not run on the first effect call
- useEffect dependencies look at the attributes of an object, so make sure you use object destructuring to ensure that you are running useEffect only when the attributes you want are changing. ALSO react is fussy a will complain if you pass this `[object.someAttr]` this is why you have to use destructuring

# useReducer

alternative for use state

- use for bundled state
- use for state update that depend on other state
- use to avoid state replying on other state
- useEffect requires a full object, use object destructuring to get around this (alias assignment)

```jsx
// use effect
const { isValid: isEmailValid } = emailState; // alias assignment
const { isValid: isPasswordValid } = passwordState;

useEffect(() => {
  const timeout = setTimeout(() => {
    console.log("CALL TO REVALIDATE!!!");
    setFormIsValid(isPasswordValid && isEmailValid);
  }, 500);

  return () => {
    clearTimeout(timeout);
  };
}, [isEmailValid, isPasswordValid]);
```

- this should only be used where you really need the efficiency
- this may be more useful when using some props in the useEffect

# when to use useReducer

when you are struggling to manage state snapshots and calling multiple state updates at the same time.

- if you need more power in your state management
  - reducers get the latest state
  - the reducer function allows for a nice bit of destructuring of your code

# when to use useState

- this is your goto state management
- great for independent pieces of state/data

NOTE: There is no clear rule, dont use `useReducer` for everything

# ContextAPI

needs 2 things

- consumer
  - via useContext hook
  - via context.Consumer
- provider
  - sets init state
  - if no provider is provided init state must be provided in the creation of the consumer
