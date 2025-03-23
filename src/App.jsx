import "./App.css";
import WelcomePage from "./Components/WelcomePage";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Outlet />
      {/* <WelcomePage /> */}
      {/* <Login/> */}
      {/* <CreateAccount/> */}
      {/* <AccountSetting/> */}
    </>
  );
}

export default App;
