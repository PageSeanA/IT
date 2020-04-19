import React from 'react'

const AddBtn = () => {
    return (

// fixed-action-btn places main button icon @ bottom of page & hides other icons until main icon is hovered over. 
        <div className="fixed-action-btn">
            <a href="#add-log-modal" className="btn-floating btn-large blue darken-2 modal-trigger">
                {/* add icon  */}
                <i className="large material-icons">add</i> 
            </a>
            <ul>
                <li>
                    <a href="#tech-list-modal" className="btn-floating orange modal-trigger">
                        {/* person icon */}
                    <i className ="material-icons">person</i></a>
                </li>
                <li>
                    <a href="#add-tech-modal" className="btn-floating green modal-trigger">
                        {/* person with plus symbol icon */}
                    <i className ="material-icons">person_add</i></a>
                </li>
            </ul> 

            <footer className="page-footer white">
                <div className="container">
                    <div className="row">
                    <div className="col l4 offset-l2 s12">
                    </div>
                    </div>
                </div>
                <div className="footer-copyright white">
                    <div className="container">
                    <p style={{color:"orange"}}>© 2020 AUTO ▌▍▎▏Focus</p>
                    </div>
                </div>
            </footer>     
        </div>



        
    )
}

export default AddBtn