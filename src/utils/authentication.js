import axios from "axios";
import { Navigate, useLocation } from "react-router-dom";
const RequireAuth = ({ children }) => {
  const location = useLocation();
  return localStorage.getItem("token") ? (
    children
  ) : (
    <Navigate to="/auth" state={{ from: location }} replace />
  );
};

const loginHandler = (e, location, navigate, loginState, authDispatch) => {
  e.preventDefault();
  const loginInfo = { email: loginState.email, password: loginState.password };
  (async () => {
    try {
      const response = await axios.post(`/api/auth/login`, loginInfo);
      // saving the encodedToken in the localStorage
      authDispatch({
        token: response.data.encodedToken,
        name: response.data.foundUser.name,
        email: response.data.foundUser.email,
        type: "UPDATE_USER",
      });
      localStorage.setItem("token", response.data.encodedToken);
      localStorage.setItem("email", response.data.foundUser.email);
      localStorage.setItem("name", response.data.foundUser.firstName);
      navigate(location?.state?.from?.pathname);
    } catch (error) {
      console.log(error);
    }
  })();
};

const registerHandler = (
  e,
  location,
  navigate,
  registerState,
  authDispatch
) => {
  e.preventDefault();
  const registerInfo = {
    name: registerState.name,
    email: registerState.email,
    password: registerState.password,
  };
  (async () => {
    try {
      const response = await axios.post(`/api/auth/signup`, registerInfo);
      // saving the encodedToken in the localStorage
      authDispatch({
        token: response.data.encodedToken,
        name: response.data.createdUser.name,
        email: response.data.createdUser.email,
        type: "UPDATE_USER",
      });
      localStorage.setItem("token", response.data.encodedToken);
      localStorage.setItem("email", response.data.createdUser.email);
      localStorage.setItem("name", response.data.createdUser.name);
      navigate(location?.state?.from?.pathname);
    } catch (error) {
      console.log(error);
    }
  })();
};

export { loginHandler, registerHandler , RequireAuth};
