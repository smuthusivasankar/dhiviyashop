import {combineReducers} from 'redux';
import user from './reducers/user';
import cartReducer from './reducers/cart';
export default combineReducers({
    user: () =>({}),
    cart: cartReducer

});