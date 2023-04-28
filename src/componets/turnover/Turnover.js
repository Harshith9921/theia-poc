import { AiOutlineDollar } from "react-icons/ai";
export default function Turnover(props) {
  return (
    <>
      <div className="turnover" style={{ paddingLeft: 75 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <AiOutlineDollar size={35} />
        </div>
        <div style={{ paddingLeft: 50 }}>
          <div>
            <text className="text2"> $ {props.details?.totalTurnover.toLocaleString("en-US")} </text>
          </div>
          <div>
            <text className="text1">{props.details?.tabName}</text>
          </div>
        </div>
      </div>
    </>
  );
}
