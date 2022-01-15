import React,{Component} from 'react';
import workshopSprite from '../../../assets/workshop_sprite.svg'

class WorkShopCardDetails extends Component {
      render() {
            const {info,icon} = this.props;
            return(
                  <div className='workshopCard__infos'>
                        <svg className='workshopCard__infos--icon'>
                              <use xlinkHref={`${workshopSprite}#${icon}`}/>
                        </svg>
                        <p className='workshopCard__infos--info'>{info}</p>
                  </div>
            )
      }
}

export default WorkShopCardDetails;