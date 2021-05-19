export default (
  state = {
    who: "Mohit",
  },
  action
) => {
  switch (action.type) {
    case "SIMPLE_ACTION":
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};
