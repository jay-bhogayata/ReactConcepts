- State is work like memory of component that persist between renders.

- Problem with local variables :

  - local variables are not persistent between renders.
  - changes in local variables are not reflected in the UI bcz component is not re-rendered.

- useSate provide this two things

  - state variable that persist data between renders.
  - state state setter function that trigger re-renders the component.

```jsx
const [state, setState] = useState(initialState);
```

- initialState can be any type of data like string, number, array, object, etc.

- Hooks are special functions that are only available while React is rendering They let you “hook into” different React features.

- we can use hook only at the top level of the function component. we can not use it inside the loop, condition, nested function.

- state is isolated and private (if we are rendering same component at 2 place they both have their own state)
