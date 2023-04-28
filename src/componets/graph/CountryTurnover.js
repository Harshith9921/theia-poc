import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const CountryTurnover = ({ data }) => {
  let turnover = data ? data.turnover : {};

  const options = {
    title: {
      text: "COUNTRY TURONVER",
      align: "center",
      style: {
        fontFamily: "Open Sans",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 16,
      },
    },
    colors: ["#53389E"],
    grid: {
      borderColor: "transparent",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "15%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "Country Turnover",
      categories: Object.keys(turnover),
    },
    responsive: [
      {
        breakpoint: 100,
        options: {
          plotOptions: {
            bar: {
              horizontal: false,
            }
          }
        }
      }
    ]
  };
  const series = [
    {
      name: "Country Turnover",
      data: Object.values(turnover),
    },
  ];

  return (
    <div className="graph">
      <Chart
        options={options}
        series={series}
        type="bar"
        height="280px"
      />
    </div>
  );
};

export default CountryTurnover;
