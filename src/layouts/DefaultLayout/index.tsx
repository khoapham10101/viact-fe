/** @jsxImportSource @emotion/react */

import Footer from "components/Footer";
import Header from "components/Header";
import { Outlet } from "react-router-dom";

import { DefaultLayoutStyle } from "./index.style";

const DefaultLayout = () => {
  return (
    <div css={DefaultLayoutStyle.self}>
      <Header />
      <main css={DefaultLayoutStyle.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
