import { css } from "@emotion/react";
import AuthBg from "assets/images/auth-bg.png";
import { media } from "styles/breakpoints";
import { theme } from "styles/theme";

export const ResetPasswordStyle = {
  self: css`
    background: url(${AuthBg}), #0b454f;
    background-size: cover;
    background-position: 50%;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
  `,

  heading: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  logo: css`
    ${media.sm} {
      width: 200px;
    }
  `,

  headingTitle: css`
    color: ${theme.colors.red};
    font-size: 16px;
    margin-left: 5px;
    font-weight: 400;
    ${media.sm} {
      font-size: 12px;
    }
  `,

  title: css`
    font-size: ${theme.fontSize[16]};
  `,
  subTitle: css`
    color: ${theme.colors.red};
    font-size: ${theme.fontSize[20]};
    font-weight: bold;
    letter-spacing: 0.00938em;
  `,

  form: css`
    width: 100%;
  `,
};
