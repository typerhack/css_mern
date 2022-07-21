import React from "react";
import logo2x from "../img/logo-green-2x.png";

const footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box u-margin-bottom-big">
        <img src={logo2x} alt="Full logo" className="footer__logo" />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Contact Us
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Careers
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Privacy Policy
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright u-text-justify">
            Built by{" "}
            <a href="https://letsdomarketing.ir" className="footer__link">
              Let's Do Marketing
            </a>{" "}
            for react frontend testing.{" "}
            <a href="#" className="footer__link">
              Website Design by advance CSS and Sass
            </a>{" "}
            Copyright &copy; by Daniel Dolatabadai. You are allowed to use this
            webpage for both commercial and personal use. But not as an original
            design. A credit to the original author is highly appreciated.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default footer;
