import { useNavigate } from "react-router-dom";
import logo from "../assets/avisha-logo-full.svg";
import homeImg from "../assets/HomeImg.svg";
import fill from "../assets/home-fill.svg";
import googlePlay from "../assets/googleplay.svg";

const HomePage = () => {
  const navigate = useNavigate();

  function companyNav() {
    navigate("/FormSignUpClient");
  }

  return (
    <div className="auth-container">
      <div className="auth-main flex">
        <div className="w-1/2 flex items-center justify-center">
          <img className="max-h-full w-full object-contain" src={fill} alt="" />
        </div>
        <div className="w-1/2 h-fit bg-white my-5 rounded-md flex flex-col items-center">
          <span className="font-bold m-3">Sign Up for Company</span>
          <form
            className="p-5 w-full h-full flex flex-col gap-5"
            onSubmit={(e) =>
              registerCompany(e, {
                email,
                password,
                name,
                industry,
                companySize,
                phoneCompany,
                position,
                fullName,
                phoneNumber,
                url,
                navigate,
              })
            }>
            <div className="flex w-full h-5/6 gap-5">
              <div className="w-1/2 h-full flex flex-col justify-between gap-5">
                <div className="flex flex-col">
                  <span>Full Name</span>
                  <input
                    className="input-box"
                    type="text"
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <span>Email</span>
                  <input
                    className="input-box"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <span>Phone Number</span>
                  <input
                    className="input-box"
                    type="number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <span>Password</span>
                  <input
                    className="input-box"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <span>Re-Password</span>
                  <input
                    className="input-box"
                    type="password"
                    onChange={(e) => setRePassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-1/2 h-full flex flex-col justify-between gap-5">
                <div className="flex flex-col">
                  <span>Name Company</span>
                  <input
                    className="input-box"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <span>Industry</span>
                  <select
                    className="input-dropdown"
                    onChange={(e) => setIndustry(e.target.value)}
                    defaultValue=""
                    name="industry"
                    id="">
                    <option value="" disabled>
                      Select ...
                    </option>
                    <option>Agrikultural</option>
                    <option>Perkebunan</option>
                    <option>Peternakan Unggas</option>
                    <option>Perikanan</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <span>Position</span>
                  <input
                    className="input-box"
                    type="text"
                    onChange={(e) => setPosition(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <span>Company Size</span>
                  <select
                    className="input-dropdown"
                    defaultValue=""
                    onChange={(e) => setCompanySize(e.target.value)}>
                    <option value="" disabled>
                      Select
                    </option>
                    <option>{"< 50 Pegawai"}</option>
                    <option>{"51 - 100 Pegawai"}</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <span>Phone Company</span>
                  <input
                    className="input-box"
                    type="number"
                    onChange={(e) => setPhoneCompany(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <input type="submit" className="input-submit" value={"SIGN UP"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
