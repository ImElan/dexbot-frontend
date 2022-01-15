import React,{Component} from 'react';
import locationImage from '../../../assets/location.svg';

class Banner extends Component {
      render() {
            const {location,date} = this.props;
            return(
                  <section className='banner'>
                        <div className='banner__image'>
                              <img src={locationImage} alt='location' className='banner__image--img'></img>
                        </div>
                        <div className='banner__content'> 
                              <div className='banner__content--location'>
                                    <h1 className='heading--1 heading--1-light'>Where</h1>
                                    <h2 className='heading--2 heading--2-light'>{location}</h2>
                              </div>
                              <div className='banner__content--date'>
                                    <h1 className='heading--1 heading--1-light'>When</h1>
                                    <h2 className='heading--2 heading--2-light'>{date}</h2>
                              </div>
                        </div>
                  </section>
            )
      }
}

export default Banner;