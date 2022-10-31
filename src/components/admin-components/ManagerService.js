import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./manager_styles.css";
import { Form, Table, Button } from "react-bootstrap";
import * as Icon from "react-icons/fa";
import ReactLoading from "react-loading";
import { toast } from "react-toastify";

import {
  AddService,
  DeleteServiceAPI,
  GetAllServices,
  GetService,
  UpdateServiceAPI,
} from "../../services/AdminFacilities";

const ManagerService = () => {
  const [background, setBackground] = useState(false);
  const [type, setType] = useState(false);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [service, setService] = useState({
    serviceID: 0,
    name: "",
    price: 0.0,
    type: "",
    description: "",
    image: "",
  });
  let services = [];

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      const response = await GetAllServices();
      if (response.status === 200) {
        setPosts(response.data.data);
      } else {
        setLoading(false);
      }
    };
    loadPost();
  }, []);
  services = posts;

  const DeleteService = (id) => {
    sendDeleteServiceRequest(id);
  };
  const UpdateService = async (id) => {
    setBackground(true);
    console.log(id);
    const response = await GetService(id);
    if (response.status === 200) {
      setService(response.data.data);
    }
  };

  const sendAddServiceRequest = async () => {
    const response = await AddService(service);
    if (response.status === 200) {
      toast.success("You add new Service Successfully");
      window.location = "http://localhost:4000/admin/service";
    } else {
      toast.error("Your action failed");
    }
    setBackground(false);
  };
  const sendUpdateServiceRequest = async () => {
    const response = await UpdateServiceAPI(service.serviceID, service);
    console.log(response);
    if (response.status === 200) {
      alert("Update Successfully");
      setServiceDefault();
      window.location = "http://localhost:4000/admin/service";
    } else {
      alert("Update Failed");
    }
    setBackground(false);
  };
  const sendDeleteServiceRequest = async (id) => {
    const response = await DeleteServiceAPI(id);
    if (response.status === 200) {
      alert("Delete Successfully");
      window.location = "http://localhost:4000/admin/service";
    } else {
      alert("Delete Failed");
    }
  };
  const HandleForm = () => {
    if (type) {
      sendAddServiceRequest();
    } else {
      sendUpdateServiceRequest();
    }
  };
  const handleChange = (event) => {
    setService({
      ...service,
      [event.target.name]: event.target.value,
    });
  };
  const setServiceDefault = () => {
    setService({
      serviceID: 0,
      name: "",
      price: 0.0,
      type: "",
      description: "",
      image: "",
    });
  };
  let index = 0;
  return (
    <div className="service-container">
      <h2 className="manager-title-content">
        Service Management{" "}
        <Button
          className="btn-add"
          onClick={() => {
            setBackground(true);
            setType(true);
          }}
        >
          {<Icon.FaPlus />}
        </Button>
      </h2>
      {loading ? (
        <Table striped bordered className="service-table">
          <thead className="service-header">
            <tr>
              <th>Order Number</th>
              <th>Name</th>
              <th>Price</th>
              <th>Type</th>
              <th>Description</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody className="service-body">
            {services.map((val) => {
              return (
                <tr key={val.serviceID}>
                  <td className="small-td">{++index}</td>
                  <td>{val.name}</td>
                  <td className="small-td">
                    {Math.round(val.price * 100) / 100}
                  </td>
                  <td className="small-td">{val.type}</td>
                  <td>{val.description}</td>
                  <td>{val.image}</td>
                  <td className="button_container">
                    <Button
                      className="btn-update"
                      variant="warning"
                      onClick={() => UpdateService(val.serviceID)}
                    >
                      Update
                    </Button>
                    <Button
                      className=" btn-delete"
                      variant="danger"
                      onClick={() => DeleteService(val.serviceID)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}{" "}
          </tbody>
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
        <div className="service-form-black">
          <div className="service-form">
            <div className="service-form-container">
              <h2 style={{ fontWeight: "bold", textAlign: "center" }}>
                {type ? "Add Service" : "Update Service"}
              </h2>
              <Form>
                <Form.Group
                  className="mb-3 form-group"
                  controlId="service-id"
                  hidden
                >
                  <Form.Label className="form-label">Service ID:</Form.Label>
                  <Form.Control
                    className="service-id-control"
                    type="text"
                    name="serviceID"
                    onChange={handleChange}
                    value={service.serviceID}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 form-group"
                  controlId="service-name"
                >
                  <Form.Label className="form-label">Service Name:</Form.Label>
                  <Form.Control
                    className="service-name-control"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={service.name}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 form-group"
                  controlId="service-price"
                >
                  <Form.Label className="form-label">Service Price:</Form.Label>
                  <Form.Control
                    className="service-price"
                    type="text"
                    name="price"
                    onChange={handleChange}
                    value={service.price}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 form-group"
                  controlId="service-type"
                >
                  <Form.Label className="form-label">Service Type:</Form.Label>
                  <Form.Select
                    aria-label="service-type"
                    name="type"
                    onChange={handleChange}
                    value={service.type}
                  >
                    <option>Open serive type</option>
                    <option value="TRANSFER">TRANSFER</option>
                    <option value="FOOD">FOOD</option>
                    <option value="BEVERAGE">BEVERAGE</option>
                    <option value="OTHERS">OTHERS</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group
                  className="mb-3 form-group"
                  controlId="service-image"
                >
                  <Form.Label className="form-labe">Service Image:</Form.Label>
                  <Form.Control
                    className="service-image-control"
                    type="file"
                    name="image"
                    onChange={handleChange}
                    value={type ? service.image : ""}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 form-group"
                  controlId="service-description"
                >
                  <Form.Label className="form-labe">
                    Service Description:
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    type="text"
                    name="description"
                    onChange={handleChange}
                    value={service.description}
                  />
                </Form.Group>
                <div>
                  <button
                    type="button"
                    className="btn btn-secondary action-button"
                    onClick={HandleForm}
                  >
                    {type ? "Add" : "Update"}
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary close-button"
                    onClick={() => {
                      setServiceDefault();
                      setBackground(false);
                      setType(false);
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
export default ManagerService;
