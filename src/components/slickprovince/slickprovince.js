import React from "react";
import Slider from "react-slick";
import { dataDigitalBestSeller } from "../slickprovince/data";
import "./slickprovince.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function SlickProvince() {
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
          <div className="card">
            <div className="card-top">
              <img src={item.image} alt={item.title} />
              <h1>{item.title}</h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SlickProvince;
