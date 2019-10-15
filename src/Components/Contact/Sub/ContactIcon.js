import React, {Component} from "react"

function ContactIcon (props) {
  return (

    <div className={props.divClass}>
      <a href={props.href} target="_blank">
        <i className={props.iconClass}></i>
      </a>
    </div>
  )
}

export default ContactIcon;
