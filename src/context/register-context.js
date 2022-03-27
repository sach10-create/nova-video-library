import { useContext, useReducer, createContext } from "react";

const RegisterContext = createContext({
  name: "",
  email: "",
  password: "",
});

const RegisterProvider = ({ children }) => {
  const [registerState, registerDispatch] = useReducer(
    (state, action) => {
      return {
        ...state,
        ...action,
      };
    },
    {
      name: "",
      email: "",
      password: "",
    }
  );
  return (
    <RegisterContext.Provider value={{ registerState, registerDispatch }}>
      {children}
    </RegisterContext.Provider>
  );
};

const useRegister = () => useContext(RegisterContext);

export { useRegister, RegisterProvider };
