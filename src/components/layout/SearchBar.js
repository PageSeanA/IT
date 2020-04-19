import React, {useRef} from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {searchLogs} from '../../actions/logActions';

const SearchBar = ({searchLogs}) => {
  const text = useRef('');

  //This is going to search logs while the user types into the search field.
  const onChange = e => {
    searchLogs(text.current.value);
  };

    return (
            // >>>>>>>>>>>>> The below code works but Search Box is off. <<<<<<<<<<<<<<<<<<<<
<nav style={{marginBottom: '30px'}} className="orange darken-2 center">
  <div className="nav-wrapper">
    <a href="/" className="brand-logo center"><i className="large material-icons green">directions_car</i><em> AUTO ▌▍▎▏Focus</em></a>
    <ul className="right hide-on-med-and-down">
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
      <li><a href="/"><i className="material-icons">refresh</i></a></li>
    </ul>
  </div>
</nav>

    );
};

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired
}

export default connect(null, {searchLogs})(SearchBar)