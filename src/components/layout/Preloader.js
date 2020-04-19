//When site is (re)loading and it's fetching this shows a blue preloader. 

import React from 'react';

const Preloader = () => {
    return (
        <div className="progress blue lighten-4">
            <div className="indeterminate blue"></div>
            
        </div>
    );
};

export default Preloader