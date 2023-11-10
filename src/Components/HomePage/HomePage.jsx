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
  contactWithUs,
  addressWood,
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
        contactWithUs={contactWithUs}
        addressWood={addressWood}
      />
      <CoverflowSwiper />
    </>
  );
}
