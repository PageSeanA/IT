import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addTech} from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';

//Component level state for the form.
const AddTechModal = ({addTech}) => {

    const [firstName, setFirstName] = useState(''); //Blank by default. 
    const [lastName, setLastName] = useState(''); //Blank by default.
    
    //<<VALIDATION>> Checking to see if data was placed into fields by the user for the techs 1st & last names.
    const onSubmit = () => {
        if(firstName === "" | lastName === ""){
            M.toast({html: "Please enter first and last name"});
        } else {
            addTech({
                firstName,
                lastName
            });
    //Toast alert for added tech. 
            M.toast({html: `${firstName} ${lastName} was added as a technician`});
                        //To Clear Modal Fields 
                        setFirstName('');
                        setLastName('');
                            }
    };

    // New Technician Fields & Enter Button
    return <div id ="add-tech-modal" className="modal">
            <div className="modal-content">
                <h4><b>New Technician</b></h4>
                <div className="row">
                    <div className="input-field">
                    <input 
                    type="text" 
                    name="firstName" 
                    value={firstName} 
                    onChange={e => setFirstName(e.target.value)} 
                    />
                    <label htmlFor="firstName" className="active">
                        First Name
                    </label>
                </div>
            </div>

            <div className="row">
                    <div className="input-field">
                    <input 
                    type="text" 
                    name="lastName" 
                    value={lastName} 
                    onChange={e => setLastName(e.target.value)} 
                    />
                    <label htmlFor="lastName" className="active">
                        Last Name
                    </label>
                    </div>
            </div>
            </div>

        <div className="modal-footer">
            <a 
            href="#!" 
            onClick={onSubmit} 
            className="modal-close waves-effect orange waves-light btn"> 
            Enter 
            </a>
        </div>
        </div> 
};

AddTechModal.propTypes = {
    addTech: PropTypes.func.isRequired,
}

export default connect(null, {addTech})(AddTechModal)