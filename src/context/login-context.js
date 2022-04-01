import { createContext, useContext, useReducer } from "react";
import { loginReducer } from "../reducers";

const LoginContext = createContext({ email: "", password: "" });

const LoginProvider = ({ children }) => {
  const [loginState, loginDispatch] = useReducer(loginReducer, {
    email: "",
    password: "",
  });

  return (
    <LoginContext.Provider value={{ loginState, loginDispatch }}>
      {children}
    </LoginContext.Provider>
  );
};

const useLogin = () => useContext(LoginContext);

export { useLogin, LoginProvider };
