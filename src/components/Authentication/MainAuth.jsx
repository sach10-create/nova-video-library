import { useLogin, useRegister, useAuth } from "../../context";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginHandler } from "../../utils";
import { registerHandler } from "../../utils/authentication";

const MainAuth = () => {
  const { loginState, loginDispatch } = useLogin();
  const { registerState, registerDispatch } = useRegister();
  const { authDispatch } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleEmailSignIn = (e) => {
    loginDispatch({ email: e.target.value, type: "UPDATE_EMAIL" });
  };

  const handlePasswordSignIn = (e) => {
    loginDispatch({ password: e.target.value, type: "UPDATE_PASSWORD" });
  };

  const [authTabsState, setAuthTabsState] = useState("login");

  const handleAuthTabs = (activeTab) => {
    setAuthTabsState(activeTab);
  };

  const handleEmailSignUp = (e) => {
    registerDispatch({ email: e.target.value, type: "UPDATE_EMAIL" });
  };

  const handlePasswordSignUp = (e) => {
    registerDispatch({ password: e.target.value, type: "UPDATE_PASSWORD" });
  };

  const handleNameSignUp = (e) => {
    registerDispatch({ name: e.target.value, type: "UPDATE_NAME" });
  };

  const testHandlerSignIn = (e) => {
    loginDispatch({
      email: "test@gmail.com",
      password: "test123",
      type: "TEST_CREDENTIAL",
    });
  };
  return (
    <section className="main-comp d-flex justify-content-center align-center flex-column">
      <div
        className={`container ${
          authTabsState === "login" ? "" : "right-panel-active"
        }`}
      >
        <div className="login-form-container sign-up-container">
          <form
            className="login-form d-flex align-center justify-content-center flex-column"
            onSubmit={(e) => {
              registerHandler(
                e,
                location,
                navigate,
                registerState,
                authDispatch
              );
            }}
          >
            <h1 className="h1-heading">Create Account</h1>
            <span className="alternate">
              or use your email for registration
            </span>
            <input
              className="inputs"
              type="text"
              placeholder="Name"
              onChange={handleNameSignUp}
            />
            <input
              className="inputs"
              type="email"
              placeholder="Email"
              onChange={handleEmailSignUp}
            />
            <input
              className="inputs"
              type="password"
              placeholder="Password"
              onChange={handlePasswordSignUp}
            />
            <button className="button">Sign Up</button>
          </form>
        </div>
        <div className="login-form-container sign-in-container">
          <form
            className="login-form d-flex align-center justify-content-center flex-column"
            onSubmit={(e) =>
              loginHandler(e, location, navigate, loginState, authDispatch)
            }
          >
            <h1 className="h1-heading">Sign in</h1>
            <span className="alternate">Use your account</span>
            <input
              className="inputs"
              type="email"
              placeholder="Email"
              onChange={handleEmailSignIn}
              value={loginState.email}
            />
            <input
              className="inputs"
              type="password"
              placeholder="Password"
              onChange={handlePasswordSignIn}
              value={loginState.password}
            />
            <a className="social justify-content-center align-center" href="#">
              Forgot your password?
            </a>
            <button className="button">Sign In</button>
            <button className="button test-button" onClick={testHandlerSignIn}>
              Test Crediantials
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel d-flex align-center justify-content-center flex-column overlay-left">
              <h1 className="h1-heading">Welcome Back!</h1>
              <p className="p-info">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost button"
                id="signIn"
                onClick={() => handleAuthTabs("login")}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right d-flex align-center justify-content-center flex-column">
              <h1 className="h1-heading">Hello, Friend!</h1>
              <p className="p-info">
                Enter your personal details and start journey with us
              </p>
              <button
                className="ghost button"
                id="signUp"
                onClick={() => handleAuthTabs("register")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { MainAuth };
