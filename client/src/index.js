import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react";
import store from "./store/ReduxStore";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import {theme} from './theme'


ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);


