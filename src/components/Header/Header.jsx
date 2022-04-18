import { Link, useLocation } from "react-router-dom";
import { useAuth, useTheme , useHistory, useLikedVideos, useLogin, useRegister, useWatchLater, usePlaylist } from "../../context";

const Header = () => {
  const { themeIcon, handleSetTheme } = useTheme();
  const { authDispatch, authState } = useAuth();
  const { historyDispatch } = useHistory();
  const { likedVideosDispatch } = useLikedVideos();
  const { loginDispatch } = useLogin();
  const { registerDispatch } = useRegister();
  const { watchLaterDispatch} = useWatchLater();
   const {playlistDispatch} = usePlaylist();
  const handleLogout = () => {
    localStorage.clear();
    authDispatch({ type: "LOGOUT" });
    historyDispatch({ type: "RESET" });
    likedVideosDispatch({ type: "RESET" });
    loginDispatch({ type: "RESET" });
    registerDispatch({ type: "RESET" });
    watchLaterDispatch({ type: "RESET" });
    playlistDispatch({ type: "RESET" });
  };

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

          <Link to="/auth" className="no-link">
            <i className="fas fa-user header-img" onClick={handleLogout}>
             <p className="h6-tag"> {authState.token ? "Logout" : "SignIn"} </p>
            </i>
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
            className={`fas fa-${themeIcon} theme-icon social`}
            aria-label="dark/light theme icon"
            onClick={handleSetTheme}
          ></i>
        </div>
      </div>
    </header>
  );
};
export { Header };
