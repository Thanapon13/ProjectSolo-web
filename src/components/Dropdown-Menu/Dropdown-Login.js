import React, { useState } from "react";
import "./Dropdown-Menu.css";

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
            <DropdownItems link={"/useraccount"} text={"EDIT PROFILE"} />
            {authenticateUser.isAdmin === false ? (
              <DropdownItems link={"/historyorder"} text={"History Order "} />
            ) : null}
            <a href="/">
              <DropdownItem link={"/login"} text={"ออกจากระบบ"} />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props) {
  const { logout } = useAuth();
  return (
    <li className="dropdownItem">
      <button onClick={logout} href={props.link}>
        {props.text}
      </button>
    </li>
  );
}

function DropdownItems(props) {
  return (
    <li className="dropdownItem">
      <a href={props.link}> {props.text} </a>
    </li>
  );
}

export default DropdownLogin;
