import React, {Component} from 'react';


function NavListItem(props) {

  return(
    <div>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href={props.href} >{props.name}</a>
        </li>
    </div>

  )
}


export default NavListItem;
