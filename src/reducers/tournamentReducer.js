import {FETCH_TOURNAMENT} from '../actions/types';

export default function(state = [], action){
    switch(action.type){
        case FETCH_TOURNAMENT:
        return action.payload || false;
         default:
        return state;
    }
}