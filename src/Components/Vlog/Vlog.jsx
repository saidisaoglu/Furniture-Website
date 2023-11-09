import React, { useRef, useState } from "react";
import VlogScss from "./Vlog.module.scss";
import VectorImg from "../Images/VlogCompImg/VectorImg.png";
import Video1 from "../Images/VlogCompImg/Video1.mp4";
import playButtonimg from "../Images/VlogCompImg/playButton.png";
import thumbNail from "../Images/VlogCompImg/thumbNail.png";
import VlogSectionCarousel from "./VlogSectionCarousel";

export default function Vlog() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  const buttonStyle = {
    display: isPlaying ? "none" : "block",
  };
  return (
    <section className={VlogScss.VlogSection}>
      <div className={VlogScss.VlogSectionHeader}>
        <h2>Vloglar</h2>
        <img src={VectorImg} alt="" />
      </div>
      {/* <VlogSectionCarousel /> */}
      <div className={VlogScss.videoContainer}>
        <img
          onClick={handlePlay}
          className={VlogScss.playButton}
          src={playButtonimg}
          alt=""
          style={buttonStyle}
        />
        <video
          controls={isPlaying}
          poster={thumbNail}
          ref={videoRef}
          src={Video1}
        ></video>
        <VlogSectionCarousel />
      </div>
    </section>
  );
}
