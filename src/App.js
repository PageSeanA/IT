
import React, {Fragment, useEffect} from 'react'; //Brought in the useEffect hook. Refer to code line 28 -> useEffect()
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";
//The Provider allows me to provide the app-level state {store} to React... 
// FYI, store is located at store.js That's from React-Redux.
import {Provider} from 'react-redux';
import store from './store';
//For routes.
import {BrowserRouter, Route} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';

//Brings in the main materialize css.
import 'materialize-css/dist/css/materialize.min.css'; 

//Brings in the modals for materialize css.
import M from 'materialize-css/dist/js/materialize.min.js';  
//Use for any additional css.
import './App.css';

const App = () => {
  useEffect(() => {
    // This initializes Materialize JavaScript. By using this Hook, it tells React that this component needs to do... 
    // something after render. In this case this will allow for the use of modals. 
    M.AutoInit(); 
  })
  
  return ( 
  //The Provider allows me to provide the app-level state {store} to React. FYI, store is located at store.js That's from React-Redux.
  <Provider store={store}>

  <BrowserRouter>
    <SearchBar /> 
    <Route exact path='/' component={Logs} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
  </BrowserRouter>

    <Fragment>
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
      </div>
    </Fragment>

  </Provider>

                    )};

export default App;
