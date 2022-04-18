const loginReducer = (loginState, loginAction) => {
  switch (loginAction.type) {
    case "UPDATE_EMAIL":
      return { ...loginState, email: loginAction.email };
    case "UPDATE_PASSWORD":
      return {
        ...loginState,
        password: loginAction.password,
      };
    case "TEST_CREDENTIAL":
      return {
        ...loginState,
        email: loginAction.email,
        password: loginAction.password,
      };
      case "RESET":
        return {
          ...loginState,
          email: "",
          password: "",
        };
    default:
      return loginState;
  }
};

const registerReducer = (registerState, registerAction) => {
  switch (registerAction.type) {
    case "UPDATE_EMAIL":
      return { ...registerState, email: registerAction.email };
    case "UPDATE_NAME":
      return { ...registerState, name: registerAction.name };
    case "UPDATE_PASSWORD":
      return {
        ...registerState,
        password: registerAction.password,
      };
      case "RESET":
        return {
          ...registerState,
          email: "",
          password: "",
          firstName: "",
        };
    default:
      return registerState;
  }
};

const authReducer = (authState, authAction) => {
  switch (authAction.type) {
    case "UPDATE_TOKEN":
      return { ...authState, token: authAction.token };
    case "UPDATE_EMAIL":
      return { ...authState, email: authAction.email };
    case "UPDATE_NAME":
      return { ...authState, name: authAction.name };
    case "UPDATE_USER":
      return { ...authState, ...authAction };
      case "LOGOUT":
        return {
          ...authState,
          token: "",
          firstName: "",
          lastName: "",
          email: "",
        };
    default:
      return authState;
  }
};

export { authReducer, loginReducer, registerReducer };
