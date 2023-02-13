import React, { useState } from "react";
import EditProfile from "../../assets/blank.png";
import ProfileImageForm from "./ProfileImageForm";

import "./useraccount.css";

function Useraccount() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="container-Useraccount-all">
      <div className="editprofile-form-all ">
        <h1 style={{ textAlign: "center" }}>EDIT PROFILE</h1>

        <div className="header-editprofile">
          <img className="img-editProfile" alt="img" src={EditProfile}></img>
          <button className="btn-editProfile" onClick={toggleModal}>
            Edit
          </button>
        </div>
        <form className="editprofile-form">
          <div className="editprofile-form-all">
            <h3>First Name</h3>
            <input
              className="editprofile-input"
              type="text"
              placeholder="Enter First Name"
            />
          </div>

          <div className="editprofile-form-all">
            <h3>Last Name</h3>
            <input
              className="editprofile-input"
              type="text"
              placeholder="Enter Last Name"
            />
          </div>
          <button className="Confirm-editprofile">ยืนยันการแก้ไข</button>
        </form>
      </div>

      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-community">
              <ProfileImageForm />
              <button onClick={toggleModal} className="close-editprofile">
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Useraccount;
