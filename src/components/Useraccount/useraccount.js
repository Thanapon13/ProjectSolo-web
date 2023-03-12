import React, { useEffect, useState } from "react";
import EditProfile from "../../assets/blank.png";
import useAuth from "../../hooks/useAuth";
import ProfileImageForm from "./ProfileImageForm";
import * as userApi from "../../apis/user-api";
import { toast } from "react-toastify";
import validateProfile, {
  validateEditProfile
} from "../validators/validate-profile";

import "./useraccount.css";

function Useraccount() {
  const [error, setError] = useState({});
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [lineToken, setLineToken] = useState("");
  const [modal, setModal] = useState(false);
  console.log(fname, "fname");
  console.log(lname, "lname");
  console.log(lineToken, "lineToken");

  const toggleModal = () => {
    setModal(!modal);
  };

  const input = {
    firstName: fname,
    lastName: lname,
    lineToken: lineToken
  };
  const handleClickSave = async () => {
    try {
      const result = validateEditProfile(input);
      console.log(result, "---validateEditProfile---");
      if (result) {
        setError(result);
      } else {
        console.log("no error");
        setError({});

        try {
          await userApi.updateUserInfo(input);
        } catch (err) {
          console.log(err);
        }
      }
    } catch (err) {
      console.log(err.response?.data.message);
    }
  };

  const handleChangeFname = async e => {
    setFname(e.target.value);
  };
  const handleChangeLname = async e => {
    setLname(e.target.value);
  };
  const handleChangeLineToken = async e => {
    setLineToken(e.target.value);
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
              onChange={e => handleChangeFname(e)}
            />
          </div>

          <div className="editprofile-form-all">
            <h3>Last Name</h3>
            <input
              className="editprofile-input"
              type="text"
              onChange={e => handleChangeLname(e)}
              placeholder="Enter Last Name"
            />
          </div>

          <div className="editprofile-form-all">
            <h3>Line Token</h3>
            <input
              className="editprofile-input"
              type="text"
              onChange={e => handleChangeLineToken(e)}
              placeholder="line Token"
            />
          </div>
        </form>
        <div className="btn-Confirm-editprofile">
          <button className="Confirm-editprofile" onClick={handleClickSave}>
            ยืนยันการแก้ไข
          </button>
        </div>
      </div>

      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-community">
              <ProfileImageForm />
              <button onClick={toggleModal} className="close-editprofile-modal">
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
