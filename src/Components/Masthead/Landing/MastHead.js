import React, {Component} from "react"

import MastTitle from './Sub/MastTitle.js'
import MastBlurb from './Sub/MastBlurb.js'

function MastHead(props) {
  return (
    <div id="page-top">
    <header className="masthead">
      <div className="container h-100">

        <div className="row h-100 align-items-center justify-content-center text-center">



        <MastTitle />

        <MastBlurb />




        </div>
      </div> {/*container h-100 */}
    </header>
    </div>
  )
}

export default MastHead;
