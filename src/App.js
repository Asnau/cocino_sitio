import React from "react";
import NavbarComponent from "./component/NavbarComponent";
import HomeComponent from "./component/HomeComponent";
import AboutUs from "./component/aboutus";
import Feedback from "./component/feedback";
import OurServices from "./component/services";
import Gallery from "./component/gallery";
import Footeraboutus from "./component/footer";

/* onclick() {
        $('html, body').animate({scrollTop: 0}, 1000);
    } */

export default function App() {
  return (
    <React.Fragment>
      <NavbarComponent />
      <HomeComponent />
      <AboutUs />
      <OurServices />
      <Feedback />
      <Gallery />
      <Footeraboutus />
    </React.Fragment>
  );
}
