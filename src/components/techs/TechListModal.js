import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import TechItem from './TechItem';
import {getTechs} from '../../actions/techActions';

const TechListModal = ({getTechs, tech: {techs, loading}}) => {
//No longer needed because of no longer loading as a component level state & are using them as an app level state & are passing them in as props.
    // const [techs, setTechs] = useState([]);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTechs();
        //eslint-disable-next-line 
    }, []);

// NOTE: The below code is no longer needed because of the 3 sections of code that comes later, those code are calling the actions. 
    // const getTechs = async () => {
    //     setLoading(true);
    //     const res = await fetch('/techs');
    //     const data = await res.json();

    //     setTechs(data);
    //     setLoading(false);
    // };

    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technician List</h4>
                <ul className="collection">
{/* Remember, it starts out at null. Check to make sure it is not null, if it's not done loading go ahead and map through techs. */}
                    {!loading && 
                    techs !== null &&
                    techs.map(tech => <TechItem tech={tech} key={tech.id} />)}  
                </ul>
            </div>
        </div>
    );
};

TechListModal.propTypes = {
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired
    
};

const mapStateToProps = state => ({
    tech: state.tech
});

export default connect(mapStateToProps, {getTechs})(TechListModal)