import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const LineChartComponent = ({ data }) => (
  <LineChart width={600} height={300} data={data}>
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Line type="monotone" dataKey="value" stroke="#8884d8" />
  </LineChart>
);

export default LineChartComponent;