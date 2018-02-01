import { FETCH_USER, FETCH_PRODUCT,FETCH_STORE,FETCH_CATEGORY,SET_USER,FETCH_REVIEW } from './types';

const base = "http://api.rookies.co.za";

    export const fetchUser = () => async dispatch => {
       const res = await fetch('/api/current_user', {credentials: "include"});
       const data = await res.json();
       console.log('user inside fetchuser',data);
       if(Object.keys(data).length === 0 && data.constructor === Object){
        dispatch({type: FETCH_USER, payload: false});
       }else{
        dispatch({type: FETCH_USER, payload: data});
       }
       
    };
    
export  const setUser = (payload)=>async dispatch =>{
    dispatch({type:SET_USER,payload});

}

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

    export const fetchReview = () => async dispatch =>{
        const res = await fetch('/api/review');
        const data = await res.json();

        dispatch({type: FETCH_REVIEW, payload: data});
    }

    

