// VlogSectionCarousel.jsx
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import carouselImg2 from "../Images/VlogCompImg/carouselItem2.png";
import carouselImg3 from "../Images/VlogCompImg/carouselItem3.png";

import carouselImg1 from "../Images/VlogCompImg/carouselItemimg1.png";
import VlogSectionCarouselScss from "./VlogSectionCarousel.module.scss";

export default function VlogSectionCarousel({ isPlaying }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visibility based on whether the video is playing or not
    setIsVisible(!isPlaying);
  }, [isPlaying]);

  return (
    <>
      {isVisible && (
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={VlogSectionCarouselScss.vlogSwiper}
        >
          <SwiperSlide className={VlogSectionCarouselScss.vlogSwiperItem}>
            <img src={carouselImg1} alt="Carousel Item 1" />
          </SwiperSlide>
          <SwiperSlide className={VlogSectionCarouselScss.vlogSwiperItem}>
            <img src={carouselImg2} alt="Carousel Item 1" />
          </SwiperSlide>
          <SwiperSlide className={VlogSectionCarouselScss.vlogSwiperItem}>
            <img src={carouselImg3} alt="Carousel Item 1" />
          </SwiperSlide>
          <SwiperSlide className={VlogSectionCarouselScss.vlogSwiperItem}>
            <img src={carouselImg1} alt="Carousel Item 1" />
          </SwiperSlide>
          <SwiperSlide className={VlogSectionCarouselScss.vlogSwiperItem}>
            <img src={carouselImg2} alt="Carousel Item 1" />
          </SwiperSlide>
        </Swiper>
      )}
    </>
  );
}
