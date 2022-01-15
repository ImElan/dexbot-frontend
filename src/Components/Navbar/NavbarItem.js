import React,{ Component } from "react";
import { NavLink } from 'react-router-dom';

class NavbarItem extends Component {
      render() {
            const {name,link} = this.props;
            return(
                  <li className='navbar__item'>
                        <NavLink to={`${link}`} exact activeClassName='navbar__link--active' className='navbar__link'>{name}</NavLink>
                  </li>
            )
      }
}

export default NavbarItem;