import React, {Fragment, useEffect} from 'react';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";
import {Provider} from 'react-redux';
import store from './store';
//For routes.
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


//Brings in the main materialize css.
import 'materialize-css/dist/css/materialize.min.css'; 

//Brings in the main materialize css.
import M from 'materialize-css/dist/js/materialize.min.js';  

import './App.css';

const App = () => {
  useEffect(() => {
    //Initialize Materialize JS
    M.AutoInit(); 
  })
  
  return ( 

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
