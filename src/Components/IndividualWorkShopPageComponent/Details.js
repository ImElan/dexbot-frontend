import React,{Component} from 'react';
import workshop_sprite from '../../assets/workshopInfo_sprite.svg';

class Details extends Component {
      render() {
            const { detail,icon } = this.props;
            return(
                  <div className='individualWorkShop__singleDetail'>
                        <svg className='individualWorkShop__detailsSvg'>
                              <use xlinkHref={`${workshop_sprite}#${icon}`}/>
                        </svg>
                        <h5 className='individualWorkShop__detail'>{detail}</h5>
                  </div>
            )
      }
}

export default Details;