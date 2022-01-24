import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import * as BsFacebook from "react-icons/bs";
import * as GrInstagram from "react-icons/gr";
import * as BsLinkedin from "react-icons/bs";
import * as AiFillGithub from "react-icons/ai";

const Footer = () => {
  return (
    <div style={{ marginTop: "5" }}>
      <footer class="footer">
        <div className="container ">
          <div class="row">
            <div class="footer-col">
              <h4>get in Touch</h4>
              <ul>
                <li>
                  <Link to="#">FAQ</Link>
                </li>
                <li>
                  <Link to="#">About us</Link>
                </li>
                <li>
                  <Link to="#">Payment Options</Link>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Navigate</h4>
              <ul>
                <li>
                  <Link to="/explore">Explore</Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/great.promise00/"
                >
                  <BsFacebook.BsFacebook className="social-main" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/pro-official"
                >
                  <AiFillGithub.AiFillGithub className="social-main" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/promise.great00/"
                >
                  <GrInstagram.GrInstagram className="social-main" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/promise-ghosh-chowdhury/"
                >
                  <BsLinkedin.BsLinkedin className="social-main" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
