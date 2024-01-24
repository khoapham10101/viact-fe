import { Global } from "@emotion/react";

import { reset } from "./reset";
import { variablesCss } from "./variables";

const GlobalStyles = () => {
  return (
    <>
      <Global styles={[reset, variablesCss]} />
    </>
  );
};

export default GlobalStyles;
