import React from "react";
import { Carousel } from "antd";

import { useSelector } from "react-redux";

export default function HomeCarousel(props) {
  const { arrImg } = useSelector((state) => state.CarouselReducer);

  console.log("arrImg", arrImg);

  const contentStyle = {
    height: "400px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    backgroundPosition: "center",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Carousel effect="fade">
      <div>
        <div style={contentStyle}>
          <img
            src="https://s3img.vcdn.vn/123phim/2021/03/1440x600-d04f3c.jpg"
            className="w-full "
            alt="123"
          />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img
            src="https://photo-cms-nghenhinvietnam.zadn.vn/Uploaded/trunghieu/2021_03_28/thumbknail_original_DOBK.jpg"
            className="w-full "
            alt="123"
          />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img
            src="https://chonthuonghieu.com/wp-content/uploads/2021/02/Avengers-Infinity-War-1-1.jpg"
            className="w-full "
            alt="123"
          />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img
            src="https://thegioidohoa.com/wp-content/uploads/2018/06/poster-phim.jpg"
            className="w-full 
            "
            alt="123"
          />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img
            src="https://youthvietnam.vn/wp-content/uploads/2021/06/Cac-yeu-to-giup-poster-phim-thanh-cong.jpg"
            className="w-full"
            alt="123"
          />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img
            src="https://topreview.vn/wp-content/uploads/2019/09/hai-phuong-phim-chieu-rap-viet-nam-hay-nhat-2019.jpg"
            className="w-full"
            alt="123"
          />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img
            src="https://admin.thethaohcm.vn/upload/2021/04/28/lat-mat-48h_28042021091136.jpg"
            className="w-full "
            alt="123"
          />
        </div>
      </div>
    </Carousel>
  );
}
