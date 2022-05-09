import jwtDecode from "jwt-decode";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { VerifyPersonal } from "../services/AccountService";
import Footer from "./Footer";

export default function Verify() {
  const [cookie, setCookie, removeCookie] = useCookies([
    "data",
    "personal",
    "token",
    "expire",
  ]);
  const [values, setValues] = useState({
    code: "",
    times: 0,
  });
  var i = 0;
  const verifyCode = jwtDecode(cookie.token).code.code;
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleForm = (event) => {
    event.preventDefault();
    console.log(values.code + " " + verifyCode);
    if (values.code === verifyCode) {
      sendData();
    } else {
      ++i;
      setValues({ times: i });
    }
  };
  const sendData = () => {
    let personalInformation = cookie.personal;
    VerifyPersonal(personalInformation, values.times)
      .then((res) => {
        alert("Successfully");
        removeCookie("token");
        removeCookie("expire");
        removeCookie("email");
        removeCookie("personal");
        goToPage();
      })
      .catch((error) => {
        if (error.response) {
          alert("response error");
        } else if (error.request) {
          console.log("error in request " + error.request);
        } else if (error.message) {
          console.log("error in message " + error.message);
        }
      });
  };
  const goToPage = () => {
    window.location.href = "/index";
  };
  return (
    <div className="signup-main">
      <main>
        <div className="signup" id="signup-id">
          <div className="container" style={{ padding: "30px" }}>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
              <div className="container h-100">
                <div
                  className="row d-flex justify-content-center align-items-center h-100"
                  style={{ padding: "50px" }}
                >
                  <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                    <div className="card" style={{ borderRadius: "15px" }}>
                      <div className="card-body p-5">
                        <h3 className="text-uppercase text-center mb-3">
                          Verify Your Information
                        </h3>
                        <form>
                          <div className="row mb-4">
                            <div className="col">
                              <div className="form-outline">
                                <input
                                  type="text"
                                  id="code"
                                  name="code"
                                  className="form-control"
                                  value={values.code}
                                  onChange={handleChange}
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form6Example1"
                                >
                                  Enter Your Code
                                </label>
                              </div>
                            </div>
                            <button
                              type="submit"
                              className="btn btn-primary btn-block mb-4"
                              onClick={handleForm}
                            >
                              Continue
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
