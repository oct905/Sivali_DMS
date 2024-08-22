import logo from "../assets/logo-avisha-white.svg";

const LoginNavbar = () => {
  return (
    <nav className="nav-login">
      <div className="nav-login-container">
        <a href="/">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <div className="flex items-center gap-3 p-3 text-sm">
          <span className="text-white text-sm flex gap-2">
            <a href="">Company</a> | <a href="/">Jobseekers</a>
          </span>
          <button className="custom-blue-btn">Sign Up</button>
          <button className="custom-blue-btn">Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default LoginNavbar;
