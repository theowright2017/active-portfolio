import React, {Component} from "react"
function FlightChecker (props) {



  return (


    <div className="col-lg-4 col-sm-6">
      <div className="portfolio-box" >
        <img className="img-fluid" src="img/flight.png" alt=""/>

        <div className="portfolio-box-caption">
          <div className="project-category text-white-50">
            Javascript - React | Firebase
          </div>
          <div className="main-points">
            <i>React Hooks, Context API</i>
          </div>
          <a className="project-name" href="https://newflights-32f5e.web.app/" target="_blank" >
            Flight Checker
          </a>
          <br />
            <a className="github-link" href="https://github.com/theowright2017/react-firebase-flight-appt" target="_blank">Click for Github</a>
            <p>Nov 2019</p>



        </div>
      </div>
    </div>


  )
}

export default FlightChecker;
