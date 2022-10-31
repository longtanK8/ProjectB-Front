import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./manager_styles.css";
import Table from "react-bootstrap/Table";
import { ReportGmailerrorred } from "@mui/icons-material";
import { textAlign } from "@mui/system";
import {
  AssignRoomToCustomer,
  GetBookingDetails,
  GetRoomsForAssigning,
  UpdateCustomerBooking,
} from "../../services/AdminBookings";
import jwtDecode from "jwt-decode";

var type = "";
var bookingUpdate = {
  reservationNumber: "",
  accountID: "",
  status: "",
  notes: "",
  rooms: "",
};
const ManagerDetailRoom = () => {
  const [background, setBackground] = useState(false);
  const [post, setPosts] = useState({});
  const [load, setLoading] = useState(false);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    const bookingNo = sessionStorage.getItem("bookingNo");

    const loadPost = async (id) => {
      const response = await GetBookingDetails(id);
      if (response.status === 200) {
        setPosts(response.data.data);
        type = response.data.data.cart.cartItems[0].style;
        setLoading(true);
      }
    };
    loadPost(bookingNo);
  }, []);
  const GetAvailableRooms = () => {
    // GetRoomsForAssigning().then((res) => {
    //   if (res.status === 200) {
    //     sessionStorage.setItem("rooms", JSON.stringify(res.data.data));
    //     // window.location = "/admin/detailroom";
    //   }
    // });
  };
  const UpdateBooking = (post) => {
    var account = jwtDecode(sessionStorage.getItem("token"));
    var bid = document.getElementById("bid").value;
    var st = document.getElementById("status").value;
    var note = document.getElementById("note").value;
    var room = document.getElementById("rooms").value;

    post.notes = note;
    post.status = st;
    post.confirmBy = account.accountID;
    if (post.status === "CHECKIN") {
      if (room !== "") {
        AssignRoomToCustomer(bid, room, post).then((res) => {
          if (res.status === 200) {
            alert("You Have Assigned Room Successful");
            window.location = "http://localhost:4000/admin/detailroom";
          }
        });
      } else {
        alert("You should choose a room");
      }
    } else {
      UpdateCustomerBooking(post).then((res) => {
        if (res.status === 200) {
          alert("You Have Updated Successful");
          window.location = "http://localhost:4000/admin/detailroom";
        }
      });
    }
  };
  const AssignRoom = (post) => {
    var status = document.getElementById("status").value;
    if (status === "CHECKIN") {
      alert("Customer in CheckIn State");
      setFlag(true);
    } else {
      setFlag(false);
    }
    if (status === "CHECKOUT") {
      alert("Customer in CheckOut State");
    }
  };
  if (load) {
    return (
      <div className="booking-content">
        <div className="table-container">
          <h2 className="manager-title-content">Booking Detail</h2>
          <Table striped bordered className="booking-table">
            <thead className="booking-detail-head">
              <tr>
                <td
                  scope="col"
                  colSpan={1}
                  className="detail-title"
                  id="book-id"
                >
                  Booking ID:
                </td>
                <td scope="col" colSpan={3}>
                  {post.reservationNumber}
                </td>
              </tr>
            </thead>
            <tbody className="booking-detail-body">
              <tr>
                <td colSpan={4} className="detail-title">
                  Booking Detail:
                </td>
              </tr>
              <tr>
                <th>Customer Name</th>
                <td>{post.client.firstName + " " + post.client.lastName}</td>
                <th>Phone Number</th>
                <td>{post.client.phoneNumber}</td>
              </tr>

              <tr>
                <th>Check in Date</th>
                <td>{post.checkIn}</td>
                <th>Check out Date</th>
                <td>{post.checkOut}</td>
              </tr>

              <tr>
                <td colSpan={4} className="detail-title">
                  Room Detail:
                </td>
              </tr>
              <tr>
                <th>Room Type</th>
                <td>{post.cart.cartItems[0].style}</td>
                <th>Room Price</th>
                <td>{post.cart.cartItems[0].roomPrice}</td>
              </tr>
              <tr>
                <th>Max Adult</th>
                <td>{post.cart.cartItems[0].maxAdult}</td>
                <th>Max Child</th>
                <td>{post.cart.cartItems[0].maxChild}</td>
              </tr>
              <tr>
                <th>Room Services</th>
                <td>
                  {post.cart.cartItems[0].airCondition ? "Air Condition" : ""}
                </td>
                <th>Booking Date</th>
                <td>{post.createdAt}</td>
              </tr>
              <tr>
                <th>Discount</th>
                <td>
                  {post.discountCode !== ""
                    ? "NOT APPLIED YET"
                    : post.discountCode}
                </td>
                <th>Total Payment</th>
                <td>{post.cart.totalPayment}</td>
              </tr>
              <tr>
                <td colSpan={4} className="detail-title">
                  Admin Remarks:
                </td>
              </tr>
              <tr>
                <th>Order Final Status</th>
                <td>{post.status}</td>
                <th>Admin remarks</th>
                <td>
                  {post.confirmBy !== "" ? "NOT CONFIRMED YET" : post.confirmBy}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="row">
          <div className="invoice-btn-container" style={{ width: "100%" }}>
            <button
              className="btn btn-primary invoice-btn"
              onClick={() => {
                setBackground(true);
              }}
            >
              Take Action
            </button>
          </div>
        </div>
        {background && (
          <div className="action-form-black">
            <div className="action-form">
              <div className="action-form-container">
                <h2 style={{ fontWeight: "bold", textAlign: "center" }}>
                  Take action
                </h2>
                <div>
                  <input
                    style={{ display: "none" }}
                    type="text"
                    name="bid"
                    id="bid"
                    defaultValue={post.reservationNumber}
                  />
                  <input
                    style={{ display: "none" }}
                    type="text"
                    name="cid"
                    id="cid"
                    defaultValue={post.createdBy}
                  />
                  <div className="form-lable-left">
                    <label htmlFor="remark">Note</label>
                  </div>
                  <textarea
                    className="form-control"
                    id="note"
                    name="note"
                    rows={5}
                    value={post.notes}
                    style={{
                      marginLeft: "20% !important",
                      marginBottom: "10px",
                    }}
                    defaultValue={""}
                  />
                  <label htmlFor="status">Status</label>{" "}
                  <select
                    className="mdb-select md-form"
                    id="status"
                    name="status"
                    style={{ marginLeft: "12px" }}
                    onChange={AssignRoom}
                  >
                    <option value={""}>Choose Status</option>
                    {post.status === "REQUESTED" && (
                      <option value={"CONFIRMED"}>Confirmed</option>
                    )}
                    {post.status === "REQUESTED" && (
                      <option value={"CANCELED"}>Canceled</option>
                    )}
                    {post.status === "CONFIRMED" && (
                      <option value={"CHECKIN"}>CheckIn</option>
                    )}
                    {post.status === "CONFIRMED" && (
                      <option value={"CANCELED"}>Canceled</option>
                    )}
                    {post.status === "CHECKIN" && (
                      <option value={"CHECKOUT"}>CheckOut</option>
                    )}
                    {post.status === "CHECKIN" &&
                      post.status === "REQUESTED" && (
                        <option value={"CANCELED"}>Canceled</option>
                      )}
                    {post.status === "CANCELED" && <option value={""}></option>}
                  </select>
                  <select
                    className="mdb-select md-form"
                    id="rooms"
                    name="rooms"
                    style={{ marginLeft: "12px" }}
                    onChange={AssignRoom}
                  >
                    <option value={""}>Choose Room</option>
                    {flag ? <RoomSelection /> : ""}
                  </select>
                  <div className=" take-action-button">
                    <button
                      type="submit"
                      className="btn btn-secondary taking-action-button "
                      style={{ width: "40%" }}
                      onClick={() => {
                        UpdateBooking(post);
                      }}
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary close-button"
                      onClick={() => {
                        setBackground(false);
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  return null;
};
function RoomSelection() {
  const rooms = JSON.parse(sessionStorage.getItem("rooms"));
  const selectItem = rooms.map((val) => {
    if (val.style === type) {
      return (
        <>
          <option value={val.roomNumber}>{val.roomNumber}</option>
        </>
      );
    }
  });

  return selectItem;
}
export default ManagerDetailRoom;
