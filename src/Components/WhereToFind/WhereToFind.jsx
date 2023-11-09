import Subtract from "../Images/WhereToFindImg/Subtract.png";
import WhereToFindScss from "./WhereToFind.module.scss";
import image6 from "../Images/WhereToFindImg/image6.png";
import { useState } from "react";

export default function WhereToFind() {
  const [activeItem, setActiveItem] = useState("listItem1");
  const listItems = [
    "listItem1",
    "listItem2",
    "listItem3",
    "listItem4",
    "listItem5",
    "listItem6",
    "listItem7",
  ];

  const toggleActive = (item) => {
    setActiveItem(item);
  };

  return (
    <section className={WhereToFindScss.WhereToFindSection}>
      <div className={WhereToFindScss.WhereToFindHeader}>
        <img src={Subtract} alt="Subtract" />
        <h2>Hardan Tapaq?</h2>
      </div>
      <div className={WhereToFindScss.WhereToFindBody}>
        <div className={WhereToFindScss.leftPart}>
          <div className={WhereToFindScss.playList}>
            <ul>
              {listItems.map((item) => (
                <li
                  key={item}
                  className={`${WhereToFindScss.playListItem} ${
                    activeItem === item
                      ? WhereToFindScss.playListItemActive
                      : ""
                  }`}
                  onClick={() => toggleActive(item)}
                >
                  <img src={image6} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={WhereToFindScss.rightPart}>
          <div>
            <iframe
              width="90%"
              height="620px"
              src="https://www.youtube.com/embed/WX_k6TpUadQ?si=Ao7ZIyXQU_ifpKWA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
