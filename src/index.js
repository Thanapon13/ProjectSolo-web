import React from "react";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AuthContextProvider, { AuthContext } from "./contexts/AuthContext";
import LoadingContextProvider from "./contexts/LoadingContext";
import BasketContextProvider from "./contexts/basKetContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <LoadingContextProvider>
      <BasketContextProvider>
        <App />
      </BasketContextProvider>
    </LoadingContextProvider>
  </AuthContextProvider>
);

reportWebVitals();
