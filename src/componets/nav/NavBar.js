import {
    AiOutlineMenuUnfold,
    AiFillAppstore,
    AiFillGoogleCircle,
  } from "react-icons/ai";

export default function NavBar() {
    return (
        <div className="nav-bar">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ padding: 3 }}>
            <AiOutlineMenuUnfold size={25} />
          </div>
          <div>
            <input type="text" placeholder="Search for Product or Order" />
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex",alignItems:"center" }}>
            <AiFillAppstore size={25} />
            <text className="text1">Apps</text>
          </div>
          <div style={{ borderLeftStyle: "groove", padding: 3 }}>
            <AiFillGoogleCircle size={25} />
          </div>
          <text className="text1">Hi Harshith</text>
        </div>
      </div>
    )
  }
  