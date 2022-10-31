import React, { useEffect, useState } from "react";
import "./home/Home.scss";
import Chart from "./chart/Chart";
import Featured from "./featured/Featured";
import Widget from "./widget/Widget";
import {
  BookingStatistic,
  CounterBookings,
  CounterUsers,
} from "../services/AdminDataStatistic";

function Manager_Dashboard() {
  const [users, setUsers] = useState(0);
  const [bookings, setBookings] = useState(0);
  const [sales, setSale] = useState({});
  useEffect(() => {
    const loadPost = async () => {
      const res1 = await CounterUsers();
      const res2 = await CounterBookings();
      const res3 = await BookingStatistic();
      setUsers(res1.data.data);
      setBookings(res2.data.data);
      setSale(res3.data.data);
    };
    loadPost();
  }, []);
  return (
    <div className="home">
      <div className="homeContainer">
        <div className="widgets">
          <Widget
            type="user"
            counter={users}
            trend={Math.round((users * users) / (Math.random(users - 2) + 2))}
          />
          <Widget
            type="booking"
            counter={bookings}
            trend={Math.round(
              (users * bookings) / (Math.random(users - 2) + 2)
            )}
          />
          <Widget
            type="earning"
            counter={sales[0]?.toLocaleString()}
            trend={
              sales[1] !== 0 ? Math.round((sales[0] * 100) / sales[1]) / 100 : 0
            }
          />
          <Widget
            type="income"
            counter={(sales[0] + sales[1])?.toLocaleString()}
            trend={
              sales[0] === 0 || sales[1] === 0
                ? 0
                : Math.round((sales[1] * 100) / sales[0] / 100)
            }
          />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
      </div>
    </div>
  );
}

export default Manager_Dashboard;
