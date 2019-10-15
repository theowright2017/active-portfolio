import React, {Component} from "react"

import ContactIcon from './ContactIcon'


function ContactOptions (props) {
  return (


    <div className="row">


      <ContactIcon divClass="col-lg-4 ml-auto text-center"
                   href="#"
                   iconClass="fas fa-envelope fa-3x mb-3 text-muted"   />


      <ContactIcon divClass="col-lg-4 mr-auto text-center"
                  href="https://github.com/theowright2017"
                  iconClass="fab fa-github fa-3x mb-3 text-muted"  />


      <ContactIcon divClass="col-lg-4 mr-auto text-center"
                  href="https://www.linkedin.com/in/theo-wright/"
                  iconClass="fab fa-linkedin fa-3x mb-3 text-muted"  />



    </div>


  )
}

export default ContactOptions;
