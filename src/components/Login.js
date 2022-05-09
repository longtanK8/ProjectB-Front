import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import "./styles.css";
import { isValidate, ValidationSignIn } from "./Validation";
import { Link } from "react-router-dom";
import { ClientLogin } from "../services/AccountService";
import { useCookies } from "react-cookie";

const Login = () => {
  const [values, setValues] = useState({
    login_username: "",
    login_password: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const [cookie, setCookie] = useCookies([]);
  const [errors, setErrors] = useState({});

  const handleForm = (event) => {
    event.preventDefault();
    setErrors(ValidationSignIn(values));
    if (isValidate) {
      let user = {
        username: values.login_username,
        password: values.login_password,
      };
      ClientLogin(user)
        .then((res) => {
          var fetchData = res.data;
          console.log(fetchData.toke);
          setCookie("token", fetchData.token);
          setCookie("expire", fetchData.expire);
          goToPage();
        })
        .catch((error) => {
          if (error.response) {
            console.log("error in response ");
          } else if (error.request) {
            console.log("error in request " + error.request);
          } else if (error.message) {
            console.log("error in message " + error.message);
          }
        });
    }
  };
  const goToPage = () => {
    window.location.href = "/index";
  };

  return (
    <div className="login-main">
      <main>
        <div className="login" id="login-id">
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
                          Login
                        </h3>
                        <form>
                          <div className="form-outline mb-3">
                            <label
                              className="form-label"
                              htmlFor="login-username"
                            >
                              Username
                            </label>
                            <input
                              type="text"
                              id="login-username"
                              name="login_username"
                              value={values.login_username}
                              onChange={handleChange}
                              className="form-control form-control-lg"
                            />
                            {errors.login_username && (
                              <p className="error">{errors.login_username}</p>
                            )}
                          </div>
                          <div className="form-outline mb-3">
                            <label
                              className="form-label"
                              htmlFor="login-password"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              id="login-password"
                              name="login_password"
                              value={values.login_password}
                              onChange={handleChange}
                              className="form-control form-control-lg"
                            />
                            {errors.login_password && (
                              <p className="error">{errors.login_password}</p>
                            )}
                          </div>
                          <div className="d-flex justify-content-center">
                            <button
                              type="submit"
                              onClick={handleForm}
                              className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                            >
                              Login
                            </button>
                          </div>
                          <p className="text-center text-muted mt-3 mb-0">
                            If you do not have an account. Please
                            <Link to="/signup" className="fw-bold text-body">
                              <u> Sign Up</u>
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

export default Login;
