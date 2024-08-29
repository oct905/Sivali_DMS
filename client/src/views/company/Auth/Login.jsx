import { useNavigate } from "react-router-dom";
import fill from "../../../assets/home-fill.svg";
import { loginCompany } from "../../../services/authService";
import { useState } from "react";

const CompanyLogin = ({ url }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="auth-main min-h-min max-h-fit h-5/6 flex justify-center items-center my-10">
        <div className=" w-1/3 h-2/3 bg-white my-5 rounded-md flex flex-col items-center overflow-auto">
          <span className="font-bold m-3">Sign Up for Company</span>
          <form
            className="p-5 max-h-fit w-full h-4/6 flex flex-col gap-5 justify-evenly"
            onSubmit={(e) =>
              loginCompany(e, {
                email,
                password,
                url,
                navigate,
              })
            }>
            <div>
              <div className="flex flex-col">
                <span>Email</span>
                <input
                  className="input-box"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <span>Password</span>
                <input
                  className="input-box"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <input type="submit" className="input-submit" value={"SIGN UP"} />
            </div>
          </form>
          <div className="text-gray-400 text-xs">
            <p className="text-9 text-mute text-center">
              By signing in to your account, you agree to indeed’s{" "}
              <u>term of service</u> and consent to our <u>cookie policy</u> and{" "}
              <u>privacy policy</u>
            </p>
            <p className="text-10 text-center text-mute mb-0">
              Not a member?{" "}
              <a href="/FormSignupClient">
                <label className="text-blue mb-0">Create an account</label>
              </a>
            </p>
            <a href="/FormLoginClient">
              <p className=" text-center text-mute">Forgot Password?</p>
            </a>
          </div>
        </div>
        <img className="w-1/2 h-full" src={fill} alt="" />
      </div>
    </div>
  );
};

export default CompanyLogin;
