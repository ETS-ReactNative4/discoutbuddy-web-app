import { FETCH_USER, FETCH_POST, FETCH_FIXTURE, FETCH_NEWS, FETCH_TOURNAMENT } from './types';

export const fetchUser = () => async dispatch => {
       const res = await fetch('/user/get-current-user', {credentials: "include"});
       const data = await res.json();
       //console.log("data", data.user)
       
        dispatch({type: FETCH_USER, payload: data.user});
    };

    export const fetchPost = () => async dispatch =>{
        const res = await fetch('/api/post', {credentials: "include"});
        const data = await res.json();

        dispatch({type: FETCH_POST, payload: data.data});
    }
    export const fetchNews = () => async dispatch =>{
        const res = await fetch('/api/news', {credentials: "include"});
        const data = await res.json();

        dispatch({type: FETCH_NEWS, payload: data});
    }
    export const fetchFixture = () => async dispatch =>{
        const res = await fetch('/api/fixture', {credentials: "include"});
        const data = await res.json();

        dispatch({type: FETCH_FIXTURE, payload: data});
    }
    export const fetchTournament = () => async dispatch =>{
        const res = await fetch('/api/tournament', {credentials: "include"});
        const data = await res.json();

        dispatch({type: FETCH_TOURNAMENT, payload: data});
    }