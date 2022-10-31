import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./manager_styles.css";
import { Form } from "react-bootstrap";
import { isValidate, ValidationSignIn } from "../Validation";
import { Login } from "../../services/AdminAccount";
import { toast } from "react-toastify";

const ManagerLogin = (props) => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleForm = (event) => {
    event.preventDefault();
    setErrors(ValidationSignIn(values));
    if (isValidate()) {
      Login(values)
        .then((res) => {
          if (res.status === 200) {
            let token = res.data.data;
            if (token === "") {
              toast.error("USER NOT ALLOWED");
              props.setLogged(false);
            }
            sessionStorage.setItem("token", res.data.data);
            props.setLogged(true);
          } else {
            alert("ACCOUNT INVALID");
          }
        })
        .catch(function (error) {
          alert("Your Username And Password Invalid!");
        });
    }
  };

  return (
    <div className="manager-login-main">
      <main>
        <div className="manager-login" id="manager-login-id">
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
                          Manager Login
                        </h3>
                        <form>
                          <Form.Group>
                            <Form.Label
                              className="form-label"
                              htmlFor="manager-login-username"
                            >
                              Username
                            </Form.Label>
                            <Form.Control
                              type="text"
                              id="manager-login-username"
                              name="username"
                              value={values.username}
                              onChange={handleChange}
                              className="form-control form-control-lg"
                            />
                            {errors.username && (
                              <p className="error">{errors.username}</p>
                            )}
                          </Form.Group>
                          <Form.Group className="form-outline mb-3">
                            <Form.Label
                              className="form-label"
                              htmlFor="manager-login-password"
                            >
                              Password
                            </Form.Label>
                            <Form.Control
                              type="password"
                              id="manager-login-password"
                              name="password"
                              value={values.password}
                              onChange={handleChange}
                              className="form-control form-control-lg"
                            />
                            {errors.password && (
                              <p className="error">{errors.password}</p>
                            )}
                          </Form.Group>
                          <Form.Group className="d-flex justify-content-center">
                            <button
                              type="submit"
                              onClick={handleForm}
                              className="btn btn-success btn-block btn-lg text-body"
                            >
                              Login
                            </button>
                          </Form.Group>
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
    </div>
  );
};

export default ManagerLogin;
