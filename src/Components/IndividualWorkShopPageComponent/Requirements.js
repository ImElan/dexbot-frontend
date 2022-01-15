import React,{Component} from 'react';
import workshop_sprite from '../../assets/indi_workShop_sprite.svg';

class Requirements extends Component {
      render() {
            const { requirement } = this.props;
            return(
                  <div className='individualWorkShop__singleRequirement'>
                        <svg className='individualWorkShop__chevronSvg'>
                              <use xlinkHref={`${workshop_sprite}#right-chevron`}/>
                        </svg>
                        <h5 className='individualWorkShop__requirement'>{requirement}</h5>
                  </div>
            )
      }
}

export default Requirements;