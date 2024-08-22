import { Outlet } from "react-router-dom";
import LoginNavbar from "../../components/LoginNavbar";

const BaseLayout = () => {
  return (
    <div className="base-container">
      <LoginNavbar />
      <Outlet />
    </div>
  );
};

export default BaseLayout;
