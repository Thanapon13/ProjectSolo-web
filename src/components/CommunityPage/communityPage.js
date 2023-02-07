import React, { useState } from "react";
import "./communitypage.css";
import Postrd from "./posted/posted";
import PostComplete from "./postcomplete/postcomplete";
import { BiUserCircle, BiImageAdd, BiCommentDetail } from "react-icons/bi";

function CommunityPage() {
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
    <div className="container-communitypage ">
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
                onClick={toggleModal}
                type="text"
                id="userName"
                placeholder="เขียนโพสต์ของคุณ"
              ></input>
            </form>
          </div>
          <div className="card-startPost-bottom">
            <div className="icon-startPost-bottom">
              <i>
                <BiImageAdd />
              </i>
              <i>
                {" "}
                <BiCommentDetail />{" "}
              </i>
            </div>

            <button type="submit" className="btn-startPost">
              Post
            </button>
          </div>
        </div>

        {modal && (
          <div className="modal">
            <div className="overlay">
              <div className="modal-community">
                <Postrd />
                <button onClick={toggleModal} className="close-posted">
                  X
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <PostComplete />
    </div>
  );
}

export default CommunityPage;
