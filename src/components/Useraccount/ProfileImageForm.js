import React, { useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Avatar from "../Avatar";
import * as userApi from "../../apis/user-api";
import useLoading from "../../hooks/useLoading";
import "./ProfileImageForm.css";

export default function ProfileImageForm() {
  const {
    authenticateUser: { profileImage }
  } = useAuth();

  const { startLoading, stopLoading } = useLoading();

  const [file, setFile] = useState(null);

  const inputEl = useRef();

  const handleClickSave = async () => {
    startLoading();
    const formDate = new FormData();
    formDate.append("profileImage", file);
    await userApi.updateProfile(formDate);
    stopLoading();
  };

  return (
    <div className="container-EditProfile">
      <div className="card-EditProfile">
        <div className="header-EditProfile">
          <h1>Edit Profile</h1>
        </div>
        <div className="content-EditProfile">
          <div className="Profile-Picture">
            <h1>Profile Picture</h1>
            <input
              type="file"
              className="file-Picture"
              ref={inputEl}
              onChange={e => {
                if (e.target.files[0]) {
                  setFile(e.target.files[0]);
                }
              }}
            />
          </div>
          {file && (
            <>
              <button onClick={handleClickSave}>Save</button>

              <button
                onClick={() => {
                  setFile(null);
                  inputEl.current.value = null;
                }}
              >
                Cancel
              </button>
            </>
          )}
          <button onClick={() => inputEl.current.click()}>Edit</button>
        </div>
        <div
          className="img-EditProfile"
          onClick={() => inputEl.current.click()}
        >
          <Avatar
            src={file ? URL.createObjectURL(file) : profileImage}
            size="168"
          />
        </div>
      </div>
    </div>
  );
}
