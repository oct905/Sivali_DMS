import { useNavigate } from "react-router-dom";
import logo from "../assets/avisha-logo-full.svg";
import fill from "../assets/home-fill.svg";

const HomePage = () => {
  const navigate = useNavigate();

  function companyNav() {
    navigate("/FormSignUpClient");
  }

  return (
    <div className="main">
      <div className="home-nav">
        <img src={logo} alt="" className="bg-white p-3 w-36 rounded-br-2xl" />

        <div className="flex gap-5 pr-10">
          <button onClick={() => companyNav()} className="white-btn">
            Company
          </button>

          <button className="custom-blue-btn">Signup</button>

          <button className="custom-blue-btn">Login</button>
        </div>
      </div>
      <div className="home-container">
        <div className="w-1/3 h-full flex flex-col">
          <span className=" text-3xl font-semibold mb-2">
            I am
            <br />
            looking
            <br />
            for work
          </span>
          <span className="mb-3">create a job seeker account</span>

          <button className="white-btn w-1/3 text-xs p-1 font-medium mb-3">
            START LOOKING FOR JOB
          </button>

          <span className="mb-3 text-xs">
            already have an account?<a href="/">Log in</a>
          </span>

          <span className="text-xs">
            by creating an account you agree to our{" "}
            <span className="underline">term and condition</span> our{" "}
            <span className="underline"> privacy policy </span>
            and our end user
            <span className="underline"> license agreement</span>
          </span>
        </div>

        <img className="w-1/3" src={fill} alt="" />
      </div>
    </div>
  );
};

export default HomePage;
