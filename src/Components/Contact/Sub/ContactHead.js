import React, {Component} from "react"
import ContactTitle from './ContactTitle'

function ContactHead (props) {
  return (


    <div className="row justify-content-center">
      <div className="col-lg-8 text-center">

        <ContactTitle />

        <hr className="divider my-4"/>
        <p className="text-muted mb-5">I am currently on the lookout for my first commercial role, and really keen to gain experience, learn, and contribute.  If you would like to discuss this with me further, please feel free to send me an email or a message on LinkedIn!
        Also check out my Github profile!</p>
      </div>
    </div>


  )
}

export default ContactHead;
