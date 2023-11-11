import styles from "./Projects.module.scss";
import { useState } from "react";
import interior1 from "../Images/interior1.jpg";
import interior2 from "../Images/interior2.png";
import interior3 from "../Images/interior3.png";
import exterior1 from "../Images/exterior1.jpeg";
import exterior2 from "../Images/exterior2.jpeg";
import exterior3 from "../Images/exterior3.avif";
import landscape1 from "../Images/landscape1.avif";
import landscape2 from "../Images/landscape2.avif";
import landscape3 from "../Images/landscape3.avif";
import repair1 from "../Images/repair1.avif";
import repair2 from "../Images/repair2.jpeg";
import repair3 from "../Images/repair3.jpeg";
import activeBackground from "../../assets/activeProjectsButtonColor.jpg";
import otherBackground from "../../assets/otherButtonsColor.jpg";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export default function Projects({
  projects,
  Interior,
  Exterior,
  Landscape,
  RepairAndConstruction,
  projectsRef,
}) {
  const [activeButton, setActiveButton] = useState("Interior");

  const buttonName = {
    Interior,
    Exterior,
    Landscape,
    RepairAndConstruction,
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const imagesMap = {
    Interior: [interior1, interior2, interior3],
    Exterior: [exterior1, exterior2, exterior3],
    Landscape: [landscape1, landscape2, landscape3],
    RepairAndConstruction: [repair1, repair2, repair3],
  };

  return (
    <section className={styles.sectionContainer} id="projects">
      <div className={styles.textContainer}>
        <p>{projects}</p>
      </div>
      <div className={styles.buttonAndSliderContainer}>
        <div className={styles.buttonContainer}>
          <div className={styles.firstPartButtons}>
            <button onClick={() => handleButtonClick("Interior")}>
              <img
                className={styles.backgroundColorInProject}
                src={
                  activeButton === "Interior"
                    ? activeBackground
                    : otherBackground
                }
                alt="backgroundColor"
              />
              <p
                className={
                  activeButton === "Interior" ? styles.activeButton : ""
                }
              >
                {buttonName.Interior}
              </p>
            </button>
            <button onClick={() => handleButtonClick("Exterior")}>
              <img
                className={styles.backgroundColorInProject}
                src={
                  activeButton === "Exterior"
                    ? activeBackground
                    : otherBackground
                }
                alt="backgroundColor"
              />
              <p
                className={
                  activeButton === "Exterior" ? styles.activeButton : ""
                }
              >
                {buttonName.Exterior}
              </p>
            </button>
          </div>
          <div className={styles.secondPartButtons}>
            <button onClick={() => handleButtonClick("Landscape")}>
              <img
                className={styles.backgroundColorInProject}
                src={
                  activeButton === "Landscape"
                    ? activeBackground
                    : otherBackground
                }
                alt="backgroundColor"
              />
              <p
                className={
                  activeButton === "Landscape" ? styles.activeButton : ""
                }
              >
                {buttonName.Landscape}
              </p>
            </button>
            <button onClick={() => handleButtonClick("RepairAndConstruction")}>
              <img
                className={styles.backgroundColorInProject}
                src={
                  activeButton === "RepairAndConstruction"
                    ? activeBackground
                    : otherBackground
                }
                alt="backgroundColor"
              />
              <p
                className={
                  activeButton === "RepairAndConstruction"
                    ? styles.activeButton
                    : ""
                }
              >
                {buttonName.RepairAndConstruction}
              </p>
            </button>
          </div>
        </div>
        <Swiper
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className={styles.carousel}
        >
          {imagesMap[activeButton].map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
