// This is the ROOT reducer.

import {combineReducers} from "redux";
import logReducer from './logReducer';
import techReducer from './techReducer';


export default combineReducers({
    // Note: log is what I'm calling this for the log part of the state application. 
    log: logReducer,
    tech: techReducer

});
