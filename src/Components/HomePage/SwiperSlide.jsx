import styles from "./SwiperSlide.module.scss";
import imageOne from "../Images/image_1.png";
import imageTwo from "../Images/image_2.png";
import imageThree from "../Images/image_3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function CoverflowSwiper() {
  return (
    <div className={styles.swiperContainer}>
      {["mobileAndTabletVersion", "laptopVersion"].map((version, index) => (
        <Swiper
          key={index}
          slidesPerView={index === 0 ? 1 : 2}
          spaceBetween={0}
          centeredSlides={true}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className={`${styles.mySwiper} ${styles[version]}`}
        >
          {[imageOne, imageTwo, imageThree, imageTwo].map((image, i) => (
            <SwiperSlide key={i}>
              <img src={image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      ))}
    </div>
  );
}
