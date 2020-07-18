import { combineReducers } from 'redux';
import menu from './menu';
import content from './content';


export default combineReducers({
    menu,
    content
})
