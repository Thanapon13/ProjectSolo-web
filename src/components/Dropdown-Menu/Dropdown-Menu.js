import React, { useState } from "react";
import profileUser from "../../img/profile-user.png";
import login from "../../img/login.png";
import register from "../../img/register.png";
import logout from "../../img/logout.png";
import "./Dropdown-Menu.css";
import { Link } from "react-router-dom";

function DropdownProfile() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="menu-container">
        <div
          className="menu-trigger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img src={profileUser}></img>
        </div>

        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <ul>
            {/* <DropdownItem img={profileUser} text={"My Profile"} /> */}

            <DropdownItem link={"/login"} img={login} text={"เข้าสู่ระบบ"} />

            {/* <DropdownItem img={logout} text={"ออกจากระบบ"} /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <img src={props.img}></img>
      <a href={props.link}> {props.text} </a>
    </li>
  );
}

export default DropdownProfile;
