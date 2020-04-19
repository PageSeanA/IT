//The useEffect allows us to make the request via this hook.
import React, {useEffect} from 'react';
//This is to connect to the component. 
import {connect} from 'react-redux';
import LogItem, {} from './LogItem';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';
import {getLogs} from '../../actions/logActions';

//Creating the state. Below I destructed so I don't have to actually add the props. In this case, just bringing in logs & loading.
const Logs = ({log: { logs, loading }, getLogs }) => {
    useEffect(() => {
        getLogs(); //<<The below code is a rule that makes you specify the rules you want to disable. <<DO NOT UNCOMMENT OR DELETE!!>> In this case, there's an empty array so it will only run once the eslint will stop any warnings.
        //eslint-disable-next-line 
    }, []);

    if (loading || logs === null) {
        return <Preloader />; //When site is (re)loading and is fetching logs a blue preloader will show. 
    }

    return (
        <div className=" orange darken-2 container">

        <ul className="collection with-header">
            <li className="collection-header orange darken-2">
                <h4 className="center" > <b>IT Help Desk Log</b></h4>
            </li>
{/*Code Notes: If not loading and logs.length is equal to 0 which means there's no logs, put a paragraph in the center
that states "No logs to show at this time..." else map through the logs. */}
            {!loading && logs.length === 0 ? (
            <p className="center"> No logs to show at this time... </p>
            ) : (
                logs.map(log => <LogItem log={log} key={log.id} />) //Output the log item, passing in the current log and it's key.
            )}
        </ul>
        </div>
    );
};

// Note: You don't have to use propTypes but it's a best practice. It gives you some checking on the Props.  
Logs.propTypes = {
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired
}
//Bringing in the state.
const mapStateToProps = state => ({
    log: state.log
});
// Note: The actions that are going to run in this case it is only {getLogs}.
export default connect(mapStateToProps, {getLogs})(Logs)