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
    default:
      return authState;
  }
};

export { authReducer };
