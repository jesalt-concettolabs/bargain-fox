import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./reducers/store";
import { UserContextProvider } from "./context/UserContext";
import Loading from "./components/Loading/Loading";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <UserContextProvider>
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
      </UserContextProvider>
    </Provider>
  </React.StrictMode>
);
