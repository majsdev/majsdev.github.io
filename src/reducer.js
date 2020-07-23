import { NUMBER_OF_ROUTES } from "./routes";

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT":
      const { isMenuOpened } = state;
      if (!isMenuOpened) {
        return {
          ...state,
          isMenuOpened: true,
          indexOfSelectedRoute: 0
        }
      } else {
        return {
          ...state,
          indexOfSelectedRoute: (state.indexOfSelectedRoute + 1) % NUMBER_OF_ROUTES
        }
      }
    case "ENTER":
      return state;
    case "B":
      return state;
    case "A":
      return state;
    default:
      return state;
  }
};

export default reducer;
