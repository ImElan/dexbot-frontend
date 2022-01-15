import React, { Component } from 'react';
import WorkShopCardDetails from './WorkShopCardDetails';
import { NavLink } from 'react-router-dom';

import { ROOT_DOMAIN } from '../../../Data/env';

class WorkShopCard extends Component {
	render() {
		const { name, details, image, price, date, time, slug } = this.props;
		return (
			<div className='workshopCard'>
				<img
					className='workshopCard__image'
					src={`${ROOT_DOMAIN}/images/${image}`}
					alt={name}
				/>
				<h4 className='workshopCard__title'>{name}</h4>
				<p className='workshopCard__details'>{details}</p>
				<WorkShopCardDetails info={date} icon='calendar' />
				<WorkShopCardDetails info={time} icon='clock' />
				<WorkShopCardDetails info={price} icon='rupee-indian' />
				<WorkShopCardDetails info='Online' icon='pin' />
				<NavLink exact to={`/workshops/${slug}`} className='workshopCard__button'>
					More Details
				</NavLink>
			</div>
		);
	}
}

export default WorkShopCard;
