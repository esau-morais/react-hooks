# React Hooks

![React + Hooks](https://miro.medium.com/max/1000/1*12rLQ2fkPvG76qUF8xH6OQ.png)

## Table of Content

- [Installation](#how-do-i-start)
- [useState](#usestate)
- [useEffect](#useeffect)
- [useContext](#usecontext)
- [useReducer](#usereducer)
- [useCallback](#usecallback)
- [useMemo](#usememo)
- [useRef](#useref)
- [Custom hooks](#custom-hooks)

## Folder structure

```
React-Hooks
│   ...
│
└───src
│   │   App.js
│   │   index.js
│   │
│   └───components
│       │   
│       │   
│       └───(separated hooks folder)
│       │   │
│       │   │
│       │   └───(n examples by folder)
```

## How do I start?

You can interact with the code forking the repository


1. Fork this project

![Forking the project](https://camo.githubusercontent.com/6f03010c651d060f8b7cfc17da7098c1757c4ead/68747470733a2f2f6669727374636f6e747269627574696f6e732e6769746875622e696f2f6173736574732f526561646d652f666f726b2e706e67)

2. Clone the forked repository

    `git clone https://github.com/user/React-Hooks` (if you use `git`)

    or

    `gh repo clone https://github.com/user/React-Hooks` (if you use `gh` cli)

3. Install the dependencies

    `npm install` (if you use `npm`)

    or

    `yarn` (if you use   `yarn`)

4. Start the project

    `npm start` (if you `npm`)

    or

    `yarn start` (if you use `yarn`)

:warning: To make your learning process better, follow these steps:

- See the quick summary of each Hook
- See the examples
- Interact with the code and try different ways/examples

## Hooks rules

:warning: Before you start, you need to always remember these rules when you call a React Hook:

- _"Only call Hooks at the top level"_

  Don't call Hooks inside loops, conditions, or nested functions

- _"Only call Hooks from React functions"_

  Call them from within React functional components and not just any regular JavaScript function

## Most important React Hooks

### useState

#### Quick summary

- The `useState` hook lets you add state to functional components
- In classes, the state is always an object
- With the useState hook, the state doesn't have to be an object
- The `useState` hook returns an array with 2 elements
  - The first element is the current value of the state, and the second is a state setter function
- New state value depends on the previous state value? You can pass a function to setter function
- When dealing with objects or arrays, always make sure to spread your state variable and then call the setter function

To understand better, see the example below or interact with the code forking the project

```js
// 1️⃣  Import useState Hook
// ⚠️  Remember that we are using React v17, so you don't need to import "React" anymore
import { useState } from 'react';

function UseStateExample() {
  // 2️⃣  Declare a new a statement variable and its function
  // The "count" will have a initial value: 0
  const [count, setCount] = useState(0);
  
  return (
    <>
      {/* 3️⃣  Call the statement variable "count"
          And its function that will increase 1 on click
      */}
      <button onClick={() => setCount(count + 1)}>
        Count {count}
      </button>
    </>
  )
}
```

[More about useState Hook](https://reactjs.org/docs/hooks-state.html)

[🔝 Back to Top](#table-of-content)

### useEffect

#### Quick summary

- The `Effect` Hook lets you perform side effects in functional components
- It is a close replacement for `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`

To understand better, see the example below or interact with the code forking the project

```js
// 1️⃣  Import the useEffect and useState Hooks
// ⚠️  Remember that we are using React v17, so you don't need to import "React" anymore
import { useEffect, useState } from 'react';

function UseStateExample() {
  // 2️⃣  Declare a new a statement variable and its function
  // The "count" will have a initial value: 0
  const [count, setCount] = useState(0);
  // 4️⃣  Declare useEffect Hook
  // You can see that it's an arrow function that receives two parameters
  useEffect(() => {
    // Here we perform the side effects
    // After following the 3rd step
    // The website title will be updated when the "count" changes
    document.title = `${count}`;
    // ⚠️  You need to pass the "count" as a dependency
    // Once the  "count" changes every time, we have a side-effect
  }, [count])
  
  return (
    <>
      {/* 3️⃣  call the statement variable "count"
          And its function to increase 1 on click
      */}
      <button onClick={() => setCount(count + 1)}>
        Count {count}
      </button>
    </>
  )
}
```

[More about useEffect Hook](https://reactjs.org/docs/hooks-effect.html)

[🔝 Back to Top](#table-of-content)

### useContext

#### Quick summary

- `Context` provides a way to pass data through the component tree without having to pass props down manually at every level

To understand better, see the example below or interact with the code forking the project

```js
// ⚠️  Remember that we are using React v17, so you don't need to import "React" anymore
// 1️⃣  Import createContext and useContext Hooks
import { createContext, useContext } from 'react';
// To explain better, we'll create a themed button
// So, you'll have a light and dark themes
const themes = {
  light: {
    foreground "#000",
    background: "#eee"
  },
  dark: {
    foreground: "#fff",
    background: "222"
  }
}
```

```js
// 2️⃣  Create a "context" and set a theme
// Here you'll use the createContext Hook
// Hint: Change to the dark mode and see how it works
const ThemeContext = createContext(themes.light)

function ThemedButton() {
  // 3️⃣  Provide the theme context created to be consumed
  // Here you'll use the useContext Hook
  const theme = useContext(ThemeContext);

  return (
    <>
      {/* 4️⃣  Now you can create a styled button with the created themes */}
      <button
        style={{ 
          background: theme.background,
          color: theme.foreground
        }}
      >
        Look at me!!
      </button>
    </>
  )
}
```

[More about useContext Hook](https://reactjs.org/docs/hooks-reference.html#usecontext)

[🔝 Back to Top](#table-of-content)

### useReducer

#### Quick summary

- `useReducer` is a Hook that is used for state management
- It is an alternative to `useState`
- `useReducer` is related to reducer functions

#### useState vs useReducer

| Scenario   |      useState      |  useReducer |
|------------|--------------------|-------------|
| Type of state |  Number, String, Boolean | Object or Array |
| Number of state transitions | One or two | Too many |
| Related state transitions? | No | Yes |
| Business logic | No business logic | Complex business logic |
| Local vs Global | Local | Global |

To understand better, see the example below or interact with the code forking the project

```js
// ⚠️  Remember that we are using React v17, so you don't need to import "React" anymore
// 1️⃣  Import useReducer Hook
import { useReducer } from 'react';
// 2️⃣  Define an initial state
// In this case, we'll call "count"
// The "count" will have an initial value: 0
const initialState = {
  count: 0
}
// 3️⃣  Create a reducer function
// Here there will be two arguments
// The "state" and an "action"
function reducer(state, action) {
  switch (action.type) {
    // Increase 1 to the "count"
    case 'INCREMENT':
      return {
        count: state.count + 1
      }
    // Decrease 1 to the "count"
    case 'DECREMENT':
      return {
        count: state.count - 1
      }
    // Return the default state
    default:
      return state
  }
}
```

```js
function UseReducerExample() {
  // 4️⃣  Access the statemente variable dispatch it
  // Here you'll use useReducer Hook
  // You see that we pass the reducer function and the initial state
  // To a "state" and "dispatch"
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {/* 5️⃣  Pass the statemente variable "count" 
          And its actions to increase and decrease
      */}
      <p>Count {state.count}</p>
      {/* On click, increment 1 
          So, you see that the dispatch specify which action we want
      */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        -
      </button>
    </>
  )
}
```

[More about useReducer Hook](https://reactjs.org/docs/hooks-reference.html#usereducer)

[🔝 Back to Top](#table-of-content)

### useCallback

#### Quick summary

- `useCallback` is a Hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed
- It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders

To understand better, see the example below or interact with the code forking the project

```js
// useCallback/Example/button.js
// ⚠️  Remember that we are using React v17, so you don't need to import "React" anymore

// "handleClick" will have the receive function, like in "onClick"
// "children" will be the type: "Increment age" and "Increment salary"
function Button({ handleClick, children }) {
  console.log('Rendering button ', children);

  return <button onClick={hanldeClick}>{children}</button>
}

// 3️⃣  To prevent be the same event (onClick) be rendered
// You'll use React.memo
export React.memo(Button);
```

```js
// useCallback/Example/counter.js
// ⚠️  Remember that we are using React v17, so you don't need to import "React" anymore

// "text" is the type: "age" and "salary"
// "count" is the counter for each type
function Counter({ text, count }) {
  console.log(`Rendering ${text}`);

  return <>{text} {count}</>
}

// 3️⃣  To prevent be the same event (onClick) render the same result
// You'll use React.memo
export React.memo(Counter);
```

```js
// ⚠️  Remember that we are using React v17, so you don't need to import "React" anymore
// 1️⃣  Import useCallback and useState Hooks
import { useCallback, useState } from 'react';

function UseCallbackExample() {
  // 2️⃣  Declare a new a statement variable and its function
  // The "age" have a initial value: 25
  // And the "salary": 50000
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(5000);
  // 4️⃣  To prevent an event rendered (even if not clicked)
  const incrementAge = useCallback(() => {
    setAge(age + 1)
  }, [age])
  // 4️⃣  To prevent an event be rendered (even if not clicked)
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1)
  }, [salary])

  return (
    <>
      <Counter text="Age" count={age} />
      <Button handleClick={incrementAge}>
        Increment age
      </Button>
      <Counter text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>  
        Increment salary
      </Button>
    </>
  )
}
```

[More about useCallback Hook](https://reactjs.org/docs/hooks-reference.html#usecallback)

[🔝 Back to Top](#table-of-content)

### useMemo

```js
// useMemo/Example/index.js
// ⚠️  Remember that we are using React v17, so you don't need to import "React" anymore
// 1️⃣  Import useMemo and useState Hooks
import { useMemo, useState } from 'react';

function UseMemoExample() {
  // 2️⃣  Declare a new a statement variable and its function
  // Both "counters" will have a initial value: 0
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  // Increment 1 to the "counterOne"
  const incrementOne = () => setCounterOne(counterOne + 1)
  // Increment 1 to the "counterTwo" 
  const incrementTwo = () => setCounterTwo(counterTwo + 1)
  // 4️⃣  To prevent an event be renderred unnecessarily¹
  // You'll need to use useMemo Hook
  const isEven = useMemo(() => {
    let i = 0;
    // Compute an expensive operation¹
    while (i < 2000000000) i++;
    // Return "Even" numbers
    return counterOne % 2 === 0;
  }, [counterOne])

  return (
    <>
      {/* 3️⃣  Call the statemente variable "counterOne" and "counterTwo" 
          Call the function to both "counters" and increment 1
      */}
      <button onClick={incrementOne}>
        Counter One {counterOne}
      </button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button onClick={incrementTwo}>
        Counter Two {counterTwo}
      </button>
    </>
  )
}
```

[More about useMemo Hook](https://reactjs.org/docs/hooks-reference.html#usememo)

[🔝 Back to Top](#table-of-content)

### useRef

To understand better, see the example below or interact with the code forking the project

```js
// ⚠️  Remember that we are using React v17, so you don't need to import "React" anymore
// 1️⃣  Import useRef Hook

function UseRefExample() {
  // 2️⃣  Create a new reference variable
  // That will be connected to the "input"
  // And will have a initial value: null
  const inputRef = useRef(null);
  // On click, focus the input
  const focusOnClick = () => {
    // "current" points to the mounted text "input"
    inputRef.current.focus();
  }

  return (
    <>
      {/* 3️⃣  Call the "ref" property with the reference variable "inputRef" 
          And call the function to render the event
      */}
      <input ref={inputRef} type="text" />
      <button onClick={focusOnClick}>
        Focus the input
      </button>
    </>
  )
}
```

[More about useRef Hook](https://reactjs.org/docs/hooks-reference.html#useref)

[🔝 Back to Top](#table-of-content)

### Custom Hooks

#### Quick summary

- A custom Hook is basically a JavaScript function whose name starts with `use`
- A custom Hook can also call other Hooks if required
- Share logic → Alternative to HOCs and Render Props

To understand better, see the example below or interact with the code forking the project

```js
// hooks/useInput.js
// 1️⃣  Import useState Hook

function useInput(initialValue) {
  // 2️⃣  Declare a new a statement variable and its function
  // "value" will have a initial state: "initialValue"
  const [value, setValue] = useState(initialValue);
  // Reset the input values when submit (onSubmit)
  const reset = () => setValue(initialValue)
  // Get the "value" and, onChange (when the user types), update it
  const bind = {
    value,
    onChange: e => setValue(e.target.value)
  }
  // 3️⃣  To return and use the created functions in any component
  // You'll need to use arrow destructuring
  return [value, bind, reset];
}

export default useInput;
```

```js
// customHooks/Example3/useInput.js
// ⚠️  Remember that we are using React v17, so you don't need to import "React" anymore
// 1️⃣  Import useInput custom Hook
import useInput from '../../../hooks/useInput';

function CustomHooksExample() {
  // 4️⃣  Using arrows destructuring, create a new statement variable
  // Besides that, we have to "bind" and "reset"
  // So create for each statemente variable
  const [firstName, bindFirstName, resetFirstName] = useInput('');
  const [lastName, bindLastName, resetLastName] = useInput('');
  // Alert the "first name" and "last name" when the user submits (onSubmit)
  // And reset it (onSubmit)
  const handleSubmit = e => {
    e.preventDefault();

    alert(`Hello, ${firstName} ${lastName}`);

    resetFirstName();
    resetLastName();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* 5️⃣  As you've seen in the useInput custom Hook,
            The "value" and "onChange" are used there.
            So, you just need to "bind" everything (...)
         */}
        <input type="text" {...bindFirstName} />
        <input type="text" {...bindLastName} />
        <button>Submit</button>
      </form>
    </>
  )
}
```

[More about Custom Hooks](https://reactjs.org/docs/hooks-custom.html)

[🔝 Back to Top](#table-of-content)

---

To see more, access the [ReactJS oficial website](https://reactjs.org) or see the [React Hooks Playlist](https://www.youtube.com/playlist?list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A)

---

[LICENSE](./LICENSE)
