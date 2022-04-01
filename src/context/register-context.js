import { useContext, useReducer, createContext } from "react";
import { registerReducer } from "../reducers";

const RegisterContext = createContext({
  name: "",
  email: "",
  password: "",
});

const RegisterProvider = ({ children }) => {
  const [registerState, registerDispatch] = useReducer(registerReducer, {
    name: "",
    email: "",
    password: "",
  });

  return (
    <RegisterContext.Provider value={{ registerState, registerDispatch }}>
      {children}
    </RegisterContext.Provider>
  );
};

const useRegister = () => useContext(RegisterContext);

export { useRegister, RegisterProvider };
