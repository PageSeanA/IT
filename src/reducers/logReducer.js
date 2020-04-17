import {GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG, UPDATE_LOG, SEARCH_LOGS, SET_CURRENT, CLEAR_CURRENT} from '../actions/types';

const initialState = {
    logs: null,
    current: null,
    loading: false,
    error: null
}

//Get logs from server. Note: action.payload is the response from the server. 
export default (state = initialState, action) => {
    switch(action.type) {
        case GET_LOGS:
            return{
                ...state,
                logs: action.payload,
                loading: false
            };

        case ADD_LOG:
            return {
                ...state,
                logs: [...state.logs, action.payload],
                loading: false
            };
        case DELETE_LOG:
            return {
                ...state,
    // Below code meaning: For each log, let's compare the log id and if it's not equal to the payload (the id we want to delete)
                logs: state.logs.filter(log => log.id !==action.payload),
                loading: false
            };
        case UPDATE_LOG:
            return {
                ...state,
                logs: state.logs.map(log => log.id === action.payload.id ? action.payload : log)
            };
        
        case SEARCH_LOGS:
            return {
                ...state,
                logs: action.payload
            }
        
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            };
            case CLEAR_CURRENT:
                return {
                    ...state,
                    current: null
                };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
            case LOGS_ERROR:
                console.error(action.payload);
                return {
                    ...state,
                    error: action.payload
                };
        default:
        return state;
    }
};