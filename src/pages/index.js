import {
  AiFillInfoCircle,
} from "react-icons/ai";

import Timezone from "@/componets/timezone/Timezone";
import Turnover from "@/componets/turnover/Turnover";
import { useEffect, useState } from "react";
import axios from "axios";

import ChannelOrder from "@/componets/graph/ChannelOrder";
import ChannelTuronver from "@/componets/graph/ChannelTurnover";
import CountryTurnover from "@/componets/graph/CountryTurnover";
import BrandTurnover from "@/componets/graph/BrandTurnover";
import NavBar from "@/componets/nav/NavBar";

export default function Home() {
  const [headerData, setHeaderDate] = useState();
  const [dashboard, setDashboard] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8083/order/api/v1/bff/dashboard")
      .then((response) => {
        setDashboard(response.data?.result);
        console.log(response.data);
        setHeaderDate(response?.data?.result?.headerData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const timezoneDate = [
    {
      country: "Singapore",
      time: "16:38",
    },
    {
      country: "India",
      time: "13:10",
    },
    {
      country: "Paris",
      time: "08:40",
    },
    {
      country: "London",
      time: "07:40",
    },
    {
      country: "PST",
      time: "23:41",
    },
  ];

  return (
    <div className="main">
      <NavBar/>
      <div style={{ margin: 10 }}>
        <div >
          <text className="text2">DAILY TURNOVER</text>
        </div>
        <div className="info-div">
          <div style={{ paddingLeft: 5, paddingTop: 5 }}>
            <AiFillInfoCircle />
            <text className="text1"> Note:</text>
          </div>
          <ul className="text1">
            <li >
              Expect Amazon channel data to have latency against Amazon Business
              reports as Amazon only provides us shipped orders data at any
              point
            </li>
            <li>
              For countries behind SG time zone, TO data can be slower to
              refresh as the dashboard is refreshed basis SG time zone
            </li>
          </ul>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 10,
              paddingTop: 10,
              background: "white",
            }}
          >
            <text className="text1">TIME ZONE</text>
          </div>
          <div className="flex-container-timezone">
            {timezoneDate.map((item) => (
              <Timezone country={item.country} time={item.time} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="flex-container-turnover">
          <Turnover details={headerData?.totalTurnover} />
          <Turnover details={headerData?.ytdTurnover} />
          <Turnover details={headerData?.mtdTurnover} />
        </div>
      </div>
      <div style={{ background: "white" }}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <CountryTurnover data={dashboard?.countryTurnover} />
          <ChannelTuronver data={dashboard?.channelTurnover} />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <BrandTurnover data={dashboard?.brandTurnover} />
          <ChannelOrder data={dashboard?.channelOrders} />
        </div>
      </div>
    </div>
  );
}
