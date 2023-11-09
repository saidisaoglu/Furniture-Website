import image from "../Images/CustomCommentsImg/PersonImg.png";
import CustomerCommentsCarouselScss from "./CustomerCommentsCarousel.module.scss";
import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function CustomerCommentsCarousel() {
  const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex) => {
  //   // Carousel son slayta geldiğinde veya ilk slayta geri döndüğünde
  //   // bu durumu kontrol etmek için bir koşul ekleyin.
  //   if (selectedIndex < 0) {
  //     setIndex(0);
  //   } else if (selectedIndex >= carouselItemCount) {
  //     setIndex(carouselItemCount - 1);
  //   } else {
  //     setIndex(selectedIndex);
  //   }
  // };
  // const handlePrevious = () => {
  //   setIndex(index - 1);
  // };

  // const handleNext = () => {
  //   setIndex(index + 1);
  // };
  return (
    <>
      {/* <button onClick={handleSelect}>Arxa</button> */}
      <Carousel
        nextLabel="Next"
        prevLabel="Previous"
        activeIndex={index}
        onSelect={(selectedIndex) => setIndex(selectedIndex)}
        className={CustomerCommentsCarouselScss.Carousel}
        indicators={false}
      >
        <Carousel.Item className={CustomerCommentsCarouselScss.item1}>
          <div className={CustomerCommentsCarouselScss.CustomerCommentsCard}>
            <img src={image} alt="" />
            <div>
              <div
                className={CustomerCommentsCarouselScss.CustomerCommentsDesc}
              >
                <h2>Name Surname</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Neque laoreet morbi
                  lacus amet sodales tempus tellus neque purus. Nisl dignissim
                  id et nunc ut. Fames eu proin purus risus dapibus id eu.
                  Dignissim metus maecenas vulputate nunc sagittis facilisis
                  turpis. Amet sollicitudin odio aliquet congue id non arcu.
                  Facilisis ipsum dignissim netus mi massa vel diam proin proin.
                  Elementum elementum senectus mi nulla. Hac dui pulvinar
                  vulputate in nibh pharetra. Sollicitudin vestibulum sapien
                  magna nunc condimentum. Consectetur quis dignissim amet et
                  rhoncus. Laoreet magna nisi ornare hendrerit. Facilisis dictum
                  arcu tempor viverra ornare massa interdum mattis. Sem
                  tristique condimentum fringilla facilisis gravida pellentesque
                  in.
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className={CustomerCommentsCarouselScss.item1}>
          <div className={CustomerCommentsCarouselScss.CustomerCommentsCard}>
            <div>
              <img src={image} alt="" />
            </div>
            <div>
              <div
                className={CustomerCommentsCarouselScss.CustomerCommentsDesc}
              >
                <h2>Name Surname</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Neque laoreet morbi
                  lacus amet sodales tempus tellus neque purus. Nisl dignissim
                  id et nunc ut. Fames eu proin purus risus dapibus id eu.
                  Dignissim metus maecenas vulputate nunc sagittis facilisis
                  turpis. Amet sollicitudin odio aliquet congue id non arcu.
                  Facilisis ipsum dignissim netus mi massa vel diam proin proin.
                  Elementum elementum senectus mi nulla. Hac dui pulvinar
                  vulputate in nibh pharetra. Sollicitudin vestibulum sapien
                  magna nunc condimentum. Consectetur quis dignissim amet et
                  rhoncus. Laoreet magna nisi ornare hendrerit. Facilisis dictum
                  arcu tempor viverra ornare massa interdum mattis. Sem
                  tristique condimentum fringilla facilisis gravida pellentesque
                  in.
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className={CustomerCommentsCarouselScss.item1}>
          <div className={CustomerCommentsCarouselScss.CustomerCommentsCard}>
            <div>
              <img src={image} alt="" />
            </div>
            <div>
              <div
                className={CustomerCommentsCarouselScss.CustomerCommentsDesc}
              >
                <h2>Name Surname</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Neque laoreet morbi
                  lacus amet sodales tempus tellus neque purus. Nisl dignissim
                  id et nunc ut. Fames eu proin purus risus dapibus id eu.
                  Dignissim metus maecenas vulputate nunc sagittis facilisis
                  turpis. Amet sollicitudin odio aliquet congue id non arcu.
                  Facilisis ipsum dignissim netus mi massa vel diam proin proin.
                  Elementum elementum senectus mi nulla. Hac dui pulvinar
                  vulputate in nibh pharetra. Sollicitudin vestibulum sapien
                  magna nunc condimentum. Consectetur quis dignissim amet et
                  rhoncus. Laoreet magna nisi ornare hendrerit. Facilisis dictum
                  arcu tempor viverra ornare massa interdum mattis. Sem
                  tristique condimentum fringilla facilisis gravida pellentesque
                  in.
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      {/* <button onClick={handleSelect}>on</button> */}
    </>
  );
}

export default CustomerCommentsCarousel;
