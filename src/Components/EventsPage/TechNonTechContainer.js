import React,{Component} from 'react';

import { NavLink } from 'react-router-dom';

import tech from '../../assets/tech.svg';
import nonTech from '../../assets/nonTech.svg';

class TechNonTechContainer extends Component {     
      render() {
            return(
                  <div className='techNonTechEvents'>  
                        <NavLink 
                              exact
                              to='/nonTechEvents'
                              className='techNonTechEvents__nonTechImageContainer'
                        >
                              <img className='techNonTechEvents__nonTechImage' src={nonTech} alt='tech'></img>
                              <h1 
                                    className='heading--1 heading--1-dark text-center techNonTechEvents__heading'
                              >
                                    Non-Tech Events
                              </h1>
                        </NavLink>
                        <NavLink 
                              exact
                              to='/techEvents'
                              className='techNonTechEvents__techImageContainer'
                        >
                              <img className='techNonTechEvents__techImage' src={tech} alt='non tech'></img>
                              <h1 
                                    className='heading--1 heading--1-dark text-center techNonTechEvents__heading'
                              >
                                    Tech Events
                              </h1>
                        </NavLink>
                  </div>
            )
      }
}

export default TechNonTechContainer;