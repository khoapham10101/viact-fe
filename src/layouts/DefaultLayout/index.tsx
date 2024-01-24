/** @jsxImportSource @emotion/react */

import { Outlet } from "react-router-dom";

import { DefaultLayoutStyle } from "./index.style";

const DefaultLayout = () => {
  return (
    <div css={DefaultLayoutStyle.self}>
      <header>Header</header>
      <main css={DefaultLayoutStyle.main}>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default DefaultLayout;
