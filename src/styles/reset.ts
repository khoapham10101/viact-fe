import { css } from "@emotion/react";

export const reset = css`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
  * {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }
  *:not(.non-reset *) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    touch-action: manipulation;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  *::before,
  *::after {
    box-sizing: inherit;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
`;
