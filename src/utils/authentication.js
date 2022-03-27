import axios from "axios";

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
      localStorage.setItem("name", response.data.foundUser.name);
      navigate(location.state.state);
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
      navigate(location.state.state);
    } catch (error) {
      console.log(error);
    }
  })();
};

export { loginHandler, registerHandler };
