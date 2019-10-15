import React, {Component} from "react"

import ContactHead from './Sub/ContactHead'
import ContactOptions from './Sub/ContactOptions'


function Contact (props) {
  return (
    <div>


    <section className="page-section" id="contact">
      <div className="container">

        <ContactHead />

      <ContactOptions />


      </div>
    </section>

    </div>
  )
}

export default Contact;
