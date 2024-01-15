import React from "react";
import logo from "../../assets/logo.png";
import qrcode from "../../assets/qrcode.png";
import appstore from "../../assets/appstorebutton.png";
import playstorebutton from "../../assets/googleplaybutton.png";
import threephones from "../../assets/3mobiles.png";
import onephone from "../../assets/mobile.png";
import redarrow from "../../assets/redarrow.png";
import twophones from "../../assets/twomobiles.png";
import instagramlogo from "../../assets/instagramlogo (1).png";
import twitterlogo from "../../assets/twtlogo.png";
import facebooklogo from "../../assets/fblogo.png";
import youtubelogo from "../../assets/ytlogo.png";
import linkedinlogo from "../../assets/linkedinlogo.png";
import Header from "../../components/Header";
import aboutuImg from "../../assets/aboutuImg.png";
import aboutUsPhone from "../../assets/aboutUsPhone.png";
import "./style.css";


export default function Download() {
  return (
    <body className="mainContainer">
      <nav>
        <img src={logo} alt="website logo" className="logo2" />

        <div className="nav-links">
          <div>Home</div>
          <div>Features</div>
          <div>Shop</div>
          <div>Downloads</div>
        </div>

        <img src={qrcode} alt="qr code" className="qr-code2" />
      </nav>
      {/* <Header /> */}

      <div className="w-[1229px] h-[580px] bg-white bg-opacity-5 rounded-[60px] shadow backdrop-blur-[80px] ml-80 relative left-6 mt-32 items-center pt-20 mb-48">
        <div className=" text-center text-white text-[40px] font-extrabold w-1/2 relative left-1/4 my-10 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className=" h-[116px] text-center text-white text-2xl w-3/4 relative left-40 mb-15 ">
          Lorem Ipsum" is a placeholder text commonly used in the printing and
          typesetting industry. It's often used to demonstrate the visual
          appearance of a document or a font without relying on meaningful
          content.
        </div>
        <div className="flex flex-row items-center">
            <img src={playstorebutton} className="h-28 w-auto relative ml-80"/>
            <img src={appstore} className="h-20 w-auto"/>
        </div>
      </div>

      <div className="footer mb-20">
        <div className="signup">Sign up for our newsletter</div>
        <div className="entry-fields">
          <input type="email" placeholder="Enter your email here" />
          <div className="footer-span">Sign up now</div>
        </div>

        <div>
          <img src={instagramlogo} alt="" />
          <img src={twitterlogo} alt="" />
          <img src={facebooklogo} alt="" />
          <img src={youtubelogo} alt="" />
          <img src={linkedinlogo} alt="" />
        </div>
        <div>
          © 2022 WIDAR produced by <span className="toctic">Toctic</span>, Inc.
        </div>
        <div>
          Privacy Policy | Terms of Service (Global) | Terms of Service (Japan)
        </div>
      </div>
    </body>
  );
}
