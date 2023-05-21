import React from 'react'; //library itself
import ReactDOM from 'react-dom/client'; //glue bw react elements and DOM
import './index.css'; 
import App from './component/App/index.js'; //app.js
import registerServiceWorker from './registerServiceWorker';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();

// const getCurrentDate = () => {
//   const date = new Date();
//   return date.toDateString();
// } //JSX in react using {}
// const greeting = <h1>Hello World!Current Date: {getCurrentDate()}</h1>;
// const greeting = React.createElement('h1', {}, 'Hello World'); //second arg is prop
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( 
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// ); //</BrowserRouter> is a fully functional component over a simple variable like greeting

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
