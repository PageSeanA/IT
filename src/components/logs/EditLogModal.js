//This is a form & will have component level state, brought in the {useState} hook. 
import React, {useState, useEffect} from 'react';
import TechSelectOptions from '../techs/TechSelectOptions';

import {connect} from 'react-redux'; 
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js'; //Brought this in for our toast/alert popup window.
import {updateLog} from "../../actions/logActions";

const EditLogModal = ({current, updateLog}) => {
//Below are the declared states. 
    const [message, setMessage] = useState(''); //The default is an empty string.
    const [attention, setAttention] = useState(false); //The default is false.
    const [tech, setTech] = useState('');
//Setting the form data with the current data via useEffect hook.
    useEffect (() => {
        if(current) {
            setMessage(current.message);
            setAttention(current.attention);
            setTech(current.tech);
        }
        
    }, [current]);

    //Error checking with a toast/alert popup window.
    const onSubmit = () => {
        if(message === "" | tech === ""){
            M.toast({html: "Please enter a log message and select a technician"});
        } else {
            const updLog = {
                id: current.id,
                message,
                attention,
                tech,
                date: new Date()
            }

            updateLog(updLog);
            M.toast({html: `Log updated by ${tech}`});

            //To Clear Modal Fields 
            setMessage('');
            setTech('');
            setAttention(false); //False is the Default Value
        }
    };

    return <div id ="edit-log-modal" className="modal" style={modalStyle}>
        <div className="modal-content">
            <h4><b>Edit System Log</b></h4>
            <div className="row">
                <div className="input-field">
                <input 
                type="text" 
                name="message" 
                value={message} 
                onChange={e => setMessage(e.target.value)} 
                />
                
            </div>
        </div>
        </div>

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

        <div className="input-field">
            <p>
                <label>
                    <input 
                    type="checkbox" 
                    className="filled-in" 
                    checked={attention} 
                    value={attention} 
                    onChange={e => setAttention(! attention)}
                    />
                    <span>Needs Attention</span>
                </label>
            </p>
        </div>
        
        <div className="modal-footer">
            <a 
            href="#!" 
            onClick={onSubmit} 
            className="modal-close waves-effect orange waves-light btn"> 
            Enter 
            </a>
        </div>
        </div > 
};

const modalStyle = {
    width: '75%',
    height: '75%'
};

EditLogModal.propTypes = {
    current: PropTypes.object,
    updateLog: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    current: state.log.current
})

export default connect(mapStateToProps, {updateLog})(EditLogModal)