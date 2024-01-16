import React, { useState } from "react";
import logo from "../../assets/logo.png";
import qrcode from "../../assets/qrcode.png";
import appstore from "../../assets/appstorebutton.png";
import playstorebutton from "../../assets/googleplaybutton.png";
import "./Home.css";
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
import { useNavigate } from "react-router-dom";

export default function Downloads() {
  // const [hambergActive, setHambergActive] = useState(false)
  // function test(){
  //   alert("ok")
  // }

  // const hamburger = document.querySelector(".hamburger");
  // const navMenu = document.querySelector(".nav-links")

  // hamburger.addEventListener("click", () => {
  //   hamburger.classList.toggle("active")
  //   navMenu.classList.toggle("active")
  // })

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigate = useNavigate();

  return (
    <>
      <body>
        <nav>
          <img
            src={logo}
            alt="website logo"
            className="logo"
            // onClick={test}
          />

          <div className="nav-links">
            <div
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </div>
            <div
              onClick={() => {
                navigate("/About");
              }}
            >
              About
            </div>
            <div
              onClick={() => {
                navigate("/Downloads");
              }}
              style={{ color: "#ea2d53" }}
            >
              Downloads
            </div>
          </div>

          <img src={qrcode} alt="qr code" className="qr-code" />
          {/*           
          <div className="hamburger" onClick={()=>setHambergActive(!hambergActive)}>
            <span className='bar' ></span>
            <span className='bar' ></span>
            <span className='bar' ></span>
          </div> */}
        </nav>
        {/* <Header /> */}
        <div className="downloads-section">
          <div>Unleash Your Creativity: Download TocTic now!</div>
          <div>
            Welcome to the heart of inspiration! Dive into the world of TocTic and unlock a universe where your creativity knows no bounds.
            Whether you're a dance maestro, comedy virtuoso, or just love
            capturing life's moments in style, our app empowers you to express
            yourself effortlessly
          </div>
          <div>
            <img
              src={playstorebutton}
              alt="play store button"
              className="appstorebutton2"
            />
            <img
              src={appstore}
              alt="appstore button"
              className="appstorebutton"
            />
          </div>
        </div>

        <div className="footer">
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
            © 2022 WIDAR produced by <span className="toctic">TocTic</span>,
            Inc.
          </div>
          <div>Privacy Policy | Terms of Service (Global)</div>
        </div>

        <div className={`burger-container ${menuOpen ? "open" : ""}`}>
          <div className="burger-menu" onClick={toggleMenu}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>

          <div className="navbar">
            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">Shop</a>
            <a href="#">Downloads</a>
          </div>
        </div>
      </body>
    </>
  );
}
