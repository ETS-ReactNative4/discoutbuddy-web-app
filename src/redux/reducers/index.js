import {combineReducers} from 'redux';
import authReducer from './authReducer';
import storeReducer from './storeReducer';
import productReducer from './productReducer';
import categoryReducer from './categoryReducer';


export default combineReducers({
    auth: authReducer,
    stores: storeReducer,
    products: productReducer,
    categories: categoryReducer,
});