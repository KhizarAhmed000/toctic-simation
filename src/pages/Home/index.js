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

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  

  return (
   <> 
    <body>
        <nav>
        
          <img src={logo} alt='website logo' className='logo' 
          // onClick={test}
          />
          
          <div className='nav-links'>
            <div>Home</div>
            <div>Features</div>
            <div>Shop</div>
            <div>Downloads</div>
          </div>
          
          <img src={qrcode} alt='qr code' className='qr-code' />
{/*           
          <div className="hamburger" onClick={()=>setHambergActive(!hambergActive)}>
            <span className='bar' ></span>
            <span className='bar' ></span>
            <span className='bar' ></span>
          </div> */}


        </nav>
        {/* <Header /> */}


        <div className='first-section'>
          <div className='first-sub-section'>
            <div> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div>
            <img src={playstorebutton} alt='play store button' className='playstorebutton'/>
            <img src={appstore} alt='appstore button' />
            </div>
          </div>
          <div className='first-sub-section'>
            <img src={threephones} alt='three phones' className='threephones' />
          </div>
        </div>


        <div className='second-section'>
          <div className='second-section-welcome'>Welcome</div>
          <div className='second-section-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</div>
          
          <div className='second-sub-parent'>
            <div className='second-sub-section second-sub-section-1'>
              <div className='second-sub-heading'>Making new friends is as simple as:</div>
              <span className='red-list'>
                <div>
                  <img src={redarrow} alt=''></img> Hanging out for lunch
                </div>
                <div>
                  <img src={redarrow} alt=''></img> Enjoying a few good books
                </div>
                <div>
                  <img src={redarrow} alt=''></img> Exploring the city
                </div>
                <div>
                  <img src={redarrow} alt=''></img> Catching a movie together
                </div>
                <div>
                  <img src={redarrow} alt=''></img> Grabbing a few drinks
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
            <div>Are you Ready for</div>
            <div>Download</div>
            <div>
            <img src={playstorebutton} alt='play store button' className='playstorebutton'/>
            <img src={appstore} alt='appstore button' />
            </div>
          </div>
          
          <div className='third-sub-section-2'>
            <img src={twophones} alt=''/>
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
          <div>© 2022 WIDAR produced by <span className='toctic'>Toctic</span>, Inc.</div>
          <div>Privacy Policy | Terms of Service (Global) | Terms of Service (Japan)</div>
          
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
