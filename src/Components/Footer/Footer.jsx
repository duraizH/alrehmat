import { Link } from "react-router-dom";


const Footer = () => {
     const currentDate = new Date();
     const currentYear = currentDate.getFullYear();

  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
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
          <a href="https://www.facebook.com/alrehmatdeveloper" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
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