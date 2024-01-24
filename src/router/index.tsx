import App from "App";
import { PATH } from "constants/path";
import BlankLayout from "layouts/BlankLayout";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/Register";
import { RouteObject } from "react-router-dom";

export const routesConfig: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <BlankLayout />,
        children: [
          {
            path: PATH.login,
            element: <LoginPage />,
          },
          {
            path: PATH.register,
            element: <RegisterPage />,
          },
        ],
      },
    ],
  },
];
