import React, { useState } from "react";
import "./Dropdown-Menu.css";
import { BiLogOut, BiUserCircle } from "react-icons/bi";

import useAuth from "../../hooks/useAuth";
import Avatar from "../Avatar";

function DropdownLogin() {
  const [open, setOpen] = useState(false);
  const { authenticateUser } = useAuth();
  return (
    <div>
      <div className="menu-container">
        <div
          className="menu-trigger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Avatar src={authenticateUser.profileImage} size="60" />
        </div>

        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <ul>
            <div>
              <h1>
                {authenticateUser.firstName} {authenticateUser.lastName}
              </h1>
            </div>
            <DropdownItems
              link={"/useraccount"}
              img={<BiUserCircle />}
              text={"EDIT PROFILE"}
            />
            <a href="/">
              {" "}
              <DropdownItem
                link={"/login"}
                img={BiLogOut}
                text={"ออกจากระบบ"}
              />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props) {
  const { logout, authenticateUser } = useAuth();
  return (
    <li className="dropdownItem">
      <img alt="img" src={props.img}></img>
      <button onClick={logout} href={props.link}>
        {props.text}
      </button>
    </li>
  );
}

function DropdownItems(props) {
  return (
    <li className="dropdownItem">
      <img alt="img" src={props.img}></img>
      <a href={props.link}> {props.text} </a>
    </li>
  );
}

export default DropdownLogin;
