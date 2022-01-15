import React, { Component } from 'react';

import { ROOT_DOMAIN } from '../../../Data/env';

class IndividualSponsor extends Component {
	render() {
		const { sponsorLogo } = this.props;
		return (
			<div className='sponsors__container'>
				<img
					className='sponsors__image'
					alt='Sponsor Logo'
					src={`${ROOT_DOMAIN}/images/${sponsorLogo}`}
				/>
			</div>
		);
	}
}

export default IndividualSponsor;
