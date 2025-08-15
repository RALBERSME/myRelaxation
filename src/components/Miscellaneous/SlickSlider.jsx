import { miscellaneousData } from "@/utils/data";
import React from "react";
import "./Miscellaneous.css";
import Slider from "react-slick";
import { TfiPalette } from "react-icons/tfi";
const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    touchMove: true,
    useCSS: true,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="widthProblem">
      <Slider {...settings}>
        {miscellaneousData.map((comment, i) => (
          <div className="comment" key={i}>
            <div className="c-content">
              <img
                className="mis-slider"
                alt="mis"
                width={100}
                height={80}
                src="/bathroom.png"
              />
              <span>{comment.title}</span>
            </div>
            <div className="c-info">
              <div className="c-avatar">
                <TfiPalette />
              </div>
              <div className="c-person">
                <span>{comment.des}</span>
                <a href={comment.link} target="_blank">
                  click to watch
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
