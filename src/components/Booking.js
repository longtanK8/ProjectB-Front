import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import * as Icon from "react-bootstrap-icons";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { getRooms } from "../services/FacilitiesService";

class Booking extends React.Component {
  state = {
    items: [],
    DataisLoaded: false,
    rooms: [],
  };

  componentDidMount() {
    getRooms().then((res) => {
      this.setState({
        items: res.data,
        DataisLoaded: true,
      });
    });
  }

  render() {
    const { DataisLoaded, items } = this.state;
    let bookingView = [];
    items.map((items) => {
      bookingView.push(
        <BookingView
          price={items.roomPrice}
          name={items.style}
          adult={items.maxAdult}
          child={items.maxChild}
          descrip={items.description}
        />
      );
    });
    if (!DataisLoaded)
      return (
        <div>
          <div class="loader"></div>
          <h1 style={{ position: "fixed", left: "37%", bottom: "100px" }}>
            {" "}
            Pleses wait some time....{" "}
          </h1>{" "}
        </div>
      );
    return (
      <main>
        <div className="background-image"></div>
        <div className="booking-frame">
          <div className="container">
            <div className="row">
              <div className="col-md-8 book-view">
                <div className="booking-date-picker">
                  <div className="arrive-date">
                    <div className="icon-calendar">
                      <img src={require("../images/calendar.png")} />
                    </div>
                    <div className="main-calendar">
                      <b>Check in: </b>
                      <DatePickerFunction dateType="arrive" />
                    </div>
                  </div>
                  <div className="leave-date">
                    <div className="icon-calendar">
                      <img src={require("../images/calendar.png")} />
                    </div>
                    <div className="main-calendar">
                      <b>Check out: </b>
                      <DatePickerFunction dateType="leave" />
                    </div>
                  </div>
                </div>
                {bookingView}
              </div>
              <div className="col-md-4 book-form">
                <div className="book-form-title">
                  <h4>Your Stay</h4>
                </div>
                <div className="stay-time">
                  <div className="left-stay-time">
                    <b>Check in</b>
                    <p>After 2:00 PM</p>
                  </div>
                  <div className="right-stay-time">
                    <b>Check out</b>
                    <p>Before 12:00 PM</p>
                  </div>
                </div>
                <div className="stay-detail"></div>
                <div className="booking-detail-form">
                  <form action="#">
                    <BookForm />
                    <div className="form-bottom" style={{ display: "none" }}>
                      <hr />
                      <div className="priceForm">
                        <h3>
                          Total:{" "}
                          <span style={{ paddingLeft: "200px" }}>
                            <h3></h3>
                          </span>
                        </h3>
                      </div>
                      <button className="btn" id="submitFormBtn" type="submit">
                        Continue Booking
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
setInterval(() => {
  let head;
  try {
    head = document.getElementsByClassName("book-form")[0];
    if (typeof head !== "undefined") {
      document.addEventListener("scroll", function (e) {
        if (document.documentElement.scrollTop > 445) {
          head.classList.add("fix-form");
        } else {
          head.classList.remove("fix-form");
        }
      });
    }
    clearInterval();
  } catch {}
}, 100);

let arrive = "";
let leave = "";
let tempDate = new Date().getTime();
let arriveFormat;
let leaveFormat;
let differ;
let days = 0;
function DatePickerFunction(props) {
  const [startDate, setStartDate] = useState(new Date());
  switch (props.dateType) {
    case "arrive":
      arrive = startDate;
      tempDate = startDate.getTime();
      arriveFormat = formatDate(startDate);
      break;
    case "leave":
      leave = startDate;
      leaveFormat = formatDate(startDate);
      differ = startDate.getTime() - tempDate;
      break;
    default:
      break;
  }
  // console.log(props.dateType);
  setDetail();
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
}
// input form
function BookForm(props) {
  return (
    <div className="inputForm" style={{ display: "none" }}>
      <input type="text" name="arrive" id="arriveInput" value="" />
      <input type="text" name="leave" id="leaveInput" value="" />
      <input type="text" name="room-type" id="roomInput" value="" />
      <input type="number" name="price" id="priceInput" value="" />
    </div>
  );
}

function setDetail() {
  let arriveList = arrive.toString().split(" ");
  let leaveList = leave.toString().split(" ");
  let first = " ";
  let last = " ";
  days = Math.ceil(differ / (1000 * 3600 * 24));
  for (let i = 0; i < 4; i++) {
    first += arriveList[i] + " ";
    last += leaveList[i] + " ";
  }
  let out = first + " - " + last;
  setTimeout(() => {
    document.getElementsByClassName(
      "stay-detail"
    )[0].innerHTML = `<p>${out}</p>`;
    document.getElementById("arriveInput").value = arriveFormat;
    document.getElementById("leaveInput").value = leaveFormat;
  }, 100);

  console.log(document.getElementsByClassName("stay-detail")[0]);
}

// Format date
function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

function formatDate(date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join("/");
}

// call view
function BookingView(props) {
  return (
    <div className="book-view-container">
      <div className="left-element">
        <div className="image-container">
          <img src={require(`../images/double-bed.jpg`)} alt="single room" />
        </div>
        <div className="short-service">
          <ul>
            <li>
              <Icon.Fan />
              <span> Air Conditioning</span>
            </li>
            <li>
              <Icon.Wifi />
              <span> Free Wifi</span>
            </li>
            <li>
              <Icon.Droplet />
              <span> Bathtub</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-element">
        <div className="room-title">
          <h4>{props.name} room</h4>
        </div>
        <div className="capacity">
          | {props.adult} Adult - {props.child} Children | 10 m<sup>2</sup>
        </div>
        <div className="room-descript">
          <p>{props.descrip}.</p>
          <a href="#">Room Details</a>
        </div>
        <hr />
        <div className="price-container">
          <div className="left-price">
            <h5>Breakfast Included</h5>
            <p>Full breakfast, WiFi, A/C, use of sauna and gym</p>
          </div>
          <div className="right-price">
            <h4>${props.price}</h4>
            <p>Per night</p>
            <p>Include taxes and fees</p>
            <button
              className="btn btn-book"
              onClick={() => bookClick(props.name, props.price)}
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function bookClick(room_type, room_price) {
  let type = document.getElementById("roomInput");
  let price = document.getElementById("priceInput");
  type.value = room_type;
  price.value = room_price;
  let total = room_price * days;
  document.getElementsByClassName("form-bottom")[0].style.display = "block";
  let temp = document.getElementsByClassName("priceForm")[0];
  let priceText = temp.childNodes[0].childNodes;
  priceText[priceText.length - 1].innerText = "$" + total;
}

export default Booking;
