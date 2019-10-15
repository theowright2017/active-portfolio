import React, {Component} from 'react';
import NavListItem from './NavListItem';
import NavLink from './NavLink';
import NavToggle from './NavToggle';

function NavBar(props) {

  return(

    <div className="collapse navbar-collapse" id="navbarResponsive">




      <ul className="navbar-nav ml-auto my-2 my-lg-0">

        <NavListItem name="About" href="#about"/>

        <NavListItem name="Portfolio" href="#portfolio"/>

        <NavListItem name="Contact" href="#contact"/>


      </ul>
    </div>
  )

}

export default NavBar;
