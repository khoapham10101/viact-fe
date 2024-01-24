import { Outlet } from "react-router-dom";

import GlobalStyles from "./styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Outlet />
    </div>
  );
}

export default App;
