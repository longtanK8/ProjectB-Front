import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Routes } from "react-router-dom";
import "./manager_styles.css";
import {
  Dropdown,
  Button,
  Container,
  Row,
  Col,
  Card,
  ButtonGroup,
  Badge,
} from "react-bootstrap";
import * as Icon from "react-icons/fa";
import ManagerHomepage from "./ManagerHomepage";
import ManagerDetailRoom from "./ManagerDetailRoom";
import ManagerBookingRoom from "./ManagerBookingRoom";
import ManagerContact from "./ManagerContact";
import ManagerAbout from "./ManagerAbout";
import ManagerService from "./ManagerService";
import ManagerRoom from "./ManagerRoom";
import ManagerUser from "./ManagerUser";
import ManagerHeader from "./ManagerHeader";
import { CardRoom } from "./ManagerCardRoom";
// import { isTokenExpired } from "../TokenExpire";

const Sidebar = (props) => {
  const [flag, setFlag] = useState(false);
  const logout = () => {
    // props.setLogged(false);
    sessionStorage.clear();
    window.location = "http://localhost:4000/";
  };
  // isTokenExpired();
  const OpenStatus = (val) => {
    if (val) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  };

  return (
    <div>
      <ManagerHeader />
      <div className="sidebar">
        <div className="logo-details">
          <i>{<Icon.FaProductHunt />}</i>{" "}
          <span className="logo_name">Paradise Hotel</span>
        </div>
        <ul className="nav-links">
          <li>
            <Link
              to="/admin/homepage"
              onClick={() => {
                OpenStatus(false);
              }}
            >
              {" "}
              <i>{<Icon.FaHome />}</i> <span className="links_name">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin"
              onClick={() => {
                OpenStatus(true);
              }}
            >
              {" "}
              <i>{<Icon.FaAdjust />}</i>{" "}
              <span className="links_name">Room Status</span>
            </Link>
          </li>

          <li>
            <Link
              to="/admin/service"
              onClick={() => {
                OpenStatus(false);
              }}
            >
              {" "}
              <i>{<Icon.FaServicestack />}</i>{" "}
              <span className="links_name">Service</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/room"
              onClick={() => {
                OpenStatus(false);
              }}
            >
              {" "}
              <i>{<Icon.FaPen />}</i> <span className="links_name">Room</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/about"
              onClick={() => {
                OpenStatus(false);
              }}
            >
              {" "}
              <i>{<Icon.FaPager />}</i> <span className="links_name">Page</span>
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle split id="dropdown-split-basic" />
                <Dropdown.Menu>
                  <Link
                    to="/admin/about"
                    onClick={() => {
                      OpenStatus(false);
                    }}
                  >
                    {" "}
                    <Dropdown.Item href="/admin/about">About Us</Dropdown.Item>
                  </Link>
                  <Link
                    to="/admin/contact"
                    onClick={() => {
                      OpenStatus(false);
                    }}
                  >
                    {" "}
                    <Dropdown.Item href="/admin/contact">Contact</Dropdown.Item>
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/booking"
              onClick={() => {
                OpenStatus(false);
              }}
            >
              {" "}
              <i>{<Icon.FaBook />}</i>{" "}
              <span className="links_name">Booking</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/user"
              onClick={() => {
                OpenStatus(false);
              }}
            >
              {" "}
              <i>{<Icon.FaUserAlt />}</i>{" "}
              <span className="links_name">Users</span>
            </Link>
          </li>
          <li className="log_out" onClick={logout}>
            <Link
              to={"/home"}
              onClick={() => {
                OpenStatus(false);
              }}
            >
              {" "}
              <i>{<Icon.FaArrowLeft />}</i>{" "}
              <span className="links_name">Log out</span>
            </Link>
          </li>
        </ul>
        <div className="function_container">
          <Routes>
            <Route path="/admin" />
            <Route path="/admin/homepage" element={<ManagerHomepage />} />
            <Route path="/admin/service" element={<ManagerService />} />
            <Route path="/admin/room" element={<ManagerRoom />} />
            <Route path="/admin/contact" element={<ManagerContact />} />
            <Route path="/admin/about" element={<ManagerAbout />} />
            <Route path="/admin/booking" element={<ManagerBookingRoom />} />
            <Route path="/admin/user" element={<ManagerUser />} />
            <Route path="/admin/detailroom" element={<ManagerDetailRoom />} />
          </Routes>
        </div>
      </div>
      {flag && (
        <div className="room_management">
          <div className="manager-title-content">
            <h2>Room Status</h2>
          </div>
          <div className="room_management_body">
            <Container>
              <Row>
                <CardRoom />
              </Row>
            </Container>
          </div>
        </div>
      )}
    </div>
  );
};
export default Sidebar;
