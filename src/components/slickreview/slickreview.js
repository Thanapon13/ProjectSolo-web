import React from "react";
import Slider from "react-slick";
import { dataDigitalBestSeller } from "../slickreview/data";
import "./slickreview.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlickReview() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
  };
  return (
    <div className="container">
      <Slider {...settings}>
        {dataDigitalBestSeller.map(item => (
          <div key={item} className="card">
            <div className="card-top">
              <img src={item.linkImg} alt={item.title} />
              <h1>{item.title}</h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SlickReview;
