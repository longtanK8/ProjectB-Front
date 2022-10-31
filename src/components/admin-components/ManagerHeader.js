import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./manager_styles.css";
import { Form } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import jwtDecode from "jwt-decode";

const ManagerHeader = () => {
  let decode = jwtDecode(sessionStorage.getItem("token"));
  const username = decode.username;

  return (
    <div className="header-container">
      <div className="narbar">
        <Row>
          <Col className="sidebar-button">
            <i className="bx bx-menu sidebarBtn">{<FaBars />}</i>{" "}
            <span class="dashboard">Home</span>
          </Col>
          <Col className="search-box">
            <Form.Control
              type="text"
              placeholder="Search..."
              id="manager-search"
              name="manager_search"
              style={{ width: "100%" }}
            />
          </Col>
          <Col className="profile-details">
            <p>Hello, {username}</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default ManagerHeader;

// sidebarBtn.onclick = function() {
//     let sidebar = document.querySelector(".sidebar");
//     let sidebarBtn = document.querySelector(".sidebarBtn");
//     sidebar.classList.toggle("active");

//     if (sidebar.classList.contains("active")) {
//         sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
//     } else
//         sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
// }
