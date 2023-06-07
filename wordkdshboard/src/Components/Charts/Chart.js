import "../../../node_modules/react-vis/dist/style.css";
import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
} from "react-vis";

const Chart = () => {
  const data = [
    { x: "Mon", y: 10 },
    { x: "Tue", y: 20 },
    { x: "Wed", y: 40 },
    { x: "Thu", y: 10 },
    { x: "Fri", y: 15 },
    { x: "Sat", y: 5 },
    { x: "Sun", y: 30 },
  ];

  return (
    <div style={{ marginTop: "15px" }}>
      <XYPlot height={200} width={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries data={data} color="white" />
        <LineSeries data={data} color="blue" />
        <LineSeries data={data} color="yellow" />
      </XYPlot>
    </div>
  );
};

const Chart1 = () => {
  const data = [
    { x: "Jan", y: 10 },
    { x: "Feb", y: 20 },
    { x: "Mar", y: 40 },
    { x: "Apr", y: 10 },
    { x: "May", y: 15 },
    { x: "Jun", y: 5 },
    { x: "Jul", y: 30 },
  ];

  return (
    <div style={{ marginTop: "15px" }}>
      <XYPlot height={200} width={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries data={data} color="white" />
        <LineSeries data={data} color="pink" />
        <LineSeries data={data} color="red" />
      </XYPlot>
    </div>
  );
};

const Chart3 = () => {
  const data = [
    { x: "12PM", y: 400 },
    { x: "3PM", y: 80 },
    { x: "8PM", y: 100 },
    { x: "6PM", y: 120 },
    { x: "4PM", y: 350 },
    { x: "9PM", y: 50 },
    { x: "10PM", y: 300 },
  ];

  return (
    <div style={{ marginTop: "15px" }}>
      <XYPlot height={200} width={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries data={data} color="red" />
        <LineSeries data={data} color="blue" />
        <LineSeries data={data} color="orange" />
      </XYPlot>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <h2>Chart 1</h2>
      <Chart />
      <h2>Chart 2</h2>
      <Chart1 />
      <h2>Chart 3</h2>
      <Chart3 />
    </div>
  );
}
