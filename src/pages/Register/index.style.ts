import { css } from "@emotion/react";

export const RegisterPageStyle = {
  self: css`
    /* Your styles here */
  `,
  registerAuth: css({
    background: "url(https://dev.viact.net/auth-bg.256b7710.png),#0b454f",
    backgroundSize: "cover",
    backgroundPosition: "50%",
    overflowX: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
  registerContainer: css({
    display: "flex",
    minHeight: "100vh",
    justifyContent: "center",
  }),
  registerContainerBox: css({
    display: "flex",
    padding: "10px",
    alignItems: "center",
    justifyContent: "center",

    "@media (min-width: 600px)": {
      padding: "0",
    },
  }),
  registerPaper: css({
    padding: "30px 0 0",
    width: "100%",
    margin: "10px",
    borderRadius: "20px",
    "@media (min-width: 600px)": {
      padding: "30px",
      margin: "30px",
    },
    "@media (min-width: 1280px)": {
      width: "1000px",
    },
  }),
  registerLeftContent: css({
    borderRight: "none",
    "@media (min-width: 960px)": {
      borderRight: "1px solid #EBEBEB",
    },
  }),
  registerLogoContent: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
  registerLogo: css({
    width: "200px",
    "@media (min-width:600px)": {
      width: "auto",
    },
  }),
  registerLogoText: css({
    color: "#EB5757",
    fontSize: "12px",
    marginLeft: "5px",
    "@media (min-width:600px)": {
      fontSize: "16px",
    },
  }),
  listSuggestion: css({
    paddingLeft: "10px",
    li: {
      color: "#4B4C4C",
      fontSize: "14px",
      marginBottom: "20px",
      "@media (min-width: 600px)": {
        fontSize: "16px",
        marginBottom: "15px",
      },
      ":last-child": {
        marginBottom: "0",
      },
    },
    "@media (min-width: 600px)": {
      paddingLeft: "30px",
    },
    "@media (min-width: 1280px)": {
      paddingLeft: "0",
    },
  }),
  formField: css({
    padding: "0 20px 20px",
    ".item": {
      marginBottom: "12px",
      ".phone-input": {
        width: "100%",
        height: "53.28px",
      },
      ".special-label": {
        left: "8px",
        color: "#898989",
        fontSize: "11px",
        "&.label-active": {
          color: "#EB5757",
        },
      },
      ".phone-search .phone-search-box": {
        width: "95%",
        height: "40px",
        marginLeft: "0",
      },
      ".phone-input:focus": {
        boxShadow: "0 0 0 1px #EB5757",
        borderColor: "#EB5757",
      },
    },
    "@media (min-width: 600px)": {
      paddingTop: "20px",
    },
  }),
  registerSubmitBtn: css({
    color: "white",
    height: "48px",
    fontWeight: "700",
    marginBottom: "12px",
    marginTop: "20px",
  }),
  termAndConditionsContent: css({
    width: "100%",
    textAlign: "center",
    marginBottom: "20px",
    padding: "0 30px",
    "@media (min-width: 960px)": {
      padding: "0 70px",
    },
    p: {
      fontSize: "12px",
    },
  }),
  popupComponent: css({
    background: "transparent",
    boxShadow: "none",
  }),
};

export default RegisterPageStyle;
