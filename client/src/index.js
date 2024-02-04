import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { gapi } from "gapi-script";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
gapi.load("client:auth2", () => {
  gapi.client.init({
    clientId:
      "269277454968-1mlg56agjse8p6k6aomovsl4l79lirhl.apps.googleusercontent.com",
    plugin_name: "chat",
  });
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
