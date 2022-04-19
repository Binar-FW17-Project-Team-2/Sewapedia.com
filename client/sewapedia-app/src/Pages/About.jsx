import React from "react";
import FAQ from "../Component/FAQ";
import NavBar from "../Component/NavBar";
import Footer from '../Component/footer';

function About() {
  return (
    
    <div>
      <NavBar/>
      <div>
        <h1 align="center">Memiliki tak harus membeli</h1>
        <br />
        <p align="center">
          Slogan Kami adalah memberikan anda pengalaman penuh untuk menikmati
          pemakaian barang tanpa harus menjebol kantong anda. Untuk itu kami
          membuka jasa penyewaan ini untuk anda yang ingin mencoba pengalaman
          penggunaannya kemudian untuk jangka waktu yang cepat.
        </p>
        <br />
        <h1 align="center">Motto Kami</h1>
        <br />
        <h3 align="center">Anda Puas, Kami Senang</h3>
      </div>
      <FAQ />
      <Footer />
    </div>
    
  );
}

export default About;
