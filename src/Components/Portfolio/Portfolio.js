import React, {Component} from "react"



import IssTracker from './Sub/IssTracker.js'
import MotorcycleRental from './Sub/MotorcycleRental'
import BlankProject from './Sub/BlankProject'


function Portfolio (props) {



  return (
    <div>

    <section id="portfolio">
      <div className="container-fluid p-0">
        <div className="row no-gutters">


        <IssTracker />

        <MotorcycleRental />



        <BlankProject />

        <BlankProject />

        <BlankProject />

        <BlankProject />





        </div>
      </div>
    </section>


    </div>
  )

}

export default Portfolio;


// <Project category="Ruby - Sinatra"
//           name="Motorcycle Rental"
//           src="img/rental.png"
//           href="https://github.com/theowright2017/rental-project"
//           hostURL="https://rent-this.herokuapp.com/"
//           alt=""
//           date="March 2019"
//           className="project-name"/>



// <Project category="Javascript - Vue.js"
//           name="ISS Tracker"
//           src="img/iss.png"
//           href="https://github.com/S-Maitland/ISS-Tracker"
//           hostURL=""
//           alt=""
//           date="March 2019"  />
