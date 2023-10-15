import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { store } from "./app/store";
import { Provider } from "react-redux";
import axios from "axios";
const instance = axios.create();
// these interseptors will run for every request
instance.interceptors.request.use((request) => {
  // Runs for every request
  // console.log(request);
  // req.header.Authorization = "TOKEN..."  if we do like this then we will add the authorization header for every req we are making
  // from our web app to the API
  return request; // we need to do this if we do this then only we will send the request.
});

instance.interceptors.request.use(
  (response) => {
    // Handle successful responses here
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      // Handle 401 unauthorized errors here
      // For example, you can redirect the user to a login page
      console.log("Unauthorized error: Redirecting to login page");
    }
    return Promise.reject(error);
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
