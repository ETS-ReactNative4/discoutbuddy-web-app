import { FETCH_USER, FETCH_PRODUCT,FETCH_STORE,FETCH_CATEGORY } from './types';

const base = "http://api.rookies.co.za";

    export const fetchUser = () => async dispatch => {
       const res = await fetch('/api/current_user', {credentials: "include"});
       const data = await res.json();
       console.log(data);
       if(Object.keys(data).length === 0 && data.constructor === Object){
        dispatch({type: FETCH_USER, payload: false});
       }else{
        dispatch({type: FETCH_USER, payload: data});
       }
       
    };
    
    export const fetchStore = () => async dispatch =>{
        const res = await fetch('/api/store');
        const data = await res.json();
        
        dispatch({type: FETCH_STORE, payload: data.data});
    }

    export const fetchProduct = () => async dispatch =>{
        const res = await fetch('/api/product');
        const data = await res.json();
        
        dispatch({type: FETCH_PRODUCT, payload: data});
    }

    export const fetchCategory = () => async dispatch =>{
        const res = await fetch('/api/category');
        const data = await res.json();
    
        dispatch({type: FETCH_CATEGORY, payload: data});
    }

    

