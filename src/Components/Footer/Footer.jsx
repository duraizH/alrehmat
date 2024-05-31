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
          >
            <FontAwesomeIcon
              icon={faInstagram}
              bounce
              size="2xl"
              style={{ color: "#cba664" }}
            />
          </a>
          <a href="https://www.facebook.com/alrehmatdeveloper" target="_blank">
            <FontAwesomeIcon
              icon={faFacebook}
              bounce
              size="2xl"
              style={{ color: "#cba664" }}
            />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.331 3.608 1.307.976.975 1.245 2.242 1.307 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.849c-.062 1.366-.331 2.633-1.307 3.608-.975.976-2.242 1.245-3.608 1.307-1.265.058-1.645.069-4.849.069s-3.584-.012-4.849-.07c-1.366-.062-2.633-.331-3.608-1.307-.976-.975-1.245-2.242-1.307-3.608-.058-1.265-.069-1.645-.069-4.849s.012-3.584.07-4.849c.062-1.366.331-2.633 1.307-3.608.975-.976 2.242-1.245 3.608-1.307 1.265-.058 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.011-4.947.072-1.281.062-2.419.331-3.363 1.276-.944.944-1.213 2.082-1.275 3.363-.061 1.28-.072 1.688-.072 4.947s.011 3.667.072 4.947c.062 1.281.331 2.419 1.276 3.363.944.944 2.082 1.213 3.363 1.275 1.28.061 1.688.072 4.947.072s3.667-.011 4.947-.072c1.281-.062 2.419-.331 3.363-1.276.944-.944 1.213-2.082 1.275-3.363.061-1.28.072-1.688.072-4.947s-.011-3.667-.072-4.947c-.062-1.281-.331-2.419-1.276-3.363-.944-.944-2.082-1.213-3.363-1.275-1.28-.061-1.688-.072-4.947-.072zm0 5.838c-3.405 0-6.162 2.757-6.162 6.162s2.757 6.162 6.162 6.162 6.162-2.757 6.162-6.162-2.757-6.162-6.162-6.162zm0 10.324c-2.299 0-4.162-1.863-4.162-4.162s1.863-4.162 4.162-4.162 4.162 1.863 4.162 4.162-1.863 4.162-4.162 4.162zm6.406-11.845c-.796 0-1.442.646-1.442 1.442s.646 1.442 1.442 1.442 1.442-.646 1.442-1.442-.646-1.442-1.442-1.442z" />
            </svg> */}
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
          >
            Al-Rehmat Developers
          </a>
        </p>
        <p>
          Developed by{" "}
          <a
            className="link link-hover"
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/duraiz-hanjra-6a982b245/"
          >
            Duraiz Haider
          </a>
        </p>
      </aside>
    </footer>
  );
}
export default Footer;