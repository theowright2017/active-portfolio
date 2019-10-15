import React, {Component} from "react"

import Project from './Sub/Project.js'




function Portfolio (props) {
  return (
    <div>

    <section id="portfolio">
      <div className="container-fluid p-0">
        <div className="row no-gutters">

        <Project category="Category"
                  name="Project Name"
                  src="img/portfolio/thumbnails/1.jpg"
                  href="https://github.com/theowright2017"
                  alt=""  />
        <Project category="Category"
                  name="Project Name"
                  src="img/portfolio/thumbnails/1.jpg"
                  href="https://github.com/theowright2017"
                  alt=""  />
        <Project category="Category"
                  name="Project Name"
                  src="img/portfolio/thumbnails/1.jpg"
                  href="https://github.com/theowright2017"
                  alt=""  />
        <Project category="Category"
                  name="Project Name"
                  src="img/portfolio/thumbnails/1.jpg"
                  href="https://github.com/theowright2017"
                  alt=""  />
        <Project category="Category"
                  name="Project Name"
                  src="img/portfolio/thumbnails/1.jpg"
                  href="https://github.com/theowright2017"
                  alt=""  />
        <Project category="Category"
                  name="Project Name"
                  src="img/portfolio/thumbnails/1.jpg"
                  href="https://github.com/theowright2017"
                  alt=""  />



        </div>
      </div>
    </section>


    </div>
  )
}

export default Portfolio;
