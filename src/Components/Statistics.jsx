import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Statistics = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <ComposedChart
        width={1000}
        height={400}
        data={data}
        margin={{
          top: 40,
          right: 80,
          bottom: 20,
          left: 50,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis
          dataKey="assignmentName"
          label={{ value: "Pages", position: "insideBottomRight", offset: 0 }}
          scale="band"
        />
        <YAxis label={{ value: "Index", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="marks" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="id" barSize={7} fill="#413ea0" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </ComposedChart>
    </div>
  );
};

export default Statistics;
