// index.js or main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LoginScreen from "./Components/Login.jsx";
import CreateAccount from "./Components/CreateAccount.jsx";
import AccountSetting from "./Components/AccountSettting.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomePage from "./Components/WelcomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    element: <App />,
    children: [
      { path: "login", element: <LoginScreen /> },
      { path: "createA", element: <CreateAccount /> },
      { path: "createA/AS", element: <AccountSetting /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
