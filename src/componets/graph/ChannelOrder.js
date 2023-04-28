import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChannelOrder = ({ data }) => {
  let ordersCount = data ? data.ordersCount : {};
  const options = {
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
            },
            value: {
              show: true,
            },
          },
          size: "55%",
        },
      },
    },
    title: {
      text: "CHANNEL ORDER",
      align: "center",
      style: {
        fontFamily: "Open Sans",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 16,
      },
    },
    colors: ["#FFFC5C", "#E46A76", "#D9D9D9", "#20A01D", "#EF0C5E"],
    series: Object.values(ordersCount),
    chart: {
      type: "donut",
    },
    labels: Object.keys(ordersCount),
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "bottom",
    }
  };
  const series = Object.values(ordersCount);

  return (
    <div className="graph">
      <Chart options={options} series={series} type="donut" height="280px" />
    </div>
  );
};

export default ChannelOrder;
