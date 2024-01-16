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
import aboutusImg from "../../assets/aboutuImg.png";
import aboutusPhone from "../../assets/aboutUsPhone.png";
import { useNavigate } from "react-router-dom";

export default function About() {
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

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
              style={{ color: "#ea2d53" }}
            >
              About
            </div>
            <div
              onClick={() => {
                navigate("/Downloads");
              }}
            >
              Downloads
            </div>
          </div>

          <img src={qrcode} alt="qr code" className="qr-code" />
        </nav>
        {/* <Header /> */}

        <div className="about-us-text">ABOUT US</div>
        <div className="about-us-body">
          At TocTic, we believe in the power of self-expression and connection.
          Our journey began with a simple idea: to provide a platform where
          individuals from all walks of life can unleash their creativity, share
          their stories, and build meaningful connections with a global
          community.
        </div>
        <img src={aboutusImg} className="aboutusImg" />
        <div className="about-section">
          <div className="about-us-box">
            <div>About</div>
            <div>
              Welcome to TocTic, where creativity converges with community!
              Founded with a vision of empowering individuals to express
              themselves authentically, our platform is a vibrant canvas for
              diverse forms of creativity. Whether you're into dance, comedy,
              lifestyle content, or forging your own unique path, TocTic
              provides the tools and space for your imagination to thrive. Join
              our global community, a melting pot of inspiration, where creators
              from all walks of life celebrate each other's successes and
              elevate the art of self-expression. At TocTic, we stand at the
              forefront of technology,
            </div>
          </div>
          <img src={aboutusPhone} className="aboutusPhone" />
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
