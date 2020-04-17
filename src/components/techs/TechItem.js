import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {deleteTech} from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';


const TechItem = ({tech: {id, firstName, lastName}, deleteTech}) => {
    const OnDelete = () =>{
        deleteTech(id);
        M.toast({html: "Technician Deleted"});

    }
    return (
        <li className="collection-item">
            <div>
                {/* Note: This line of code was destructed. Originally it was tech.firstName & tech.lastName in brackets */}
                {firstName} {lastName}  
                {/* Note: secondary-content moves it right of the item. */}
                <a 
                href="#!" className="secondary-content" onClick={OnDelete}> 
                <i className="material-icons grey-text">delete</i>
                </a>
            </div>
            
        </li>
    )
}

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
    deleteTech: PropTypes.func.isRequired,

}

export default connect(null, {deleteTech})(TechItem)
