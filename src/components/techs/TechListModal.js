
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
        // >> NOTE: The below //E-D-N-L rule specifies the rules you want to disable. Do not DELETE or UNCOMMENT. << 
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


    //Renders the IT Technician List.
    return (
        //The tech-list-modal id needs to match the id in AddBtn.js.
        <div id="tech-list-modal" className="modal">     

            <div className="modal-content">
                <h4><b>IT Technician List</b></h4>
                <ul className="collection">
{/* Remember, it starts out as null until the request & response is made. Check to make sure it is not null, if it's not done loading go ahead and map through techs. */}
                    {!loading && 
                    techs !== null &&
                    techs.map(tech => (<TechItem tech={tech} key={tech.id} />))}  
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