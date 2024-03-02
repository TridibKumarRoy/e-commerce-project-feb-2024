import React from 'react'
import './footer.css'

export const Foooter = () => {
  return (
    <>
    <footer>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-top-logo">
            <img src="\src\assets\logo.png" alt="logo" srcset="" />
          </div>
          <div className="footer-top-button">
            <button>SUPPORT <span>&#8599;</span></button>
          </div>
        </div>

        <div className="footer-middle textcol">
          <div className="footer-middle-child">
            <div>
              <h3>Get to Know Us</h3>
              <ul>
                <li><a href="">About Us</a></li>
                <li><a href="">Careers</a></li>
                <li><a href="">Press Releases</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-middle-child">
            <div>
              <h3>Connect with Us</h3>
              <ul>
                <li><a href="">Facebook</a></li>
                <li><a href="">Twitter</a></li>
                <li><a href="">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-middle-child">
            <div>
              <h3>Make Money with Us</h3>
              <ul>
                <li><a href="">Sell on Bhoom</a></li>
                <li><a href="">provide services</a></li>
                <li><a href="">Advertise Your Products</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-middle-child">
            <div>
              <h3>Let Us Help You</h3>
              <ul>
                <li><a href="">Your Account</a></li>
                <li><a href="">Returns Centre</a></li>
                <li><a href="">Help</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social">
            <h3 className="textcol">Social</h3>
            <div className="social-links">
              <div className="Instagram">
                <a href="#"><img src="/src/assets/Instagram.png" alt="" /></a>
              </div>
              <div className="Facebook">
                <a href="#"><img src="/src/assets/Facebook.png" alt="" /></a>
              </div>
              <div className="Twitter">
                <a href="#"><img src="/src/assets/X.png" alt="" /></a>
              </div>
              <div className="youtube">
                <a href="#"><img src="/src/assets/yt.png" alt="" /></a>
              </div>
              <div className="linkedin">
                <a href="#"><img src="/src/assets/linkedin.png" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyr">
        &#169; Copyright 2024 Bhoom LLC. <a href=""> Privacy Policy</a>
      </div>
    </footer>
    </>
  )
}
