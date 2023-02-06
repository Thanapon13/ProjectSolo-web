import React from "react";
import { Link } from "react-router-dom";
import SlickProvince from "../slickprovince/slickprovince";
import SlickReview from "../slickreview/slickreview";
import imagepost from "../../img/imgpost.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import { AiOutlineComment, AiFillLike } from "react-icons/ai";
import nameprofile from "../../img/profile-user.png";
import "./HompePage.css";

function HomePage() {
  return (
    <div className="container-all">
      {/* จังหวัด */}
      <div className="province-container">
        <div className="container-content">
          <div className="content-province">
            <h1>จังหวัด</h1>
            <p>
              ใน ประเทศไทย
              บ้านเรามีที่เที่ยวเยอะแยะแบบที่ไปกันได้ทั้งปีทุกวี่ทุกวันก็ยังไม่มีหมดค่ะ
              นี่ยังไม่นับรวมแหล่งท่องเที่ยวใหม่ๆ ที่ผุดกันขึ้นมาเรื่อยๆ
              เรียกได้ว่าเมืองไทยของเรานั้น
              แทบจะเป็นสวรรค์ของนักท่องเที่ยวกันเลย ว่าแล้วมาดู 77 ที่เที่ยว
              สวยที่สุดในไทย ชาตินี้ต้องไปสักครั้ง!
            </p>
            <Link to="/provincePage">
              <button className="btn-all">
                <i>
                  <FaLongArrowAltRight />
                </i>
                <p> All </p>
              </button>
            </Link>
          </div>
        </div>
        <div className="container-card">
          <SlickProvince />
        </div>
      </div>

      {/* แนะนำสถานที่ท่องเที่ยว */}
      <div className="province-container ">
        <div className="container-content">
          <div className="content-province">
            <h1>แนะนำสถานที่ท่องเที่ยว</h1>
            <p>
              เที่ยวไทยครึกครื้น เศรษฐกิจไทยคึกคัก...
              เพจไปด้วยมายเฟรนด์ของเราเชิญชวนเข้าร่วมค้นหาสถานที่ท่อง
              เที่ยวในดวงใจ เปิดรับความรู้ใหม่จากการท่องเที่ยว
              ชวนคนรุ่นใหม่เที่ยวอย่างไรให้สนุก สร้างสรรค์
              และอนุรักษ์สิ่งแวดล้อม ท่ามกลางบรรยากาศที่สนุกสนานกลางลานสานฝัน
              พร้อมสถานที่ท่องเที่ยวแนะนำที่คนไทยไม่ควรพลาดด้ว
            </p>
            <Link to="/reviewPage">
              <button className="btn-all">
                <i>
                  <FaLongArrowAltRight />
                </i>
                <p> All </p>
              </button>
            </Link>
          </div>
        </div>
        <div className="container-card">
          <SlickReview />
        </div>
      </div>

      {/* community */}

      <div className="community-container">
        <div className="community-container-content">
          <h1>Community</h1>
        </div>

        <div className="community-container-cardpost">
          <div className="card-post">
            <div className="nameprofile">
              <img src={nameprofile}></img>
              <p>Username</p>
            </div>
            <div className="imagepost">
              <img src={imagepost}></img>
            </div>
            <div className="bottomcontent">
              <div className="postcontent">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
              <div className="posticon">
                <i>
                  <AiFillLike />
                </i>
                <i>
                  <AiOutlineComment />
                </i>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="card-post">
            <div className="nameprofile">
              <img src={nameprofile}></img>
              <p>Username</p>
            </div>
            <div className="imagepost">
              <img src={imagepost}></img>
            </div>
            <div className="bottomcontent">
              <div className="postcontent">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
              <div className="posticon">
                <i>
                  <AiFillLike />
                </i>
                <i>
                  <AiOutlineComment />
                </i>
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className="card-post">
            <div className="nameprofile">
              <img src={nameprofile}></img>
              <p>Username</p>
            </div>
            <div className="imagepost">
              <img src={imagepost}></img>
            </div>
            <div className="bottomcontent">
              <div className="postcontent">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
              <div className="posticon">
                <i>
                  <AiFillLike />
                </i>
                <i>
                  <AiOutlineComment />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contaoner-btn-post">
        <Link to="/communitypage">
          <button className="btn-post">
            <i>
              <FaLongArrowAltRight />
            </i>
            <p> All </p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
