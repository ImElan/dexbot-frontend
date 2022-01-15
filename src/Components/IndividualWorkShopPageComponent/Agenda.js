import React,{Component} from 'react';
import workshop_sprite from '../../assets/indi_workShop_sprite.svg';

class Agenda extends Component {
      render() {
            const { agenda } = this.props;
            return(
                  <div className='individualWorkShop__singleAgenda'>
                        <svg className='individualWorkShop__tickSvg'>
                              <use xlinkHref={`${workshop_sprite}#foursquare-check-in`}/>
                        </svg>
                        <h5 className='individualWorkShop__agenda'>{agenda}</h5>
                  </div>
            )
      }
}

export default Agenda;