import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./manager_styles.css";
import Manager_Dashboard from "../Manager_Dashboard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ManagerHeader from "./ManagerHeader";

const ManagerHomepage = () => {
  let token = sessionStorage.getItem("token");
  if (token !== "") {
    toast.success("Login Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <div className="container-home">
      {/* <ManagerHeader /> */}
      <Manager_Dashboard />
    </div>
  );
};
export default ManagerHomepage;
