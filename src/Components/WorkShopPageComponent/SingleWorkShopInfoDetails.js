import React,{Component} from 'react';
import sprite from '../../assets/workshopInfo_sprite.svg';

class SingleWorkShopInfoDetails extends Component {
      render() {
            const { icon,info } = this.props;
            return(
                  <div className='workshopInfoContainer__detailsContainer'>
                        <svg className='workshopInfoContainer__detailsImage'>
                              <use xlinkHref={`${sprite}#${icon}`}/>
                        </svg>
                        <p className='workshopInfoContainer__detailsDetail'>{info}</p>
                  </div>
            )
      }
}

export default SingleWorkShopInfoDetails;