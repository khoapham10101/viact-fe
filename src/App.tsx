import { ThemeProvider } from "@emotion/react";
import { Outlet } from "react-router-dom";

import GlobalStyles from "./styles/global";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;
