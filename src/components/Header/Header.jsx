const Header = () => {
  return (
    <header className="header-shadow header-comp">
      <div className="header-container-1 d-flex justify-content-space-between align-center">
        <div className="left-container d-flex">
          <div className="logo-container">
            <a href="https://ui-nova.netlify.app/" className="no-link">
              <img
                src="https://raw.githubusercontent.com/sach10-create/Nova-Barca-Store/dev/assets/nova-logo-dark.png"
                alt="Logo"
                className="logo"
              />
              <p className="logo-p">Shine Together</p>
            </a>
          </div>
          <div className="header-container d-flex justify-content-flex-start align-center">
            <a href="https://ui-nova.netlify.app" className="no-link">
              <p className="cursor-pointer">Home</p>
            </a>
            <a
              href="https://ui-nova.netlify.app/components/alerts/alerts.html"
              className="no-link"
            >
              <p className="cursor-pointer">Documentation</p>
            </a>
          </div>
        </div>
        <div className="social-icon-container">
          <a
            href="https://github.com/sach10-create"
            target="_blank"
            aria-label="View Github Profile"
            className="no-link"
          >
            <i className="fab fa-github social"></i>
          </a>
          <a
            href="https://twitter.com/thisis_sachin_p"
            target="_blank"
            aria-label="View Twitter Profile"
            className="no-link"
          >
            <i className="fab fa-twitter social"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sachin-patekar-2199911a3/"
            target="_blank"
            aria-label="View LinkedIn Profile"
            className="no-link"
          >
            <i className="fab fa-linkedin-in social"></i>
          </a>
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
