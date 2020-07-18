const content = (state = {}, action) => {
    switch (action.type) {
        case 'SET_INDEX_OF_SELECTABLE_ITEM':
            return {
                ...state,
                indexOfSelectableItem: action.indexOfSelectableItem
            }
        case 'SET_NUMBER_OF_SELECTABLE_ITEMS':
            return {
                ...state,
                numberOfSelectableItems: action.numberOfSelectableItems
            }
      default:
        return state
    }
  }
  
  export default content;
  