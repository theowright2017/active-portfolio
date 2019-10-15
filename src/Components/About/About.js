import React, {Component} from "react"

import AboutTitle from './Sub/AboutTitle'
import AboutText from './Sub/AboutText'

function About (props) {
  return (
    <div>


    <section className="page-section bg-primary" id="about">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">

          <AboutTitle />

            <hr className="divider light my-4"/>

            <AboutText />


          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default About;
