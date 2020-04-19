//This is a form & will have component level state so brought in the {useState} hook. 
import React, {useState} from 'react';
import TechSelectOptions from '../techs/TechSelectOptions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addLog} from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';  //Brining this in for our toast/alert popup window.

const AddLogModal = ({addLog}) => {
//Below are the declared states. 
    const [message, setMessage] = useState(''); //The default is an empty string.
    const [attention, setAttention] = useState(false); //The default is false. 
    const [tech, setTech] = useState(''); //The default is an empty string. 
    
    //Error checking with a toast/alert popup window.
    const onSubmit = () => {
        if(message === "" | tech === ""){
            M.toast({html: "Please enter a log message and select a technician"});
        } else {
            //creating a new form. 
            const newLog = {
                message,
                attention,
                tech,
                // Note new Date() gives the current date and time.
                date: new Date()
            }

            addLog(newLog);
            //This makes an alert. Using back ticks `` so that the tech name can be placed there. 
            M.toast({html: `Log added by ${tech}` });
            
                //To Clear Modal Fields.
                setMessage('');
                setTech('');
                setAttention(false); //False is the Default Value.
        }
    };

    //The Form. 
    return <div id ="add-log-modal" className="modal" style={modalStyle}>  
        <div className="modal-content">
            <h4><b>Enter System Log</b></h4>
            <div className="row">
                <div className="input-field">
                <input 
                type="text" 
                name="message" 
                value={message} //The value pertains to the message in the component state.
                //The onChange will directly call set message. The e is the event parameter. 
                onChange={e => setMessage(e.target.value)} 
                />
                {/* The below label tag & its format is from Materialize. */}
                <label htmlFor="message" className="active">
                    Log Message
                </label>
            </div>
        </div>
        </div>

    {/* Tech field. */}
        <div className="row">
            <div className="input-field">
                <select 
                name="tech" 
                value={tech} 
                className="browser-default" 
                onChange={e => setTech(e.target.value)}>
                    <option value="" disabled>
                        Select Technician</option>
                        <TechSelectOptions />
                </select>
            </div>
        </div>

    {/* Needs Attention Checkbox field. Note: This markup comes from Materialize. */}
        <div className="row">
        <div className="input-field">
            <p>
                <label>
                    <input 
                    type="checkbox" 
                    className="filled-in" 
                    checked={attention} 
                    value={attention} 
                    onChange={e => setAttention(! attention)} // Note/FYI ! means not. So if it is true, we want it to go to false and if it is false it will got to true. 
                    />
                    <span>Needs Attention</span>
                </label>
            </p>
        </div>
        </div>
        {/* Enter button */}
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

AddLogModal.propTypes = {
    addLog: PropTypes.func.isRequired
}

const modalStyle = {
    width: '75%',
    height: '75%'
};
//Not brining in any state, just calling an action so (null).
export default connect(null, {addLog}) (AddLogModal)