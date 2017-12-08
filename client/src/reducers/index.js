import {combineReducers} from 'redux';
import username from './username';
import savedHouses from './savedHouses';

const rootReducer = combineReducers({
    savedHouses,
    username
})

export default rootReducer;
