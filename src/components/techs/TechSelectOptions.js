import React, {useEffect} from 'react'; //Need to call getTech so useEffect so it can be called when the component loads.
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getTechs} from '../../actions/techActions'

//From the techs state, pulling out {techs, loading}
const TechSelectOptions = ( {getTechs, tech: {techs, loading} } ) => {
    useEffect(() => {
        getTechs();
        //eslint-disable-next-line
    }, []); //So it will only run onces [].  

    return (
        // >>Note: The letter t stands for tech for this line of code.<<
        !loading && 
        techs !== null && 
        techs.map(t => (
        <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
            {t.firstName} {t.lastName}
        </option>
        ))
    );
};

TechSelectOptions.propTypes = {
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    tech: state.tech
})

export default connect(mapStateToProps, {getTechs}) (TechSelectOptions)
