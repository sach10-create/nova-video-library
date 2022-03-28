import { Link } from "react-router-dom";
import { useAuth } from "../../context";

const Navbar = ({ props }) => {
  const { authState } = useAuth();
  return (
    <nav className="header-shadow">
      <ul className="list-components">
        <li>
          <Link to="/" className="side-nav-link">
            <i className="fa-solid fa-house side-nav-icon"></i>
            Home
          </Link>
        </li>
        <li>
          <Link to="/explore" className="side-nav-link">
            <i className="fa-solid fa-compass side-nav-icon"></i>
            Explore
          </Link>
        </li>
        <li>{ authState.token != null ?
          <Link to="/liked" className="side-nav-link">
            <i className="fa-solid fa-thumbs-up side-nav-icon"></i>
            Liked Videos
          </Link>:
          <Link to="/auth" state = {{state : "/liked"}} className="side-nav-link">
          <i className="fa-solid fa-thumbs-up side-nav-icon"></i>
          Liked Videos
        </Link>
}
        </li>
        <li>{ authState.token != null ?
          <Link to="/playlist" className="side-nav-link">
            <i className="fas fa-folder-plus side-nav-icon"></i>
            Playlists
          </Link>:
          <Link to="/auth" state = {{ state : "/playlist" }} className="side-nav-link">
          <i className="fas fa-folder-plus side-nav-icon"></i>
          Playlists
        </Link>
}
        </li>
        <li>
          {authState.token != null ? (
            <Link to="/watchlater" className="side-nav-link">
              <i className="fa-solid fa-clock side-nav-icon"> </i>
              Watch Later
            </Link>
          ) : (
            <Link
              to="/auth"
              state={{ state: "/watchlater" }}
              className="side-nav-link"
            >
              <i className="fa-solid fa-clock side-nav-icon"> </i>
              Watch Later
            </Link>
          )}
        </li>
        <li>
          {authState.token != null ? (
            <Link to="/history" className="side-nav-link">
              <i className="fa-solid fa-clock-rotate-left side-nav-icon"> </i>
              History
            </Link>
          ) : (
            <Link
              to="/auth"
              state={{ state: "/history" }}
              className="side-nav-link"
            >
              <i className="fa-solid fa-clock-rotate-left side-nav-icon"> </i>
              History
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
