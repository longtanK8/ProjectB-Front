import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import { ChartStatistic } from "../../services/AdminDataStatistic";
let array = [];

const Chart = ({ aspect, title }) => {
  const [array, setArray] = useState([]);
  useEffect(() => {
    const loadPost = async () => {
      const res = await ChartStatistic();
      setArray(res.data.data);
    };
    loadPost();
  }, []);
  const data = [
    { name: "January", Total: Math.round(array[0] * 100) / 100 },
    { name: "Febuary", Total: Math.round(array[1] * 100) / 100 },
    { name: "March", Total: Math.round(array[2] * 100) / 100 },
    { name: "April", Total: Math.round(array[3] * 100) / 100 },
    { name: "May", Total: Math.round(array[4] * 100) / 100 },
    { name: "June", Total: Math.round(array[5] * 100) / 100 },
    { name: "July", Total: Math.round(array[6] * 100) / 100 },
    { name: "August", Total: Math.round(array[7] * 100) / 100 },
    { name: "September	", Total: Math.round(array[8] * 100) / 100 },
    { name: "October", Total: Math.round(array[9] * 100) / 100 },
    { name: "November", Total: Math.round(array[10] * 100) / 100 },
    { name: "December", Total: Math.round(array[11] * 100) / 100 },
  ];
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
