import React, {useRef} from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {searchLogs} from '../../actions/logActions';
import {Link, NavLink} from 'react-router-dom';

const SearchBar = ({searchLogs}) => {
  const text = useRef('');

  const onChange = e => {
    searchLogs(text.current.value);
  };

    return (

            // >>>>>>>>>>>>> The below code works but Search Box is off. <<<<<<<<<<<<<<<<<<<<

<nav style={{marginBottom: '-6px'}} className="orange darken-2 center">
  <div class="nav-wrapper">
    <a href="/" class="brand-logo"><i class="large material-icons green">directions_car</i><em> AUTO ▌▍▎▏Focus</em></a>
    <ul class="right hide-on-med-and-down">
    <li>
        <form> 
          <div style={{height: "100%"}} className="input-field">
            <input id="search" type="search" placeholder="Search Logs..." ref={text} onChange={onChange} />
            <label className="label-icon" htmlFor="search"><i className="material-icons"> search </i></label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </li>
      <li><a href="/">Log</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/"><i class="material-icons">refresh</i></a></li>
    </ul>
  </div>

</nav>
    );
};

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired
}

export default connect(null, {searchLogs})(SearchBar)