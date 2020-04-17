import {GET_TECHS, ADD_TECH, DELETE_TECH, SET_LOADING, TECHS_ERROR, DELETE_LOG} from '../actions/types';

// create the initial state which will be an object with a text value. 

const initialState = {
    // This techs: null will e null by default but once it makes the request to the back in to get the text it will be an array.
    techs: null,
    loading: false,
    errors: null
}

//Create the function
export default (state = initialState, action) =>{
    switch(action.type) {

        case GET_TECHS:
            return {
                ...state,
                techs: action.payload,
                loading: false
            };
        case ADD_TECH:
            return {
                ...state,
                techs: [...state.techs, action.payload],
                loading: false
            };
        case DELETE_TECH:
            return {
                ...state,
                techs: state.techs.filter(tech => tech.id !== action.payload),
                loading: false            
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case TECHS_ERROR:
            console.log(action.payload);
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        default:
        return state;
    }

};