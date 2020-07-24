import { NUMBER_OF_ROUTES } from "./routes";

const reducer = (state, action) => {
  const { isMenuOpened, numOfSelectableItems, indexOfSelectedRoute, indexOfSelectableItem } = state;
  switch (action.type) {
    case "SELECT":
      if (!isMenuOpened) {
        console.dir(state)
        return {
          ...state,
          isMenuOpened: true,
          indexOfSelectedRoute: 0,
        };
      } else {
        return {
          ...state,
          indexOfSelectedRoute:
            (indexOfSelectedRoute + 1) % NUMBER_OF_ROUTES,
        };
      }
    case "MOUSE_SELECT":
      if (isMenuOpened) {
        return {
          ...state,
          indexOfSelectedRoute: action.index,
        };
      }
    case "ENTER":
      return state;
    case "B":
      if (isMenuOpened) {
        return {
          ...state,
          isMenuOpened: false,
          indexOfSelectedRoute: 0
        }
      }
    case "A":
      return state;
    case "UP":
      if (!isMenuOpened && numOfSelectableItems > 0) {
        /* + numOfSelectableItems because negative number mod positive 
        number will return negative */
        return {
          ...state,
          indexOfSelectableItem:
            (indexOfSelectableItem - 1 + numOfSelectableItems) %
            numOfSelectableItems,
        };
      }
    case "DOWN":
      if (!isMenuOpened && numOfSelectableItems > 0) {
        return {
          ...state,
          indexOfSelectableItem:
            (indexOfSelectableItem + 1) % numOfSelectableItems,
        };
      }
    case "LEFT":
      return state;
    case "RIGHT":
      return state;
    default:
      return state;
  }
};

export default reducer;
