import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import React, { useState } from "react";
import { isValidate, ValidationSignUp } from "./Validation";
import "./styles.css";
import { Link } from "react-router-dom";
import { SignUpService } from "../services/AccountService";
import { useCookies } from "react-cookie";

const Signup = () => {
  const [values, setValues] = useState({
    signup_username: "",
    signup_email: "",
    signup_password: "",
    signup_confirm_password: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const [errors, setErrors] = useState({});
  const [cookies, setCookies] = useCookies(["data", "email"]);

  const handleForm = (event) => {
    event.preventDefault();
    setErrors(ValidationSignUp(values));
    if (isValidate()) {
      let user = {
        username: values.signup_username,
        password: values.signup_password,
      };
      SignUpService(user)
        .then((res) => {
          var personalInfor = res.data;
          setCookies("data", personalInfor.data);
          setCookies("email", values.signup_email);
          goToPage();
        })
        .catch((error) => {
          if (error.response) {
            alert("Your username have existed! Please try again");
          } else if (error.request) {
            console.log("error in request " + error.request);
          } else if (error.message) {
            console.log("error in message " + error.message);
          }
        });
    }
  };
  const goToPage = () => {
    window.location.href = "/personal_info";
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
                          Sign Up
                        </h3>
                        <form>
                          <div class="form-outline mb-3">
                            <label class="form-label" htmlFor="signup-username">
                              Your Username
                            </label>
                            <input
                              type="text"
                              id="signup-username"
                              name="signup_username"
                              value={values.signup_username}
                              class="form-control form-control-lg"
                              onChange={handleChange}
                            />
                            {errors.signup_username && (
                              <p className="error">{errors.signup_username}</p>
                            )}
                          </div>

                          <div class="form-outline mb-3">
                            <label class="form-label" htmlFor="signup-email">
                              Your Email
                            </label>
                            <input
                              type="email"
                              id="signup-email"
                              name="signup_email"
                              value={values.signup_email}
                              class="form-control form-control-lg"
                              onChange={handleChange}
                            />
                            {errors.signup_email && (
                              <p className="error">{errors.signup_email}</p>
                            )}
                          </div>

                          <div class="form-outline mb-3">
                            <label class="form-label" htmlFor="signup-password">
                              Password
                            </label>
                            <input
                              type="password"
                              id="signup-password"
                              name="signup_password"
                              value={values.signup_password}
                              class="form-control form-control-lg"
                              onChange={handleChange}
                            />
                            {errors.signup_password && (
                              <p className="error">{errors.signup_password}</p>
                            )}
                          </div>

                          <div class="form-outline mb-3">
                            <label
                              class="form-label"
                              htmlFor="signup-confirm-password"
                            >
                              Repeat your password
                            </label>
                            <input
                              type="password"
                              id="signup-confirm-password"
                              name="signup_confirm_password"
                              value={values.signup_confirm_password}
                              class="form-control form-control-lg"
                              onChange={handleChange}
                            />
                            {errors.signup_confirm_password && (
                              <p className="error">
                                {errors.signup_confirm_password}
                              </p>
                            )}
                          </div>

                          <div class="d-flex justify-content-center">
                            <button
                              type="submit"
                              onClick={handleForm}
                              class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                            >
                              Register
                            </button>
                          </div>
                          <p class="text-center text-muted mt-3 mb-0">
                            Have already an account?
                            <Link to="/login" class="fw-bold text-body">
                              <u> Login here</u>
                            </Link>
                          </p>
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
};

export default Signup;
