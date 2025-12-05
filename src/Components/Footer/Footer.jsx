import { Link } from "react-router-dom";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faFacebook,faInstagram } from "@fortawesome/free-brands-svg-icons";



const Footer = () => {
     const currentDate = new Date();
     const currentYear = currentDate.getFullYear();

  return (
    <footer className="footer footer-center p-10  text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <Link to="/about" className="link link-hover">
          About us
        </Link>
        <Link to="/projects" className="link link-hover">
          Projects
        </Link>
        <Link to="/registration" className="link link-hover">
          Dealers Registration
        </Link>
        <Link to="/contact" className="link link-hover">
          Contact Us
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.instagram.com/al.rehmat.tm?igsh=MjQ4MXZyaDR5dWxs"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Al-Rehmat on Instagram"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              bounce
              size="2xl"
              style={{ color: "#cba664" }}
            />
          </a>
          <a 
            href="https://www.facebook.com/alrehmatdeveloper" 
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Al-Rehmat on Facebook"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              bounce
              size="2xl"
              style={{ color: "#cba664" }}
            />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {currentYear} - All right reserved by{" "}
          <a
            className="link link-hover"
            href="https://www.facebook.com/alrehmatdeveloper"
            target="_blank"
            rel="noopener noreferrer"
            title="Al-Rehmat Developers Facebook"
          >
            Al-Rehmat Developers
          </a>
        </p>
        <p>
          Developed by{" "}
          <a
            className="link link-hover"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/duraiz-hanjra-6a982b245/"
            title="Visit Duraiz Haider on LinkedIn"
          >
            Duraiz Haider
          </a>
        </p>
      </aside>
    </footer>
  );
}
export default Footer;