import { combineReducers } from 'redux';
import cartReducer from './reducers/cart';

export default combineReducers({
    users: ()=>({}),
    cart: cartReducer,
})
