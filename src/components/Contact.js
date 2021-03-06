import React from 'react';

const Contact = () => {
    return(

        <div className="container">
            <h3 className="center"> <b>Contact Page</b> </h3>
            <h4> Thank you for visiting this site and please feel free to contact me if you have any questions or would
                like to work together on a project. </h4>  <br></br> 

                <div className="row">
    <div className="col s12 m6">
      <div className="card small blue-grey darken-1">
        <div className="card-content white-text">
        <h5><span className="card-title"><b>I look forward to speaking with you.</b></span>
          <ul>
                <li><b>Sean Page</b></li>
                <li><b>Software Developer</b> </li>
                <li><b>(713) 364-6354 | <a href="#!">PageSeanA@gmail.com</a> </b> </li>
                </ul></h5>
        </div>
        <div className="card-action ">
          <a href="https://www.linkedin.com/in/seanapage/" target="https://www.linkedin.com/in/seanapage/"><b>LinkedIn</b></a>
          <a href="https://github.com/PageSeanA/IT" target="https://github.com/PageSeanA/IT" ><b>Github</b></a>
          <a href="https://twitter.com/CodingAccident" target="https://twitter.com/CodingAccident"><b>Twitter</b></a>
          <a href="https://www.youtube.com/channel/UCoPmdYth3wdmJAu4D9SDgEw?view_as=subscriber" target="https://www.youtube.com/channel/UCoPmdYth3wdmJAu4D9SDgEw?view_as=subscriber" ><b>YouTube</b></a>

        </div>
      </div>
    </div>
  </div>

        </div>
    )
}

export default Contact