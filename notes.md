# React

- The library for web and native **user interfaces**
  - ui is the point of human computer interaction
- **component based** (reusable ui elements)
- **declarative** (you tell react what you want and react will take care of the DOM manipulation) react update component when state changes

- **react component is a function or class** which optionally accepts inputs called props and returns a react element which describes what should appear on the screen

```js
function App() {
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}
```

- react element return **jsx** (javascript XML) which is html like syntax in javascript(syntax extension to javascript)
- react use to build **SPA** (single page application)

- created by facebook engineer jordan walke and open sourced
- released in 2013
- 205k github start (large community)

### React app using cdn

- create a folder and add index.html file
- add react and react-dom cdn

```js
 <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
></script>
<script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

- add a div with id root in index.html

```js
<div id="root"></div>
```

- add a script tag in index.html

#### using react without jsx

```js
<script>
  const element = React.createElement("h1", {}, "Hello web using react.js");
  const domNode = document.getElementById("root"); const root =
  ReactDOM.createRoot(domNode); root.render(element)
</script>
```

- open index.html in browser and your react app is running.

- styling in react

```js
const style = {
  color: "red",
  fontSize: "2rem",
};
const element = React.createElement(
  "h1",
  { style },
  "Hello web using react.js"
);
// or
const element = React.createElement(
  "h1",
  { style: { color: "red", fontSize: "2rem" }, className: "heading" },
  "Hello web using react.js"
);
```

- render multiple element using react fragment

```js
const app = React.createElement(React.Fragment, null, element1, element2);
const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);
root.render(app);
```

#### using react with JSX

- till this point we are not using jsx syntax , using jsx make our code more readable.

- but problem is browser does not understand jsx syntax so we need to convert jsx to javascript.

- to convert jsx to javascript we need to use babel.

- Babel is a toolchain(complier) that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

- we have to add babel cdn in index.html

```js
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.21.4/babel.min.js"
  integrity="sha512-FneB6sFwq3OQG08dlVoj9iDn0XZG68wD9yg80ofbMCCzW8BioIgsAwSciFaVjM77PdsKdvz3kt/5MKwd+KVGDw=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>
```

- add type="text/babel" in script tag and converting code into jsx

```jsx
const Component1 = () => {
  return (
    <h1 style={{ color: "yellow", fontSize: "2rem" }}>
      Hello web using react.js
    </h1>
  );
};

const Component2 = () => {
  return (
    <h1 style={{ color: "purple", fontSize: "1.5rem" }} className="para1">
      react is javascript library to build user interfaces
    </h1>
  );
};

const App = () => {
  return (
    <>
      <Component1 />
      <Component2 />
    </>
  );
};
const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);
root.render(<App />);
```

- notice that we are using react fragment in jsx that is denoted by <> </> or <React.Fragment></React.Fragment>

- name of component should be in PascalCase(name of component should start with capital letter).

- other thing to notice is that we are using camelCase in jsx for example style={{ color: "yellow", fontSize: "2rem" }} and className="para1"
