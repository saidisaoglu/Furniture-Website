import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import carouselImg1 from "../Images/VlogCompImg/carouselItemimg1.png";
import VlogSectionCarouselScss from "./VlogSectionCarousel.module.scss";

export default function VlogSectionCarousel() {
  return (
    <>
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
          <img src={carouselImg1} alt="Carousel Item 1" />
        </SwiperSlide>
        <SwiperSlide className={VlogSectionCarouselScss.vlogSwiperItem}>
          <img src={carouselImg1} alt="Carousel Item 1" />
        </SwiperSlide>
        <SwiperSlide className={VlogSectionCarouselScss.vlogSwiperItem}>
          <img src={carouselImg1} alt="Carousel Item 1" />
        </SwiperSlide>
        <SwiperSlide className={VlogSectionCarouselScss.vlogSwiperItem}>
          <img src={carouselImg1} alt="Carousel Item 1" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
