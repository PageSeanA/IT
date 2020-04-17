import React, { useEffect} from 'react';
import {connect} from 'react-redux';
import LogItem, {} from './LogItem';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';
import {getLogs} from '../../actions/logActions';

//Below I destructed so I don't have to actually add the props.
const Logs = ({log: { logs, loading }, getLogs }) => {
    useEffect(() => {
        getLogs();
        //eslint-disable-next-line 
    }, []);

    if (loading || logs === null) {
        return <Preloader />;
    }

    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center" > <b>IT Help Desk Log</b></h4>
            </li>
            {!loading && logs.length === 0 ? (
            <p className="center"> No logs to show at this time... </p>
            ) : (
                logs.map(log => <LogItem log={log} key={log.id} />)
            )}
        </ul>
    );
};

// Note: You don't have to use propTypes but it's a best practice. It gives you some checking on the Props.  
Logs.propTypes = {
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    log: state.log
});

export default connect(mapStateToProps, {getLogs})(Logs)