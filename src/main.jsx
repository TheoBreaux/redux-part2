import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user.jsx";
import themeReducer from "./features/theme.jsx";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
