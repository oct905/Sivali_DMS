import { useNavigate } from "react-router-dom";
import fill from "../../../assets/home-fill.svg";
import { loginCompany } from "../../../services/authService";
import { useState } from "react";

const CompanyLogin = ({ url }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto mt-10 flex justify-between items-center">
        <div className="w-1/2">
          <form
            className="bg-white p-8 rounded shadow-md"
            onSubmit={(e) =>
              loginCompany(e, { email, password, url, navigate })
            }>
            <h2 className="text-2xl font-bold mb-6">Sign In for Company</h2>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border rounded"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded">
              SIGN IN
            </button>
            <p className="text-xs mt-4 text-center text-gray-500">
              By signing in to your account, you agree to our Terms of service
              and consent to our Cookie policy.
            </p>
            <div className="mt-4 text-center">
              <a href="#" className="text-blue-600">
                Not a member? Create an account
              </a>
            </div>
            <div className="mt-2 text-center">
              <a href="#" className="text-blue-600">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
        <div className="w-1/2 pl-10">
          <img src={fill} alt="Login" className="w-full" />
          <img src={fill} alt="Get it on Google Play" className="mt-4 h-16" />
        </div>
      </main>
    </div>
  );
};

export default CompanyLogin;
