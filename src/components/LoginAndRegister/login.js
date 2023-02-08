import React, { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import RegisterModal from "./RegisterContainerModal";
import "./login.css";

export default function LoginPageModal() {
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      await login(emailOrMobile, password);
      toast.success("success login");
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <div className="container-Login">
      <div className="login-content">
        <h1>Sign in to </h1>
        <h3>ไปด้วยมายเฟรนด์</h3>
        <p>If you don’t have an account register</p>
        <p>You can Register here !</p>
      </div>

      <div className=" col-form">
        <div className="Header-singin">
          <h1>Sing in</h1>
        </div>
        <form className="form-container" onSubmit={handleSubmitForm}>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            placeholder="Email address or phone number"
            value={emailOrMobile}
            onChange={e => setEmailOrMobile(e.target.value)}
            autoFocus
            autoComplete="off"
          />
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button className="btn-login">เข้าสู่ระบบ</button>
          <button onClick={toggleModal} className="btn-new">
            สร้างบัญชีใหม่
          </button>
        </form>
      </div>

      {modal && <RegisterModal toggleModal={toggleModal} />}
    </div>
  );
}
