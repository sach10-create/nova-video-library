import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-shadow header-comp">
      <div className="header-container-1 d-flex justify-content-space-between align-center">
        <div className="left-container d-flex">
          <div className="logo-container">
            <Link to="/" className="no-link">
              <img
                src="https://raw.githubusercontent.com/sach10-create/Nova-Barca-Store/dev/assets/nova-logo-dark.png"
                alt="Logo"
                className="logo"
              />
              <p className="logo-p"> Video Library </p>
            </Link>
          </div>
        </div>
        <div className="social-icon-container">
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
          <i
            className="fas fa-sun theme-icon social"
            aria-label="dark/light theme icon"
          ></i>
        </div>
      </div>
    </header>
  );
};
export { Header };
