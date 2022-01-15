import React,{ Component } from 'react';
import workshop_sprite from '../../assets/indi_workShop_sprite.svg';

class RegisterInfo extends Component {
      render() {
            const { info,color } = this.props;
            return(
                  <div className='register__info'>
                        <svg 
                              style={{
                                    fill:color
                              }}
                              className='register__infoSvg'
                        >
                              <use xlinkHref={`${workshop_sprite}#foursquare-check-in`} />
                        </svg>
                        <p className='register__infoDetail'>{info}</p>
                  </div>
            )
      }
}

export default RegisterInfo;