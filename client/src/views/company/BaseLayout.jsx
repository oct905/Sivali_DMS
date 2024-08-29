import { Outlet } from "react-router-dom";
import CompanyNavbar from "../../components/CompanyNavbar";

const BaseLayout = () => {
  return (
    <div className="base-container">
      <CompanyNavbar />
      <Outlet />
    </div>
  );
};

export default BaseLayout;
