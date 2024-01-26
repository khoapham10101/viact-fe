import "react-toastify/dist/ReactToastify.css";

import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import GlobalStyles from "./styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <ToastContainer className="non-reset" />
      <Outlet />
    </div>
  );
}

export default App;
