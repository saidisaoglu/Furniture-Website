import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import HomePage from "./Components/HomePage/HomePage";
import Projects from "./Components/Projects/Projects";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import Vlog from "./Components/Vlog/Vlog";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import WhereToFind from "./Components/WhereToFind/WhereToFind";
import CustomerComments from "./Components/CustomerComments/CustomerComments";

export function App() {
  const [texts, setTexts] = useState({
    locationText: "Bakı, Əhməd Rəcəbli",
    phoneNumber: "+994 55 555 55 55",
    homePage: "Ana səhifə",
    projects: "Layihələr",
    whereToFind: "Haradan tapaq?",
    vlog: "Vlog",
    customerReviews: "Müştəri rəyləri",
    contact: "Əlaqə",
    addressWood: "Address Wood",
    Interior: "İnteryer",
    Exterior: "Eksteryer",
    Landscape: "Landşaft",
    RepairAndConstruction: "Təmir/Tikinti",
    aboutUs: "Haqqımızda",
    userName: "Fərid Fidan",
    aboutUsText:
      "Lorem ipsum dolor sit amet consectetur. Neque laoreet morbi lacus amet sodales tempus tellus neque purus. Nisl dignissim id et nunc ut. Fames eu proin purus risus dapibus id eu. Dignissim metus maecenas vulputate nunc sagittis facilisis turpis. Amet sollicitudin odio aliquet congue id non arcu. Facilisis ipsum dignissim netus mi massa vel diam proin proin. Elementum elementum senectus mi nulla. Hac dui pulvinar vulputate in nibh pharetra. Sollicitudin vestibulum sapien magna nunc condimentum. Consectetur quis dignissim amet et rhoncus. Laoreet magna nisi ornare hendrerit. Facilisis dictum arcu tempor viverra ornare massa interdum mattis. Sem tristique condimentum fringilla facilisis gravida pellentesque in. Volutpat turpis lacus ut eu convallis dictum odio volutpat pharetra. Lorem ipsum dolor sit amet consectetur. Neque laoreet morbi lacus amet sodales tempus tellus neque purus. Nisl dignissim id et nunc ut. Fames eu proin purus risus dapibus id eu.",
    contactUs: "Bizimlə Əlaqə",
    fullName: "Ad Soyad",
    email: "Email",
    header: "Başlıq",
    message: "Mesaj",
    sendButton: "Göndər",
    blog: "Bloq",
    ourProjects: "Öz Layihələrimiz",
    competitions: "Yarışmalar",
    styless: "Üslublar",
    educationalinformation: "Öyrədici Məlumatlar",
    customerReviews: "Müştəri Rəyləri",
    contact: "Əlaqə",
    designerText:
      "© Saytın hazırlanması Webrandy şirkətinə məxsusdur, bütün hüquqlar qorunur.",
    designer: "Webrandy.com",
  });
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  return (
    <div>
      {isMobile ? (
        <>
          <HomePage
            locationText={texts.locationText}
            phoneNumber={texts.phoneNumber}
            homePage={texts.homePage}
            projects={texts.projects}
            whereToFind={texts.whereToFind}
            vlog={texts.vlog}
            customerReviews={texts.customerReviews}
            contact={texts.contact}
            addressWood={texts.addressWood}
            setTexts={setTexts}
          />
          <Projects
            projects={texts.projects}
            Interior={texts.Interior}
            Exterior={texts.Exterior}
            Landscape={texts.Landscape}
            RepairAndConstruction={texts.RepairAndConstruction}
          />
          <Vlog />
          <WhereToFind />
          <CustomerComments />
          <AboutUs
            aboutUs={texts.aboutUs}
            userName={texts.userName}
            aboutUsText={texts.aboutUsText}
          />
          <ContactUs
            contactUs={texts.contactUs}
            fullName={texts.fullName}
            email={texts.email}
            header={texts.header}
            message={texts.message}
            sendButton={texts.sendButton}
            locationText={texts.locationText}
            phoneNumber={texts.phoneNumber}
            homePage={texts.homePage}
            blog={texts.blog}
            vlog={texts.vlog}
            projects={texts.projects}
            Interior={texts.Interior}
            Exterior={texts.Exterior}
            whereToFind={texts.whereToFind}
            ourProjects={texts.ourProjects}
            competitions={texts.competitions}
            styless={texts.styless}
            educationalinformation={texts.educationalinformation}
            customerReviews={texts.customerReviews}
            aboutUs={texts.aboutUs}
            contact={texts.contact}
            designerText={texts.designerText}
            designer={texts.designer}
          />
        </>
      ) : (
        // Render the Fullpage component for screens wider than 1023px
        <Fullpage>
          <FullPageSections>
            <FullpageSection>
              <HomePage
                locationText={texts.locationText}
                phoneNumber={texts.phoneNumber}
                homePage={texts.homePage}
                projects={texts.projects}
                whereToFind={texts.whereToFind}
                vlog={texts.vlog}
                customerReviews={texts.customerReviews}
                contact={texts.contact}
                addressWood={texts.addressWood}
                setTexts={setTexts}
              />
            </FullpageSection>
            <FullpageSection>
              <Projects
                projects={texts.projects}
                Interior={texts.Interior}
                Exterior={texts.Exterior}
                Landscape={texts.Landscape}
                RepairAndConstruction={texts.RepairAndConstruction}
              />
            </FullpageSection>
            <FullpageSection>
              <Vlog />
            </FullpageSection>
            <FullpageSection>
              <WhereToFind />
            </FullpageSection>
            <FullpageSection>
              <CustomerComments />
            </FullpageSection>
            <FullpageSection>
              <AboutUs
                aboutUs={texts.aboutUs}
                userName={texts.userName}
                aboutUsText={texts.aboutUsText}
              />
            </FullpageSection>
            <FullpageSection>
              <ContactUs
                contactUs={texts.contactUs}
                fullName={texts.fullName}
                email={texts.email}
                header={texts.header}
                message={texts.message}
                sendButton={texts.sendButton}
                locationText={texts.locationText}
                phoneNumber={texts.phoneNumber}
                homePage={texts.homePage}
                blog={texts.blog}
                vlog={texts.vlog}
                projects={texts.projects}
                Interior={texts.Interior}
                Exterior={texts.Exterior}
                whereToFind={texts.whereToFind}
                ourProjects={texts.ourProjects}
                competitions={texts.competitions}
                styless={texts.styless}
                educationalinformation={texts.educationalinformation}
                customerReviews={texts.customerReviews}
                aboutUs={texts.aboutUs}
                contact={texts.contact}
                designerText={texts.designerText}
                designer={texts.designer}
              />
            </FullpageSection>
          </FullPageSections>
        </Fullpage>
      )}
    </div>
  );
}
