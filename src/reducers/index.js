import {combineReducers} from 'redux';
import authReducer from './authReducer';
import postReducer from './postReducer';
import fixtureReducer from './fixtureReducer';
import newsReducer from './newsReducer';
import tournamentReducer from './tournamentReducer';

export default combineReducers({
    auth: authReducer,
    posts: postReducer,
    news: newsReducer,
    fixtures: fixtureReducer,
    tournaments: tournamentReducer
});