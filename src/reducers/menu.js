const menu = (state = {}, action) => {
    switch (action.type) {
      case 'OPEN_MENU':
        return {
            ...state,
            isMenuOpened: true
        }
      case 'CLOSE_MENU':
        return {
            ...state,
            isMenuOpened: false
        }
      case 'SET_INDEX_OF_SELECTED_MENU_ITEM':
        return {
            ...state,
            indexOfSelectedMenuItem: action.indexOfSelectedMenuItem
        }
      default:
        return state
    }
  }
  
  export default menu;
  