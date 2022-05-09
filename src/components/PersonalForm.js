import { useState } from "react";
import { useCookies } from "react-cookie";
import { PersonalInfoSave } from "../services/AccountService";
import Footer from "./Footer";

export default function PersonalInforForm() {
  const [cookie, setCookie] = useCookies(["data", "email", "token", "expire"]);
  const [values, setValues] = useState({
    accountID: cookie.data.accountID,
    address: "",
    dob: "",
    email: cookie.email,
    firstName: "",
    identificationID: "",
    lastName: "",
    onDate: cookie.data.onDate,
    personalID: cookie.data.personalID,
    phoneNumber: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleForm = (event) => {
    event.preventDefault();
    let personalInformation = {
      personalID: values.personalID,
      accountID: values.accountID,
      firstName: values.firstName,
      lastName: values.lastName,
      dob: values.dob,
      address: values.address,
      email: values.email,
      identificationID: values.identificationID,
      phoneNumber: values.phoneNumber,
      onDate: values.onDate,
    };
    PersonalInfoSave(personalInformation)
      .then((res) => {
        var fetchData = res.data;
        setCookie("personal", personalInformation);
        setCookie("token", fetchData.token);
        setCookie("expire", fetchData.expire);
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
    window.location.href = "/personal_info/verify";
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
                          Personal Information
                        </h3>
                        <form>
                          <div className="row mb-4">
                            <div className="col">
                              <div className="form-outline">
                                <input
                                  type="text"
                                  id="firstName"
                                  name="firstName"
                                  className="form-control"
                                  value={values.firstName}
                                  onChange={handleChange}
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form6Example1"
                                >
                                  First name
                                </label>
                              </div>
                            </div>
                            <div className="col">
                              <div className="form-outline">
                                <input
                                  type="text"
                                  id="lastName"
                                  name="lastName"
                                  className="form-control"
                                  value={values.lastName}
                                  onChange={handleChange}
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form6Example2"
                                >
                                  Last name
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="date"
                              id="dob"
                              name="dob"
                              className="form-control"
                              value={values.dob}
                              onChange={handleChange}
                            />
                            <label
                              className="form-label"
                              htmlFor="form6Example3"
                            >
                              Date of birth
                            </label>
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              id="address"
                              name="address"
                              className="form-control"
                              value={values.address}
                              onChange={handleChange}
                            />
                            <label
                              className="form-label"
                              htmlFor="form6Example4"
                            >
                              Address
                            </label>
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="email"
                              id="identificationID"
                              name="identificationID"
                              className="form-control"
                              value={values.identificationID}
                              onChange={handleChange}
                            />
                            <label
                              className="form-label"
                              htmlFor="form6Example5"
                            >
                              Identification ID
                            </label>
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              id="phoneNumber"
                              name="phoneNumber"
                              className="form-control"
                              value={values.phoneNumber}
                              onChange={handleChange}
                            />
                            <label
                              className="form-label"
                              htmlFor="form6Example6"
                            >
                              Phone
                            </label>
                          </div>

                          <button
                            type="submit"
                            className="btn btn-primary btn-block mb-4"
                            onClick={handleForm}
                          >
                            Continue
                          </button>
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
