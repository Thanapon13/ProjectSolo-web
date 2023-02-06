import React from "react";
import "./startPost.css";
import { BiUserCircle, BiImageAdd } from "react-icons/bi";

function startPost() {
  return (
    <div className="container-startPost">
      <div className="card-startPost">
        <div className="card-startPost-top">
          <i>
            {" "}
            <BiUserCircle />{" "}
          </i>
          <form>
            <label for="userName"></label>
            <input
              type="text"
              id="userName"
              placeholder="What’s Happening?"
            ></input>
          </form>
        </div>
        <div className="card-startPost-bottom">
          <i>
            <BiImageAdd />
          </i>
          <button type="submit">Post</button>
        </div>
      </div>
    </div>
  );
}

export default startPost;
