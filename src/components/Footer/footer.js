import React from "react";
import "./footer.css";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <div className="container-footer">
      <footer>
        <p>© 2022 ไปด้วยมายเฟรนด์ By HARUKA SENPAI</p>
        <div className="footer-icon">
          <a href="https://www.facebook.com/PDMFF">
            <BsFacebook />
          </a>
          <BsTwitter />
          <BsInstagram />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
