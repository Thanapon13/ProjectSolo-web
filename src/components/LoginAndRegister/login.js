import React, { useState } from "react";
import "./login.css";

export default function LoginPageModal() {
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
        <form class="form-container" action="#">
          <label for="name"></label>
          <input
            type="text"
            id="name"
            placeholder="อีเมลหรือหมายเลขโทรศัพท์มือถือ"
            autofocus
            autoComplete="off"
            required
          />
          <label for="password"></label>
          <input type="password" id="password" placeholder="รหัสผ่าน" />
          <button class="btn-login">เข้าสู่ระบบ</button>
          <a href="#">ลืมรหัสผ่านใช่หรือไม่</a>
          <button onClick={toggleModal} class="btn-new">
            สร้างบัญชีใหม่
          </button>
        </form>
      </div>

      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-register">
              <div className="register-header">
                <h1>สมัคร</h1>
              </div>
              <div className="regiter-form">
                <form className="register-modal-form">
                  <div className="firstNameLastName"></div>
                  <label for="firstName">
                    {" "}
                    <input
                      type="text"
                      id="firstName"
                      autofocus
                      autoComplete="off"
                      required
                      placeholder="ชื่อ"
                    ></input>
                    <label for="lastName"></label>
                    <input
                      type="text"
                      id="lastName"
                      autofocus
                      autoComplete="off"
                      required
                      placeholder="นามสกุล"
                    ></input>
                  </label>

                  <label for="phonenadeamil"></label>
                  <input
                    type="text"
                    id="phonenadeamil"
                    autofocus
                    autoComplete="off"
                    required
                    placeholder="หมายเลขโทรศัพท์มือถือหรืออีเมล"
                  ></input>

                  <label for="passwordNew"></label>
                  <input
                    type="password"
                    id="passwordNew"
                    autofocus
                    autoComplete="off"
                    required
                    placeholder="รหัสผ่านใหม่"
                  ></input>
                </form>
                <button
                  onClick={toggleModal}
                  className="btn-new-password"
                  type="submit"
                >
                  สมัคร
                </button>
                <button onClick={toggleModal} className="close-modal">
                  X
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
