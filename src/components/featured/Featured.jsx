import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { useEffect, useState } from "react";
import { BookingStatistic, ChartStatistic } from "../../services/AdminDataStatistic";

var aimedProfit = 10000000;
const Featured = () => {
  const [sales, setSale] = useState({});
  const [income, setIncome] = useState({});
  const [month,setMonth] = useState(new Date().getMonth());
  useEffect(() => {
    const loadPost = async () => {
      const res3 = await BookingStatistic();
      setSale(res3.data.data);
      const res = await ChartStatistic();
      setIncome(res.data.data);
    };
    loadPost();
  }, []);
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar
            value={(sales[0] / aimedProfit) * 100}
            text={Math.round((sales[0] * 100) / aimedProfit) + "%"}
            strokeWidth={5}
          />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">${sales[0]?.toLocaleString()}</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            {sales[0] < aimedProfit ? (
              <div className="itemResult negative">
                <KeyboardArrowDownIcon fontSize="small" />
                <div className="resultAmount">${sales[0]?.toLocaleString()}</div>
              </div>
            ) : (
              <div className="itemResult positive">
                <KeyboardArrowDownIcon fontSize="small" />
                <div className="resultAmount">
                  $
                  {aimedProfit > sales[0]
                    ? (aimedProfit - sales[0])?.toLocaleString()
                    : (sales[0] - aimedProfit)?.toLocaleString() }
                </div>
              </div>
            )}
          </div>
          <div className="item">
            <div className="itemTitle">Current Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">{income[month]?.toLocaleString()}</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">{income[month-1]?.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
