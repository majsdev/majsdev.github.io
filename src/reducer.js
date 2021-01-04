import { NUMBER_OF_ROUTES } from "./routes";

const reducer = (state, action) => {
  const {
    isMenuOpened,
    numOfSelectableItems,
    indexOfSelectedRoute,
    indexOfSelectableItem,
  } = state;
  switch (action.type) {
    case "SELECT":
      if (!isMenuOpened) {
        return {
          ...state,
          isMenuOpened: true,
          indexOfSelectedRoute: 0,
        };
      } else {
        return {
          ...state,
          indexOfSelectedRoute: (indexOfSelectedRoute + 1) % NUMBER_OF_ROUTES,
        };
      }
    case "MOUSE_SELECT_MENU":
      if (isMenuOpened) {
        return {
          ...state,
          indexOfSelectedRoute: action.index,
        };
      }
      break;
    case "MOUSE_SELECT_ITEM":
      if (numOfSelectableItems > 0) {
        return {
          ...state,
          indexOfSelectableItem: action.index,
        };
      }
      break;
    case "ENTER":
      return state;
    case "CLOSE_MENU" /* B */:
      return {
        ...state,
        isMenuOpened: false,
        indexOfSelectedRoute: 0,
      };
    case "BACK" /* B */:
      return state;
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
      break;
    case "DOWN":
      if (!isMenuOpened && numOfSelectableItems > 0) {
        return {
          ...state,
          indexOfSelectableItem:
            (indexOfSelectableItem + 1) % numOfSelectableItems,
        };
      }
      break;
    case "LEFT":
      return state;
    case "RIGHT":
      return state;
    case "SET_NUM_OF_SELECTABLE_ITEMS":
      return {
        ...state,
        numOfSelectableItems: action.numOfSelectableItems,
      };
    case "SET_ROUTES_OF_SELECTABLE_ITEMS":
      return {
        ...state,
        routesOfSelectableItems: [...action.routesOfSelectableItems],
      };
    case "SET_INDEX_OF_SELECTABLE_ITEM":
      return {
        ...state,
        indexOfSelectableItem: action.indexOfSelectableItem,
      };
    default:
      return state;
  }
};

export default reducer;
