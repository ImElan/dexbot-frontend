import React,{ Component } from 'react';
import RegisterCard from './RegisterCard';

class RegisterCardsContainer extends Component {
      render() {
            const { registerDetails } = this.props;
            return(
                  <div className='register'>
                        { registerDetails.map( (singleRegisterBox,index) => (
                              <RegisterCard {...singleRegisterBox} key={index} />
                        )) }
                  </div>
            )
      }
}

export default RegisterCardsContainer;