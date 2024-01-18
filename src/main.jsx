import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import appStore from "./redux/appStore.js";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <App />
  </Provider>
);
