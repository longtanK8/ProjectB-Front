import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./manager_styles.css";
import { Form, Table, Button } from "react-bootstrap";
import * as Icon from "react-icons/fa";
import {
  AddRoomAPI,
  DeleteRoomAPI,
  GetAllRooms,
  GetAllServices,
  GetRoomAPI,
  UpdateRoomAPI,
} from "../../services/AdminFacilities";
import ReactLoading from "react-loading";
// import { toast } from "react-toastify";

const ManagerRoom = () => {
  const [background, setBackground] = useState(false);
  const [type, setType] = useState(false);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [postServices, setPostServices] = useState([]);
  const [room, setRoom] = useState({
    roomNumber: "",
    style: "",
    status: "",
    airCondition: false,
    wifiEnable: false,
    haveBathTub: false,
    maxChild: 0,
    maxAdult: 0,
    roomArea: 0,
    description: "",
    roomPrice: 0.0,
    smoking: false,
  });

  let rooms = [];

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      const response = await GetAllRooms();
      if (response.status === 200) {
        setPosts(response.data);
      } else {
        setLoading(false);
      }
    };
    loadPost();
  }, []);
  rooms = posts;

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      const response = await GetAllServices();
      if (response.status === 200) {
        setPostServices(response.data);
      } else {
        setLoading(false);
      }
    };
    loadPost();
  }, []);
  const DeleteRoom = (id) => {
    sendDeleteRoomRequest(id);
  };
  const UpdateRoom = async (id) => {
    setBackground(true);
    const response = await GetRoomAPI(id);
    if (response.status === 200) {
      setRoom(response.data.data);
    }
  };

  const sendAddRoomRequest = async () => {
    const response = await AddRoomAPI(room);
    if (response.status === 200) {
      // toast.success("You add new Service Successfully");
      alert("Add New Room Successfully");
      // window.location = "http://localhost:4000/admin/room";
    } else {
      // toast.error("Your action failed");
      alert("Add Failed");
    }
    setBackground(false);
  };
  const sendUpdateServiceRequest = async () => {
    const response = await UpdateRoomAPI(room.roomNumber, room);
    console.log(response);
    if (response.status === 200) {
      alert("Update Successfully");
      setDefault();
      // window.location = "http://localhost:4000/admin/room";
    } else {
      alert("Update Failed");
    }
    setBackground(false);
  };
  const sendDeleteRoomRequest = async (id) => {
    const response = await DeleteRoomAPI(id);
    console.log(id);
    if (response.status === 200 && response.data.status !== "FAILED") {
      alert("Delete Successfully");
      // window.location = "http://localhost:4000/admin/room";
    } else {
      alert("Delete Failed: " + response.data.message);
    }
  };
  const HandleForm = () => {
    if (type) {
      sendAddRoomRequest();
      setBackground(false);
    } else {
      sendUpdateServiceRequest();
    }
    setDefault();
  };
  const handleChange = (event) => {
    setRoom({
      ...room,
      [event.target.name]: event.target.value,
    });
  };
  const setDefault = () => {
    setRoom({
      roomNumber: "",
      style: "",
      status: "",
      airCondition: true,
      wifiEnable: true,
      haveBathTub: true,
      maxChild: 0,
      maxAdult: 0,
      roomArea: 0,
      description: "",
      roomPrice: 0.0,
      smoking: true,
    });
  };
  let index = 0;

  return (
    <div className="room-container">
      <h2 className="manager-title-content">
        Room Management{" "}
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
      {/* {loading ? ( */}
      <Table striped bordered className="room-table">
        <thead className="room-header">
          <tr>
            <th>Order Number</th>
            <th>Type</th>
            <th>Status</th>
            <th>Max Adult</th>
            <th>Max Child</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="room-body">
          {rooms.map((val) => {
            return (
              <tr key={val.roomNumber}>
                <td className="medium-td">{++index}</td>
                <td className="medium-td">{val.style}</td>
                <td className="medium-td">{val.status}</td>
                <td className="medium-td">{val.maxAdult}</td>
                <td className="medium-td">{val.maxChild}</td>
                <td className="medium-td">{val.roomPrice}</td>
                <td className="button_container">
                  <Button
                    className="btn-update"
                    variant="warning"
                    disabled={val.status !== "Available" ? true : false}
                    onClick={() => {
                      UpdateRoom(val.roomNumber);
                    }}
                  >
                    Update
                  </Button>
                  <Button
                    className="btn-delete"
                    variant="danger"
                    disabled={val.status !== "Available" ? true : false}
                    onClick={() => {
                      DeleteRoom(val.roomNumber);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}{" "}
        </tbody>
      </Table>
      {/* ) : ( */}
      {/* <ReactLoading
        type={"spinningBubbles"}
        color={"#64e8df"}
        height={"25%"}
        width={"25%"}
      /> */}
      {/* )} */}
      {background && (
        <div className="room-form-black">
          <div className="room-form">
            <div className="room-form-container">
              <h2 style={{ fontWeight: "bold", textAlign: "center" }}>
                {type ? "Add Room" : "Update Room"}
              </h2>
              <Form>
                <Form.Group className="mb-3 form-group" hidden>
                  <Form.Label className="form-label">Room Number:</Form.Label>
                  <Form.Control
                    className="room-id-control"
                    type="text"
                    name="roomNumber"
                    onChange={handleChange}
                    value={room.roomNumber}
                  />
                </Form.Group>
                <Form.Group className="mb-3 form-group">
                  <Form.Label className="form-label">Type Room:</Form.Label>
                  <Form.Select
                    aria-label="room-type"
                    name="style"
                    onChange={handleChange}
                    value={room.style}
                  >
                    <option>Open Room stype</option>
                    <option value="Deluxe">Deluxe</option>
                    <option value="Junior">Junior</option>
                    <option value="BusinessSuite">Business Suite</option>
                    <option value="Superior">Superior</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 form-group">
                  <Form.Label className="form-label">Room Price:</Form.Label>
                  <Form.Control
                    className="room-price"
                    type="text"
                    min="1.0"
                    name="roomPrice"
                    onChange={handleChange}
                    value={room.roomPrice}
                  />
                </Form.Group>
                <Form.Group className="mb-3 form-group">
                  <Form.Label className="form-label">Room Status:</Form.Label>
                  <Form.Select
                    aria-label="room-status"
                    name="status"
                    onChange={handleChange}
                    value={room.status}
                  >
                    <option>Open Room status</option>
                    <option value="Available">Available</option>
                    <option value="NotAvailable">Not Available</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 form-group">
                  <Form.Label className="form-label">
                    Room Max Adult:
                  </Form.Label>
                  <Form.Control
                    className="room-maxAdult-control"
                    type="number"
                    min={1}
                    step={1}
                    max={5}
                    name="maxAdult"
                    onChange={handleChange}
                    value={room.maxAdult}
                  />
                </Form.Group>
                <Form.Group className="mb-3 form-group">
                  <Form.Label className="form-label">
                    Room Max Child:
                  </Form.Label>
                  <Form.Control
                    className="room-maxChild-control"
                    type="number"
                    min={1}
                    step={1}
                    max={4}
                    name="maxChild"
                    onChange={handleChange}
                    value={room.maxChild}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 form-group"
                  controlId="room-description"
                >
                  <Form.Label className="form-labe">
                    Room Description:
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    type="text"
                    name="description"
                    onChange={handleChange}
                    value={room.description}
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
export default ManagerRoom;
