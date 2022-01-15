import React from 'react';
import RuleBox from './RuleBox';
import Details from '../IndividualWorkShopPageComponent/Details';
import workshop_sprite from '../../assets/indi_workShop_sprite.svg';
import { NavLink } from 'react-router-dom';

import contact_image from '../../assets/contacts.svg';

function IndividualEventContainer(props) {
	const { _id, date, price, time, venue, rules, studentsPerTeam } = props;
	const { detailsSubTitle, detailsTitle } = props.info;

	return (
		<div className='individualEvent'>
			<h2 className='heading--2 heading--2-primary text-center'>
				Students Per Team : {studentsPerTeam}
			</h2>
			{/* RuleBoxes goes here */}
			<div className='individualEvent__rulesContainer'>
				{rules && rules.map((rule, index) => <RuleBox {...rule} key={index} />)}
			</div>
			{/* Details Box Goes here */}
			<div className='individualWorkShop__detailsContainer'>
				<h4 className='heading--4 heading--4-dark text-center'>{detailsSubTitle}</h4>
				<h1 className='heading--1 heading--1-dark text-center'>{detailsTitle}</h1>
				<div className='individualWorkShop__details'>
					<Details detail={date} icon='calendar' />
					<div className='individualWorkShop__singleDetail'>
						<img className='accomodation__contactImage' src={contact_image} alt='phone' />
						<h5 className='individualWorkShop__detail'>{venue}</h5>
					</div>
					<Details detail={price} icon='money' />
					<Details detail={time} icon='time' />
				</div>
			</div>
			<NavLink
				to={`/techEvents/booking/${_id}`}
				className='btn individualWorkShop__button'
			>
				<svg className='individualWorkShop__bookNowSvg'>
					<use xlinkHref={`${workshop_sprite}#booking`} />
				</svg>
				Book Now
			</NavLink>
		</div>
	);
}

export default IndividualEventContainer;
