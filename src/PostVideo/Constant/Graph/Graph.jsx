import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "A",
    uv: 18,
  },
  {
    name: "B",
    uv: 12,
  },
  {
    name: "C",
    uv: 13,
  },
  {
    name: "D",
    uv: 5,
  },
  {
    name: "E",
    uv: 2,
  },
  {
    name: "F",
    uv: 15,
  },
  {
    name: "G",
    uv: 5,
  },
];
const Graph = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 30,
          right: 20,
          left: 30,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis orientation="right" />
        <XAxis dataKey="name" />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
      <style>
        {`
            .recharts-cartesian-grid-vertical line {
              display: none;
            }
        `}
      </style>
    </ResponsiveContainer>
  );
};

export default Graph;
