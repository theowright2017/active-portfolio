import React, {Component} from 'react'
import NavBar from './SubNav/NavBar.js';

import NavLink from './SubNav/NavLink.js';
import NavToggle from './SubNav/NavToggle'


class Navigation extends Component {





  render(){



    return(
      <div>
      {/* Navigation */}
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3 navbar-scrolled" id="mainNav">

          <div className="container">

          <NavLink />
          <NavToggle />

          <NavBar />

          </div> {/*container*/ }

          </nav>





      </div>
    )
  }
};

export default Navigation;




//   componentDidMount() {
//   let element = document.getElementById('mainNav')
//   this.scrollListener = () => {
//     if (element.scrollTop > 0) {
//       element.classList.add("navbar-scrolled");
//     }
//   }
//   window.addEventListener("scroll", this.scrollListener);
// }
//
// componentWillUnmount() {
//   window.removeEventListener("scroll", this.scrollListener);
// }
