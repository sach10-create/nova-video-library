import { createContext, useContext, useReducer } from "react";

const LoginContext = createContext({ email: "", password: "" });

const LoginProvider = ({ children }) => {
  const [loginState, loginDispatch] = useReducer(
    (state, action) => {
      return {
        ...state,
        ...action,
      };
    },
    { email: "", password: "" }
  );

  return (
    <LoginContext.Provider value={{ loginState, loginDispatch }}>
      {children}
    </LoginContext.Provider>
  );
};

const useLogin = () => useContext(LoginContext);

export { useLogin, LoginProvider };
