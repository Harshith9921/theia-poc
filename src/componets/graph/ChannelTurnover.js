import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChannelTuronver = ({ data }) => {
  let turnover = data ? data.turnover : {};

  const options = {
    plotOptions: {
      pie: {
        donut: {
          size: "55%",
        },
      },
    },
    title: {
      text: "CHANNEL TURNOVER",
      align: "center",
      style: {
        fontFamily: "Open Sans",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 16,
      },
    },
    colors: ["#25CDA5", "#FDB022", "#58C8D8", "#845FD8", "#D93C95"],
    series: Object.values(turnover),
    chart: {
      type: "donut",
    },
    labels: Object.keys(turnover),
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "bottom",
    },
  };
  const series = Object.values(turnover);

  return (
    <div className="graph">
      <Chart options={options} series={series} type="donut" height="280px" />
    </div>
  );
};

export default ChannelTuronver;
