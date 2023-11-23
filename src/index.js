import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* This code is rendering the `App` component inside the HTML element with the ID of `root`. The
`React.StrictMode` component is used to highlight potential problems in the code and is not
necessary for rendering the component. The `ReactDOM.render()` method is responsible for rendering
React components to the DOM. */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
