
// The import fetches the functionality & actions from Types.js.
import {GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG, UPDATE_LOG, SEARCH_LOGS, SET_CURRENT, CLEAR_CURRENT} from '../actions/types';

//Gets logs from server. The async dispatch allows the app to make a request the backend then wait on the response and 
// then dispatch to the Reducer.
export const getLogs = () => async dispatch => {
    try {
        setLoading();
        //Fetch request.
        const res = await fetch('/logs')
        //Get data.
        const data = await res.json();
        //Dispatch object to Reducer. 
        dispatch({
            type: GET_LOGS,
            payload: data
        });
    } catch (err) {
        dispatch ({
            type: LOGS_ERROR,
            payload: err.response.statusText
        });
        }
};

//Adds a new log
export const addLog = (log) => async dispatch => {
    try {
        setLoading();
        //Passing in an object.
        const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json();

        dispatch({
            type: ADD_LOG,
            payload: data
        });
    } catch (err) {
        dispatch ({
            type: LOGS_ERROR,
            payload: err.response.statusText
        });
        }
};

//Deletes log from server. Taking in an id so it knows which one to delete. 
export const deleteLog = (id) => async dispatch => {
    try {
        setLoading();

        await fetch(`/logs/${id}`,{
            method: 'DELETE'
        })

        dispatch({
            type: DELETE_LOG,
            payload: id
        });
        } 
    
    catch (err) {
        dispatch ({
            type: LOGS_ERROR,
            payload: err.response.statusText
        });
                }
                                                    };

//Update log from server.
export const updateLog = log => async dispatch => {
    try {
        setLoading();

        const res = await fetch(`/logs/${log.id}`,{
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();

        dispatch({
            type: UPDATE_LOG,
            payload: data
        });
    } catch (err) {
        dispatch ({
            type: LOGS_ERROR,
            payload: err.response.statusText
        });
        }
};

//Search server logs.
export const searchLogs = (text) => async dispatch => {
    try {
        setLoading();

        const res = await fetch(`/logs?q=${text}`);
        const data = await res.json();

        dispatch({
            type: SEARCH_LOGS,
            payload: data
        });
    } catch (err) {
        dispatch ({
            type: LOGS_ERROR,
            payload: err.response.statusText
        });
        }
};

//Set current log.
export const setCurrent = log => {
    return {
        type: SET_CURRENT,
        payload: log
    }
}

//Clear current log.
export const clearCurrent = log => {
    return {
        type: CLEAR_CURRENT
    }
}

//Sets loading to true.
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};