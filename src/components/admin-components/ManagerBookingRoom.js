import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./manager_styles.css";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import ManagerDetailRoom from "./ManagerDetailRoom";
import {
  GetAllBookings,
  GetCustomerInformation,
  GetRoomsForAssigning,
} from "../../services/AdminBookings";

const ManagerBookingRoom = () => {
  const [post, setPosts] = useState({});
  const [load, setLoading] = useState(false);

  useEffect(() => {
    const loadPost = async () => {
      const response = await GetAllBookings();
      if (response.status === 200) {
        setPosts(response.data.data);
        setLoading(true);
      }
    };

    loadPost();
  }, []);

  const GoDetails = (id) => {
    sessionStorage.setItem("bookingNo", id);
  };
  const GetAvailableRooms = () => {
    GetRoomsForAssigning().then((res) => {
      if (res.status === 200) {
        sessionStorage.setItem("rooms", JSON.stringify(res.data.data));
      }
    });
  };
  var index = 0;
  if (load) {
    return (
      <div className="booking-content">
        <div className="table-container">
          <h2 className="manager-title-content">All Booking Room</h2>
          <Table striped bordered className="booking-table">
            <thead className="service-header">
              <tr>
                <th>S.No</th>
                <th>Booking Number</th>
                <th>Customer Name</th>
                <th>Email</th>
                <th>Mobile Number</th>
                <th>Booking Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            {post.map((val) => {
              if (val !== null) {
                return (
                  <tbody className="service-body">
                    <tr>
                      <td className="small-td">{++index}</td>
                      <td className="medium-td">{val.reservationNumber}</td>
                      <td className="large-td">
                        {val.client.firstName + " " + val.client.lastName}
                      </td>
                      <td className="large-td">{val.client.email}</td>
                      <td className="medium-td">{val.client.phoneNumber}</td>
                      <td className="medium-td">
                        {val.checkIn + "-" + val.checkOut}
                      </td>
                      <td className="small-td">{val.status}</td>
                      <td class="more-detail small-td">
                        <Link
                          to={"/admin/detailroom"}
                          onClick={() => {
                            GoDetails(val.reservationNumber);
                            GetAvailableRooms();
                          }}
                        >
                          Details
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                );
              }
            })}
          </Table>
        </div>
      </div>
    );
  }
  return null;
};

export default ManagerBookingRoom;
