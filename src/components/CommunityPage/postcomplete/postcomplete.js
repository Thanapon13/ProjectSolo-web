import React from "react";
import "./postcomplete.css";
import {
  BiUserCircle,
  BiImageAdd,
  BiCommentDetail,
  BiLike
} from "react-icons/bi";
import imagePostComplete from "../../provinceAll/Chonburi/Check-inChonburi/grandcanyon/Grandcanyonchon_3.jpg";

function postComplete() {
  return (
    <div className="container-postcomplete">
      <div className="card-postcomplete">
        <div className="card-postcomplete-top">
          <i>
            {" "}
            <BiUserCircle />{" "}
          </i>
          <h3>userName</h3>
        </div>
        <div className="card-postcomplete-pieture-center">
          <img alt="img" src={imagePostComplete}></img>
        </div>
        <div className="card-postcomplete-icon">
          <i>
            {" "}
            <BiLike />{" "}
          </i>
          <i>
            <BiCommentDetail />
          </i>
        </div>
        <div className="card-postcomplete-bottom">
          <form>
            <label htmlFor="comment-postcomplete"></label>
            <input
              type="text"
              id="comment-postcomplete"
              placeholder="comments"
            ></input>
            <button type="submit">Comment</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default postComplete;
