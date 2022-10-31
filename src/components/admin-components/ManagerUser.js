import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./manager_styles.css";
import { Form, Table, Button } from "react-bootstrap";
import * as Icon from "react-icons/fa";
import ReactLoading from "react-loading";

import {
  AddAccountAPI,
  DeleteAccountAPI,
  GetAccountAPI,
  GetListAccount,
  UpdateAccountAPI,
} from "../../services/AdminAccount";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

const ManagerUser = () => {
  var decode = jwtDecode(sessionStorage.getItem("token"));

  const [background, setBackground] = useState(false);
  const [type, setType] = useState(false);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [currentAccount, setCurrentAccount] = useState({
    accountID: decode.accountID,
    role: decode.role,
  });
  const [account, setAccount] = useState({
    accountID: "",
    username: "",
    password: "",
    status: "",
    createdAt: "",
    type: "",
  });
  let users = [
    {
      accountID: "ACC000187",
      username: "thanhtien123",
      password: "12345678",
      status: "ACTIVE",
      createdAt: "08-05-2022 10-34-41",
      type: "ROLE_MEMBER",
    },
  ];
  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      const response = await GetListAccount(currentAccount.accountID);
      if (response.status === 200) {
        setPosts(response.data.data);
      } else {
        setLoading(false);
      }
    };
    loadPost();
  }, []);
  users = posts;

  const DeleteAccount = (id) => {
    sendDeleteServiceRequest(id);
  };
  const UpdateAccount = async (id) => {
    setBackground(true);
    const response = await GetAccountAPI(id);
    if (response.status === 200) {
      setAccount(response.data.data);
    }
  };

  const sendAddAccountRequest = async () => {
    const response = await AddAccountAPI(account);
    if (response.status === 200) {
      toast.success("You add new Service Successfully");
      console.log(response);
      window.location = "http://localhost:4000/admin/user";
    } else {
      toast.error("Your action failed");
    }
    // setBackground(false);
  };
  const sendUpdateAccountRequest = async () => {
    const response = await UpdateAccountAPI(account.accountID, account);
    console.log(response);
    if (response.status === 200) {
      alert("Update Successfully");
      setDefault();
      window.location = "http://localhost:4000/admin/user";
    } else {
      alert("Update Failed");
    }
    setBackground(false);
  };
  const sendDeleteServiceRequest = async (id) => {
    const response = await DeleteAccountAPI(id);
    if (response.status === 200) {
      alert("Delete Successfully");
      window.location = "http://localhost:4000/admin/user";
    } else {
      alert("Delete Failed");
    }
  };
  const HandleForm = () => {
    if (type) {
      sendAddAccountRequest();
    } else {
      sendUpdateAccountRequest();
    }
  };
  const handleChange = (event) => {
    setAccount({
      ...account,
      [event.target.name]: event.target.value,
    });
  };
  const setDefault = () => {
    setAccount({
      accountID: "",
      username: "",
      password: "",
      status: "",
      createdAt: "",
      type: "",
    });
  };
  let index = 0;
  return (
    <div className="user-container">
      <h2 className="manager-title-content">
        User Management
        {currentAccount.role === "ROLE_MANAGER" && (
          <Button
            className="btn-add"
            onClick={() => {
              setBackground(true);
              setType(true);
            }}
          >
            {<Icon.FaPlus />}
          </Button>
        )}
      </h2>
      {loading ? (
        <Table striped bordered className="service-table">
          <thead className="service-header">
            <tr>
              <th>Order Number</th>
              <th>Username</th>
              <th>Type</th>
              <th>Status</th>
              <th>Create Date</th>
              <th>Action</th>
            </tr>
          </thead>
          {users.map((val, key) => {
            return (
              <tbody className="service-body">
                <tr key={val.accountID}>
                  <td className="medium-td">{++index}</td>
                  <td className="medium-td">{val.username}</td>
                  <td className="small-td">{val.type}</td>
                  <td className="medium-td">{val.status}</td>
                  <td className="medium-td">{val.createdAt}</td>
                  <td className="button_container">
                    <Button
                      className="btn-update"
                      variant="warning"
                      onClick={() => {
                        UpdateAccount(val.accountID);
                      }}
                    >
                      Update
                    </Button>
                    {currentAccount.role === "ROLE_MANAGER" && (
                      <Button
                        className="btn-delete"
                        variant="danger"
                        onClick={() => {
                          DeleteAccount(val.accountID);
                        }}
                      >
                        Delete
                      </Button>
                    )}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      ) : (
        <ReactLoading
          type={"spinningBubbles"}
          color={"#64e8df"}
          height={"25%"}
          width={"25%"}
        />
      )}
      {background && (
        <div className="user-form-black">
          <div className="user-form">
            <div className="user-form-container">
              <h2 style={{ fontWeight: "bold", textAlign: "center" }}>
                {type ? "Add User" : "Update User"}
              </h2>
              <Form>
                <Form.Group className="mb-3 form-group" hidden>
                  <Form.Label className="form-label">Account ID:</Form.Label>
                  <Form.Control
                    className="account-id-control"
                    type="text"
                    name="accountId"
                    onChange={handleChange}
                    value={account.accountID}
                  />
                </Form.Group>
                <Form.Group className="mb-3 form-group" controlId="username">
                  <Form.Label className="form-label">Username:</Form.Label>
                  <Form.Control
                    className="username-control"
                    type="text"
                    disabled={
                      currentAccount.role === "ROLE_MANAGER" ? false : true
                    }
                    name="username"
                    onChange={handleChange}
                    value={account.username}
                  />
                </Form.Group>
                <Form.Group className="mb-3 form-group" controlId="password">
                  <Form.Label className="form-label">Password:</Form.Label>
                  <Form.Control
                    className="password-control"
                    type={
                      currentAccount.role === "ROLE_MANAGER"
                        ? "text"
                        : "password"
                    }
                    disabled={
                      currentAccount.role === "ROLE_MANAGER" ? false : true
                    }
                    name="password"
                    onChange={handleChange}
                    value={account.password}
                  />
                </Form.Group>
                <Form.Group className="mb-3 form-group" controlId="type">
                  <Form.Label className="form-label">
                    Type of account:
                  </Form.Label>
                  <Form.Select
                    aria-label="service-type"
                    name="type"
                    onChange={handleChange}
                    value={account.type}
                  >
                    <option>Open account type</option>
                    {currentAccount.role === "ROLE_ADMIN" && (
                      <option value="ROLE_MANAGER">ROLE_MANAGER</option>
                    )}
                    {currentAccount.role === "ROLE_MANAGER" && (
                      <option value="ROLE_RECEPTIONIST">
                        ROLE_RECEPTIONIST
                      </option>
                    )}
                    {currentAccount.role === "ROLE_RECEPTIONIST" ||
                      (currentAccount.role === "ROLE_MANAGER" && (
                        <option value="ROLE_MEMBER">ROLE_MEMBER</option>
                      ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 form-group" controlId="status">
                  <Form.Label className="form-label">Status:</Form.Label>
                  <Form.Select
                    aria-label="service-type"
                    name="status"
                    onChange={handleChange}
                    value={account.status}
                  >
                    <option>Open account status</option>
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="CANCELED">CANCELED</option>
                    <option value="CLOSED">CLOSED</option>
                    <option value="BLACKLISTED">BLACKLISTED</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 form-group" controlId="create-day">
                  <Form.Label className="form-label">Create Date:</Form.Label>
                  <Form.Control
                    className="create-day-control"
                    type="date"
                    name="createdAt"
                    disabled={true}
                    onChange={handleChange}
                    value={account.createdAt}
                  />
                </Form.Group>
                <div>
                  <button
                    type="submit"
                    className="btn btn-secondary action-button"
                    onClick={HandleForm}
                  >
                    {type ? "Add" : "Update"}
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary close-button"
                    onClick={() => {
                      setBackground(false);
                      setType(false);
                      setDefault();
                    }}
                  >
                    Close
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ManagerUser;
