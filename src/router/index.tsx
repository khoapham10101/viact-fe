import App from "App";
import { PATH } from "constants/path";
import BlankLayout from "layouts/BlankLayout";
import DefaultLayout from "layouts/DefaultLayout";
import ForgotPasswordPage from "pages/ForgotPassword";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/Register";
import ResetPassword from "pages/ResetPassword";
import { RouteObject } from "react-router-dom";

import ProtectedRoute from "./protectedRoute";

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
          {
            path: PATH.forgotPassword,
            element: <ForgotPasswordPage />,
          },
          {
            path: PATH.resetPassword,
            element: <ResetPassword />,
          },
        ],
      },
      {
        element: <DefaultLayout />,
        children: [
          {
            path: PATH.home,
            element: (
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            ),
          },
        ],
      },
    ],
  },
];
