//{createStore}creates the store, {applyMiddleware} is the Redux Thunk - 
// Redux Thunk is middle ware that allows us to make asynchronous functions inside of our actions. 
import {createStore, applyMiddleware} from 'redux';
//Dev tools extension. Needed so that it can access the store.  
import {composeWithDevTools} from 'redux-devtools-extension';
// Bring in the middleware Redux Thunk.
import thunk from 'redux-thunk';
//The way that reducers work in Redux is that there is a rootReducer any other reducer is brought into that root & then into this file.
import rootReducer from './reducers'
//Setting the initial app level state to an empty object.
const initialState = {};
//Created a variable >>[] in an array<< for any middleware that is being used, in this case it is just Redux Thunk.
const middleware = [thunk];

//The code creating the store itself and what it is taking in. 
// Which is the Reducer you're working with, the Initial State, and any Middleware. The dev tools composeWithDevTools 
//then passes in middle wear applyMiddleware (which was brought in by Redux )and the spread operator with that middleware array.
const store = createStore(
    rootReducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
    );

    export default store


