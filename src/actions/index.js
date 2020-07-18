let isMenuOpened = false;
// export const setIsMenuOpened () 

export const openMenu = () => ({
  type: 'OPEN_MENU'
})

export const closeMenu = () => ({
  type: 'CLOSE_MENU'
})

export const setIndexOfSelectedMenuItem = index => ({
  type: 'SET_INDEX_OF_SELECTED_MENU_ITEM',
  index
}); 

export const setIndexOfSelectableItem = index => ({
  type: 'SET_INDEX_OF_SELECTABLE_ITEM',
  index
});

export const setNumberOfSelectableItems = numberOfSelectableItems => ({
    type: 'SET_NUMBER_OF_SELECTABLE_ITEMS',
    numberOfSelectableItems
});
