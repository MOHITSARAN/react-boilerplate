export default (
  state = {
    loggedIn: false,
  },
  action
) => {
  switch (action.type) {
    case "LOGIN":
      return {
        result: action.payload,
      };
    case "LOGOUT":
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};
