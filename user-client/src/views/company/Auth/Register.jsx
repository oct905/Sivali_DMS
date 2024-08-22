import fill from "../../../assets/home-fill.svg";

const CompanyRegister = () => {
  return (
    <div className="auth-container">
      <div className="auth-main">
        <img className="w-1/2 max-h-full" src={fill} alt="" />
        <div className=" w-1/2 bg-white my-5 rounded-md flex flex-col items-center">
          <span className="font-bold m-3">Sign Up for Company</span>
          <form className="p-5 w-full h-full flex flex-col gap-5" action="">
            <div className="flex w-full h-5/6 gap-5">
              <div className="w-1/2 h-full flex flex-col justify-between">
                <div className="flex flex-col">
                  <span>Full Name</span>
                  <input className="input-box" type="text" />
                </div>

                <div className="flex flex-col">
                  <span>Email</span>
                  <input className="input-box" type="text" />
                </div>

                <div className="flex flex-col">
                  <span>Phone Number</span>
                  <input className="input-box" type="number" />
                </div>

                <div className="flex flex-col">
                  <span>Password</span>
                  <input className="input-box" type="password" />
                </div>

                <div className="flex flex-col">
                  <span>Re-Password</span>
                  <input className="input-box" type="password" />
                </div>
              </div>
              <div className="w-1/2 h-full flex flex-col justify-between">
                <div className="flex flex-col">
                  <span>Name Company</span>
                  <input className="input-box" type="text" />
                </div>

                <div className="flex flex-col">
                  <span>Industry</span>
                  <select className="input-dropdown" name="" id="">
                    <option value="" selected disabled>
                      Select
                    </option>
                    <option value="">
                      Agrikultural / Perkebunan / Peternakan Unggas / Perikanan
                    </option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <span>Position</span>
                  <input className="input-box" type="text" />
                </div>

                <div className="flex flex-col">
                  <span>Company Size</span>
                  <select className="input-dropdown" name="" id="">
                    <option value="" selected disabled>
                      Select
                    </option>
                    <option value="">{"< 50 Pegawai"}</option>
                    <option value="">{"51 - 100 Pegawai"}</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <span>Phone Company</span>
                  <input className="input-box" type="number" />
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

export default CompanyRegister;
