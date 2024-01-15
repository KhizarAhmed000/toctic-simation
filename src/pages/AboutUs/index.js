import React from "react";
import logo from "../../assets/logo.png";
import qrcode from "../../assets/qrcode.png";
import appstore from "../../assets/appstorebutton.png";
import playstorebutton from "../../assets/googleplaybutton.png";
import "./style.css";
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

export default function AboutUs() {
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

      <div className="text-rose-600 text-[65px] font-semibold text-center mt-20">
        ABOUT US
      </div>
      <div className="  text-center text-white text-[30px] w-1/2 left-1/4 relative my-5">
        Lorem Ipsum" is a placeholder text commonly used in the printing and
        typesetting industry. It's often used to demonstrate the visual
        appearance of a document or a font without relying on meaningful
        content.
      </div>
      <img
        src={aboutuImg}
        className="w-[full] h-[784.57px] relative left-80"
      />
      <div className="flex flex-row left-72 relative mt-60">
        <div className="w-[892px] h-[469.37px] relative">
          <div className="w-[892px] h-[469.37px] left-0 top-0 absolute bg-white bg-opacity-5 rounded-[60px] shadow backdrop-blur-[80px]" />
          <div className="w-[647.01px] h-[244.74px] left-[69.10px] top-[144.22px] absolute text-white text-2xl font-normal ">
            Lorem Ipsum" is a placeholder text commonly used in the printing and
            typesetting industry. It's often used to demonstrate the visual
            appearance of a document or a font without relying on meaningful
            content. The text is derived from sections 1.10.32 and 1.10.33 of
            "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
            Cicero, written in 45 BC. The standard Lorem Ipsum passage has been
            used since the 1500s
          </div>
          <div className="w-[163.32px] h-[48.95px] left-[69.10px] top-[79.54px] absolute text-rose-600 text-5xl font-bold">
            About
          </div>
        </div>
        <img src={aboutUsPhone} className="w-[550px] h-[641.72px] relative bottom-96 right-44"/>
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
