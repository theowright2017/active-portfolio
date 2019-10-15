import React, {Component} from "react"

function MastButton (props) {
  return (
    <div>
        <a className="btn btn-primary btn-xl js-scroll-trigger" href={props.route}>{props.name}</a>
    </div>
  )
}

export default MastButton;
