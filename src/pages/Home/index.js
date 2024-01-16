import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import qrcode from '../../assets/qrcode.png'
import appstore from '../../assets/appstorebutton.png'
import playstorebutton from '../../assets/googleplaybutton.png'
import './Home.css'
import threephones from '../../assets/3mobiles.png'
import onephone from '../../assets/mobile.png'
import redarrow from '../../assets/redarrow.png'
import twophones from '../../assets/twomobiles.png'
import instagramlogo from '../../assets/instagramlogo (1).png'
import twitterlogo from '../../assets/twtlogo.png'
import facebooklogo from '../../assets/fblogo.png'
import youtubelogo from '../../assets/ytlogo.png'
import linkedinlogo from '../../assets/linkedinlogo.png'
import Header from '../../components/Header'
import { useNavigate } from "react-router-dom";


export default function Home() {
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

  const handleNavigate = () => {
    navigate('/About');
  }

  return (
    <>
      <body>
        <nav>

          <img src={logo} alt='website logo' className='logo'
          // onClick={test}
          />

          <div className='nav-links'>
            <div onClick={() => {
              navigate('/')
            }}
            style={{color:'#ea2d53'}}
            >Home</div>
            <div onClick={() => {
              navigate('/About')
            }}>About</div>
            <div onClick={() => {
              navigate('/Downloads')
            }}>Downloads</div>
          </div>

          <img src={qrcode} alt='qr code' className='qr-code' />


        </nav>
        {/* <Header /> */}


        <div className='first-section'>
          <div className='first-sub-section'>
            <div>
              Unleash Your Creativity, Capture the Moment
            </div>
            <div>
              <img src={playstorebutton} alt='play store button' className='playstorebutton' />
              <img src={appstore} alt='appstore button' />
            </div>
          </div>
          <div className='first-sub-section'>
            <img src={threephones} alt='three phones' className='threephones' />
          </div>
        </div>


        <div className='second-section'>
          <div className='second-section-welcome'>Welcome</div>

          <div className='second-section-text'>Welcome to a world where every second tells a story, and creativity knows no limits. Crafted with precision on American soil, our platform prioritizes your security with a commitment to excellence. Rest easy, knowing your creative haven is rooted in trust, far from distant shores</div>



          <div className='second-sub-parent'>
            <div className='second-sub-section second-sub-section-1'>
              <div className='second-sub-heading'>Join us and tell your stories to the world</div>
              <span className='red-list'>
                <div>
                  <img src={redarrow} alt=''></img> Explore trending Content
                </div>
                <div>
                  <img src={redarrow} alt=''></img> Express yourself with us
                </div>
                <div>
                  <img src={redarrow} alt=''></img> Connect and Collaborate
                </div>
                <div>
                  <img src={redarrow} alt=''></img> Elevate Your Presence
                </div>
                <div>
                  <img src={redarrow} alt=''></img> Get the Spotlight you deserve
                </div>
              </span>
            </div>
            <div className='second-sub-section second-sub-section-2'>
              <img src={onephone} alt='' />
            </div>
          </div>
        </div>

        <div className='third-section'>
          <div className='third-sub-section-1'>
            <div>Are you Ready To</div>
            <div>Download</div>
            <div>
              <img src={playstorebutton} alt='play store button' className='playstorebutton' />
              <img src={appstore} alt='appstore button' />
            </div>
          </div>

          <div className='third-sub-section-2'>
            <img src={twophones} alt='' />
          </div>
        </div>

        <div className='footer'>
          <div className='signup'>Sign up for our newsletter</div>
          <div className='entry-fields'>
            <input type='email' placeholder='Enter your email here' />
            <div className='footer-span'>Sign up now</div>
          </div>

          <div>
            <img src={instagramlogo} alt='' />
            <img src={twitterlogo} alt='' />
            <img src={facebooklogo} alt='' />
            <img src={youtubelogo} alt='' />
            <img src={linkedinlogo} alt='' />
          </div>
          <div>© 2022 WIDAR produced by <span className='toctic'>TocTic</span>, Inc.</div>
          <div>Privacy Policy | Terms of Service (Global)</div>

        </div>

        <div className={`burger-container ${menuOpen ? 'open' : ''}`}>
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
  )
}
