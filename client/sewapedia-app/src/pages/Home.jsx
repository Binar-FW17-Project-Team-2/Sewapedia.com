import { Outlet } from "react-router-dom";
import NavBar from "../Component/NavBar";

import Footer from "../Component/Footer";

import logo from "../image/header-image.jpeg";

export default function Home() {
  return (
    <>
      <NavBar />
      <center>
        <img src={logo} alt="Logo" />

        <div id="container">
          <div id="footer">
            This is a footer. This stays at the bottom of the page.
          </div>
        </div>
      </center>

      <Outlet />
      <Footer />
    </>
  );
}
