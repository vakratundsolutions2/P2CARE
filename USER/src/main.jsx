import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import "./assets/js/jquery-3.7.0.min.js";
import "./assets/js/script.js";

import { Provider } from "react-redux";

import reduxStore from "./app/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={reduxStore}>
    <App />
  </Provider>
);
