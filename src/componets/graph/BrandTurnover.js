import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BrandTurnover = ({ data }) => {

  let turnover=data?data.turnover:{};
  

  const options = {
    title: {
      text: "BRAND TURNOVER",
      align: 'center',
      style: {
        fontFamily: "Open Sans",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 16,
      },
    },
    colors : ['#FDB022'],
    grid: {
      borderColor: "transparent",
    },
    plotOptions: {
      bar: {
        columnWidth: "15%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "category",
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
      name: "Brand Label",
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

export default BrandTurnover;
