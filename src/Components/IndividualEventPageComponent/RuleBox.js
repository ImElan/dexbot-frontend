import React,{Component} from 'react';
import idea from '../../assets/idea.svg';

class RuleBox extends Component {
      render() {
            const {round,roundName,rule} = this.props;
            return(
                  <div className='individualEvent__ruleBox'>
                        <h4 className='heading--4 heading--4-dark text-center'>{round}</h4>
                        <h1 className='heading--1 heading--1-dark text-center'>{roundName}</h1>
                        <div className='individualEvent__ruleContainer'>
                              <img src={idea} className='individualEvent__ruleSvg' alt='Bulb' />
                              <p className='individualEvent__rule'>{rule}</p>
                        </div>
                  </div>
            )
      }
}

export default RuleBox;