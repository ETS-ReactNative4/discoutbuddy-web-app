import { FETCH_USER, FETCH_PRODUCT,FETCH_STORE,FETCH_CATEGORY } from './types';

const base = "http://api.rookies.co.za";

    export const fetchUser = () => async dispatch => {
       const res = await fetch('/user/', {credentials: "include"});
       const data = await res.json();
       console.log("user", data.user)
       
        dispatch({type: FETCH_USER, payload: data.user});
    };
    
    export const fetchStore = () => async dispatch =>{
        const res = await fetch('/api/store');
        const data = await res.json();
        
        dispatch({type: FETCH_STORE, payload: data.data});
    }

    export const fetchProduct = () => async dispatch =>{
        const res = await fetch('/api/product');
        const data = await res.json();
        console.log("products", data)
        dispatch({type: FETCH_PRODUCT, payload: data});
    }

    export const fetchCategory = () => async dispatch =>{
        const res = await fetch('/api/category');
        const data = await res.json();

        dispatch({type: FETCH_CATEGORY, payload: data});
    }


