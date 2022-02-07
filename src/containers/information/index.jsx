import React, { useState, useEffect } from "react";
import avatar from "../../assets/img/chan-dung-edit.png";
import avatarIcon from "../../assets/img/avatar.webp";
import "./styles.css";
import { Link } from "react-router-dom";
import Greeting from "../../components/greeting";
import { FaArrowCircleUp, FaFacebookMessenger } from "react-icons/fa";
import Spinner from "../../components/Spinner";

const Information = () => {
  const [visible, setVisible] = useState(false);
  const [spinner, setSpinner] = useState(true);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 2300);
  }, []);

  return (
    <div className="app">
      {spinner ? (
        <Spinner />
      ) : (
        <>
          <div className="scrollToTop">
            <FaArrowCircleUp
              onClick={scrollToTop}
              style={{ display: visible ? "inline" : "none" }}
            />
          </div>
          <div className="intro-wrapper1">
            <div className="nav-wrapper">
              <div className="nav-wrapper-left__dots-wrapper">
                <div className="browser-dot dot-1"></div>
                <div className="browser-dot dot-2"></div>
                <div className="browser-dot dot-3"></div>
              </div>
            </div>

            <div className="information">
              <img src={avatar} alt="avatar" />
              <h2>DR - Aya Ahmed </h2>

              <div className="social">
                <Link to="/portfolio">
                  <div className="icon">
                    <img src={avatarIcon} alt="website" />
                  </div>
                  <p>Portfolio</p>
                  <div className=""></div>
                </Link>
              </div>
              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="/resume.pdf"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/nolan/50/open-resume.png"
                      alt="resume"
                    />
                  </div>
                  <p>Resume</p>
                  <div className=""></div>
                </a>
              </div>
              {/* <div className="social">
            <a
              rel="noopener noreferrer"
              target="__blank"
              href="https://github.com/mohamed4ahmed"
            >
              <div className="icon">
                <img
                  src="https://img.icons8.com/fluent/48/000000/github.png"
                  alt="github"
                />
              </div>
              <p>Github</p>
              <div className=""></div>
            </a>
          </div> */}

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="mailto:youyaahmed1731993@gmail.com"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/fluent/48/000000/gmail-new.png"
                      alt="email"
                    />
                  </div>
                  <p>Email</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="tel:+201065840807"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/fluent/48/000000/phone.png"
                      alt="phone"
                    />
                  </div>
                  <p>Phone Number EGY</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="tel:+966559456540"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/fluent/48/000000/phone.png"
                      alt="phone"
                    />
                  </div>
                  <p>Phone Number KSA</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="https://www.linkedin.com"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/color/48/000000/linkedin.png"
                      alt="linkedin"
                    />
                  </div>
                  <p>Linkedin</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="https://www.facebook.com/ayaahmedabdelsalam"
                  aria-label="Facebook"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
                      alt="facebook"
                    />
                  </div>
                  <p>Facebook</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="https://www.facebook.com/messages/t/100006387813010"
                  aria-label="Facebook"
                >
                  <div className="icon">
                    <FaFacebookMessenger />
                  </div>
                  <p>Messenger</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="https://www.instagram.com/youyaahmed/"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
                      alt="instagram"
                    />
                  </div>
                  <p>Instagram</p>
                  <div className=""></div>
                </a>
              </div>

              <Greeting />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Information;
