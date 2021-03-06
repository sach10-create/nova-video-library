import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="header-shadow footer-comp">
      <div className="social-icon-container footer">
        <Link
          to="https://github.com/sach10-create"
          target="_blank"
          aria-label="View Github Profile"
          className="no-link"
        >
          <i className="fab fa-github social"></i>
        </Link>
        <Link
          to="https://twitter.com/thisis_sachin_p"
          target="_blank"
          aria-label="View Twitter Profile"
          className="no-link"
        >
          <i className="fab fa-twitter social"></i>
        </Link>
        <Link
          to="https://www.linkedin.com/in/sachin-patekar-2199911a3/"
          target="_blank"
          aria-label="View LinkedIn Profile"
          className="no-link"
        >
          <i className="fab fa-linkedin-in social"></i>
        </Link>
      </div>
      <p className="footer-p">© 2022 Nova UI</p>
    </footer>
  );
};

export { Footer };
