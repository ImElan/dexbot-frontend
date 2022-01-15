import React from 'react';

import { NavLink } from 'react-router-dom';
import SingleWorkShopInfoDetails from './SingleWorkShopInfoDetails';
import contact_image from '../../assets/contacts.svg';

import { ROOT_DOMAIN } from '../../Data/env';

function SingleWorkShopInfoCard(props) {
	const {
		_id,
		name,
		infoDetails,
		price,
		date,
		time,
		venue,
		infoImage,
		index,
		imageWidth,
		slug,
		route,
	} = props;

	let imagePosition, contentPosition, imagePadding, contentPadding, colorStart, colorEnd;
	if (index % 2 === 1) {
		imagePosition = 2;
		contentPosition = 1;
		imagePadding = '8rem';
		contentPadding = '0rem';
		colorEnd = '#E2E8F0';
		colorStart = '#EDF2F7';
	} else {
		imagePosition = 1;
		contentPosition = 2;
		imagePadding = '0rem';
		contentPadding = '8rem';
		colorEnd = '#EDF2F7';
		colorStart = '#E2E8F0';
	}

	return (
		<>
			<div
				className='workshopInfoContainer__singleInfoCard'
				style={{
					backgroundImage: `
                                          linear-gradient(
                                                to right,
                                                ${colorStart} 0%,
                                                ${colorStart} 50%,
                                                ${colorEnd} 50%
                                          )
                                    `,
				}}
			>
				<h3 className='workshopInfoContainer__name'>{name}</h3>
				<div
					className='workshopInfoContainer__image'
					style={{
						gridColumn: `${imagePosition} / span 1`,
						paddingLeft: imagePadding,
						paddingRight: contentPadding,
					}}
				>
					<img
						className='workshopInfoContainer__image--img'
						src={`${ROOT_DOMAIN}/images/${infoImage}`}
						alt='web dev workshop'
						style={{ width: imageWidth }}
					/>
				</div>
				<div
					className='workshopInfoContainer__content'
					style={{
						gridColumn: `${contentPosition} / span 1`,
						paddingLeft: contentPadding,
						paddingRight: imagePadding,
					}}
				>
					<h3 className='workshopInfoContainer__about'>{infoDetails}</h3>
					<div className='workshopInfoContainer__details'>
						<SingleWorkShopInfoDetails info={date} icon='calendar' />
						<SingleWorkShopInfoDetails info={time} icon='time' />
						{price && <SingleWorkShopInfoDetails info={price} icon='money' />}
						<div className='workshopInfoContainer__detailsContainer'>
							<img
								className='accomodation__contactImage'
								style={{ marginRight: '10px' }}
								src={contact_image}
								alt='phone'
							/>
							<p className='workshopInfoContainer__detailsDetail'>{venue}</p>
						</div>
					</div>
					<div
						className='workshopInfoContainer__buttons'
						style={{ width: price ? '80%' : '100%' }}
					>
						<NavLink
							className='btn workshopInfoContainer__button workshopInfoContainer__button--moreDetails'
							exact
							to={`/${route}/${slug}`}
						>
							View More Details
						</NavLink>
						{price && (
							<NavLink
								to={`${route}/booking/${_id}`}
								className='btn workshopInfoContainer__button workshopInfoContainer__button--bookNow'
							>
								Book Now
							</NavLink>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default SingleWorkShopInfoCard;
