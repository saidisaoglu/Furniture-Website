import Navbar from "../Navbar/Navbar";
import CoverflowSwiper from "./SwiperSlide";

export default function HomePage({
  locationText,
  phoneNumber,
  homePage,
  projects,
  whereToFind,
  vlog,
  customerReviews,
  contact,
  addressWood,
  setTexts,
}) {
  return (
    <>
      <Navbar
        locationText={locationText}
        phoneNumber={phoneNumber}
        homePage={homePage}
        projects={projects}
        whereToFind={whereToFind}
        vlog={vlog}
        customerReviews={customerReviews}
        contact={contact}
        addressWood={addressWood}
        setTexts={setTexts}
      />
      <CoverflowSwiper />
    </>
  );
}
