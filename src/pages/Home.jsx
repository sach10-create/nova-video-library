import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>This is home page</h1>
      {/* <Link to="/products">Products</Link> */}
      {/* <Link to="/auth" state={{ state: "/" }}>
        Authentication
      </Link> */}
      <Link to="/" state={{ state: "/" }}>
        Explore
      </Link>
    </div>
  );
};

export { HomePage };
