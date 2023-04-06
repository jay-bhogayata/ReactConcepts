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

```js
<script>
  const element = React.createElement("h1", {}, "Hello web using react.js");
  const domNode = document.getElementById("root"); const root =
  ReactDOM.createRoot(domNode); root.render(element)
</script>
```

- open index.html in browser and your react app is running.
