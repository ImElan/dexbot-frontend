import React from 'react';
import Agenda from './Agenda';
import Requirements from './Requirements';
import Details from './Details';
import workshop_sprite from '../../assets/indi_workShop_sprite.svg';
import { NavLink } from 'react-router-dom';

import contact_image from '../../assets/contacts.svg';

function IndividualWorkShopContainer(props) {
	const {
		subtitle,
		title,
		requirementsSubTitle,
		requirementsTitle,
		detailsSubTitle,
		detailsTitle,
	} = props.info;
	const { _id, price, date, time, venue, agenda, requirements } = props;

	return (
		<div className='individualWorkShop'>
			{/* Agenda */}
			<div className='individualWorkShop__agendaContainer'>
				<h4 className='heading--4 heading--4-dark text-center'>{subtitle}</h4>
				<h1 className='heading--1 heading--1-dark text-center'>{title}</h1>
				<div className='individualWorkShop__agendas'>
					{agenda &&
						agenda.map((singleAgenda, index) => (
							<Agenda agenda={singleAgenda} key={index} />
						))}
				</div>
			</div>
			{/* Requirements */}
			<div className='individualWorkShop__requirementContainer'>
				<h4 className='heading--4 heading--4-dark text-center'>{requirementsSubTitle}</h4>
				<h1 className='heading--1 heading--1-dark text-center'>{requirementsTitle}</h1>
				<div className='individualWorkShop__requirements'>
					{requirements &&
						requirements.map((singleRequirement, index) => (
							<Requirements requirement={singleRequirement} key={index} />
						))}
				</div>
			</div>
			{/* Details */}
			<div className='individualWorkShop__detailsContainer'>
				<h4 className='heading--4 heading--4-dark text-center'>{detailsSubTitle}</h4>
				<h1 className='heading--1 heading--1-dark text-center'>{detailsTitle}</h1>
				<div className='individualWorkShop__details'>
					<Details detail={date} icon='calendar' />
					<Details detail={time} icon='time' />
					<Details detail={price} icon='money' />
					<div className='individualWorkShop__singleDetail'>
						<img className='accomodation__contactImage' src={contact_image} alt='phone' />
						<h5 className='individualWorkShop__detail'>{venue}</h5>
					</div>
				</div>
			</div>
			{/* BookNow Button */}
			<NavLink
				className='btn individualWorkShop__button'
				to={`/workshops/booking/${_id}`}
			>
				<svg className='individualWorkShop__bookNowSvg'>
					<use xlinkHref={`${workshop_sprite}#booking`} />
				</svg>
				Book Now
			</NavLink>
		</div>
	);
}

export default IndividualWorkShopContainer;
