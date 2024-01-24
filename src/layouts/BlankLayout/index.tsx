/** @jsxImportSource @emotion/react */

import { Outlet } from "react-router-dom";

import { BlankLayoutStyle } from "./index.style";

const BlankLayout = () => {
  return (
    <div css={BlankLayoutStyle.self}>
      <main css={BlankLayoutStyle.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default BlankLayout;
