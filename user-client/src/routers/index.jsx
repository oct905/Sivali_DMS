import { createBrowserRouter, redirect } from "react-router-dom";
import CompanyLogin from "../views/company/Auth/Login";
import CompanyRegister from "../views/company/Auth/Register";
import LoginBaseLayout from "../views/company/Auth/LoginBaseLayout";
import BaseLayout from "../views/company/BaseLayout";
import CompanyDashboard from "../views/company/Dashboard";
import HomePage from "../views/Home";

const url = "http://localhost:3000";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    element: <LoginBaseLayout />,
    loader: () => {
      if (localStorage.token) {
        return redirect("/");
      }
      return null;
    },
    children: [
      {
        path: "/FormSignUpClient",
        element: <CompanyRegister url={url} />,
      },
      {
        path: "/FormLoginClient",
        element: <CompanyLogin url={url} />,
      },
    ],
  },
  {
    element: <BaseLayout />,
    loader: () => {
      if (!localStorage.token) {
        return redirect("/FormLoginClient");
      }
      return null;
    },
    children: [
      {
        path: "/DashboardClient",
        element: <CompanyDashboard url={url} />,
      },
    ],
  },
]);

export default router;
