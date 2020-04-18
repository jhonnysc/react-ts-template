import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import Routes from "./routes";
import configureStore from "./store/configureStore";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
