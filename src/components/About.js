import React from 'react';

const About = () => {
    return(
        <div className="container">
            <h3 className="center"> <b>About This Project</b> </h3>
            <br></br>
            <h4>At its core, this <em>IT Help Desk Log</em> for my fictional aftermarket automotive parts and accessories company is a to-do list that calls an API, uses React to render and update its html while Redux stores and 
                updates the state used to render the application. This project uses React Route to navigate to the various pages. The IT Help Desk Log
                main page uses modals for the pop up windows where input and data is displayed to the user. Materialize-CSS gives the site its responsive
                CSS framework. Materialize Icons are used to give the site a simple modern design. </h4> 
                <br></br>
                <h4>This site was inspired by past jobs that required inputting information into actually log books and later
                    excel spread sheets. While both of these methods work neither were user friendly. This IT Help Desk Log would be a low cost, light weight,
                    easy to impalement application for logging in and keeping track of items that need to be taken care of.  Overall this project has allowed
                    me to better understand React and Redux. </h4>

        </div>
    )
}

export default About