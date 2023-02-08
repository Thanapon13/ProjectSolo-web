import React from "react";
import "./posted.css";
import { BiUserCircle, BiImageAdd, BiCommentDetail } from "react-icons/bi";
import KingPowerMahanakhonimg from "../../provinceAll/Bangkok/Bangkok-inChonburi/King Power Mahanakhon/King-Power-Mahanakhon5.jpg";
function Postrd() {
  return (
    <div className="container-posted">
      <div className="card-posted">
        <div className="card-posted-top">
          <i>
            {" "}
            <BiUserCircle />{" "}
          </i>
          <form>
            <label htmlFor="userName"></label>
            <input
              type="text"
              id="userName"
              placeholder="เขียนโพสต์ของคุณ"
            ></input>
          </form>
        </div>

        <div className="card-posted-picture-center">
          <img src={KingPowerMahanakhonimg}></img>
        </div>

        <div className="card-posted-bottom">
          <div className="icon-posted-bottom">
            {" "}
            <i>
              <BiImageAdd />
            </i>
            <i>
              {" "}
              <BiCommentDetail />{" "}
            </i>
          </div>

          <button type="submit" className="btn-posted">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
export default Postrd;
