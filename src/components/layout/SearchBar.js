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


                    // >>>>>>>>>>>>> The below code looks good but nav tabs are not clickable.  <<<<<<<<<<<<<<<<<<<<


//         <nav style={{marginBottom: '30px'}} className="orange darken-2 center">

//             <div className="nav-wrapper">
//               {/* <div className="container"> */}

//             <a href="/log" class="brand-logo"><i class=" large material-icons green">directions_car</i><em> AUTO ▌▍▎▏Focus</em></a>
            
//             <ul class="right hide-on-med-and-down">
// {/* Note: The <Link> tag prevents the default <a> tag attribute from making a request to the server so that the react reactor dom 
// can load in the correct component based on the URL that we are going to. */}
// {/* Note: NavLink is used so that I apply different styles to the active links. */}
//                     <li> <NavLink to="/home"> Home </NavLink></li>
//                     <li> <Link to="../app"> Log </Link></li>
//                     <li> <NavLink to="/about"> About </NavLink></li>
//                     <li> <NavLink to="/contact"> Contact </NavLink></li>
//                     <li><a href="collapsible.html"><i class="material-icons">refresh</i></a></li>
//                     <li><a href="mobile.html"><i class="material-icons">more_vert</i></a></li>
//                 </ul>

//               <form>
//                 <div className="input-field">
//                   <input id="search" type="search" placeholder="Search Logs..." ref={text} onChange={onChange} />
//                   <label className="label-icon" htmlFor="search"><i className="material-icons"> search</i></label>
//                   <i className="material-icons">close</i>
//                 </div>
//               </form>
              
//               {/* </div> */}
//             </div>

// </nav>


            // >>>>>>>>>>>>> The below code works but Search Box is off. <<<<<<<<<<<<<<<<<<<<


        <nav style={{marginBottom: '30px'}} className="orange darken-2 center">
<div class="nav-wrapper">
  <a href="#!" class="brand-logo"><i class=" large material-icons green">directions_car</i><em> AUTO ▌▍▎▏Focus</em></a>
  <ul class="right hide-on-med-and-down">
  <li><form>
    <div className="input-field">
      <input id="search" type="search" placeholder="Search Logs..." ref={text} onChange={onChange} />
    <label className="label-icon" htmlFor="search"><i className="material-icons"> search </i></label>
    <i className="material-icons">close</i>
    </div>
</form></li>
    {/* <li><a href="/home">Home</a></li> */}
    <li><a href="/">Log</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
    <li><a href="collapsible.html"><i class="material-icons">refresh</i></a></li>
  </ul>
</div>

</nav>


            // >>>>>>>>>>>>> The below code has the original set up with the shorten li a tag links. <<<<<<<<<<<<<<<<<<<<



//         <nav style={{marginBottom: '30px'}} className="orange darken-2 center">

//             <div className="nav-wrapper">
//               {/* <div className="container"> */}

//             <a href="/log" class="brand-logo"><i class=" large material-icons green">directions_car</i><em> AUTO ▌▍▎▏Focus</em></a>
            
//             <ul class="right hide-on-med-and-down">

//                     <li><a href="/">Log</a></li>
//                     <li><a href="/about">About</a></li>
//                     <li><a href="/contact">Contact</a></li>
//                     <li><a href="collapsible.html"><i class="material-icons">refresh</i></a></li>
            
//             </ul>

//               <form>
//                 <div className="input-field">
//                   <input id="search" type="search" placeholder="Search Logs..." ref={text} onChange={onChange} />
//                   <label className="label-icon" htmlFor="search"><i className="material-icons"> search</i></label>
//                   <i className="material-icons">close</i>
//                 </div>
//               </form>
              
//               {/* </div> */}
//             </div>

// </nav>

    );
};

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired
}

export default connect(null, {searchLogs})(SearchBar)



// Other Nav setup options 

{/* <nav style={{marginBottom: '30px'}} className="orange">
<div className="nav-wrapper">
<a href="#!" class="brand-logo"><i class=" large material-icons">directions_car</i><em>AUTO ▌▍▎▏Focus</em></a>
<ul class="right hide-on-med-and-down">
            <li><a href="sass.html"><i class="material-icons">search</i></a></li>
            <li><a href="collapsible.html"><i class="material-icons">refresh</i></a></li>
            </ul>
  <form>
    <div className="input-field">
      <input id="search" type="search" />
      <label className="label-icon" htmlFor="search">
          <i className="material-icons">search</i>
          </label>
      <i className="material-icons">close</i>
    </div>
  </form>
</div>
</nav>



 <nav style={{marginBottom: '30px'}} className="orange">
 <div class="nav-wrapper">
     <a href="#!" class="brand-logo"><i class=" large material-icons">directions_car</i><em>AUTO ▌▍▎▏Focus</em></a>
     <ul class="right hide-on-med-and-down">
         <li><a href="sass.html"><i class="material-icons">search</i></a></li>
         <li><a href="badges.html"><i class="material-icons">view_module</i></a></li>
         <li><a href="collapsible.html"><i class="material-icons">refresh</i></a></li>
         <li><a href="mobile.html"><i class="material-icons">more_vert</i></a></li>
     </ul>
 </div>
 </nav>
 */}
