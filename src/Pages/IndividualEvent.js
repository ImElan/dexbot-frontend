import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import BarLoader from 'react-spinners/BarLoader';

import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import IndividualEventContainer from '../Components/IndividualEventPageComponent/IndividualEventContainer';

import { API_DOMAIN } from '../Data/env';

import { singleWorkShopPageInfo } from '../Data/workshop';

function IndividualEvent(props) {
	const [loading, setLoading] = useState(false);
	const [individualEvent, setIndividualEvent] = useState({});
	const { event_id } = props.match.params;

	useEffect(() => {
		setLoading(true);
		axios
			.get(`${API_DOMAIN}/events/${event_id}`)
			.then((response) => {
				setLoading(false);
				setIndividualEvent(response.data.document.event);
			})
			.catch((error) => {
				setLoading(false);
				const errorMessage = error?.response?.data?.message;
				toast.error(
					<h2>
						{errorMessage
							? errorMessage
							: 'Something went wrong. Check your network connection and try again later.'}
					</h2>,
					{
						position: toast.POSITION.TOP_CENTER,
					}
				);
			});
	}, [event_id]);

	const {
		_id,
		name,
		infoDetails,
		price,
		date,
		time,
		venue,
		infoImage,
		imageWidth,
		rules,
		studentsPerTeam,
	} = individualEvent;

	return (
		<>
			{loading ? (
				<div className='loaderContainer'>
					<BarLoader color='#005aaa' loading={loading} height={5} width={150} />
				</div>
			) : (
				<div className='container container--individualEvent'>
					<Header
						title={name}
						content={infoDetails}
						isHomePage={false}
						image={infoImage}
						imageWidth={imageWidth}
					/>
					<IndividualEventContainer
						_id={_id}
						price={price}
						info={singleWorkShopPageInfo}
						rules={rules}
						date={date}
						time={time}
						venue={venue}
						history={props.history}
						studentsPerTeam={studentsPerTeam}
					/>
					<Footer />
				</div>
			)}
		</>
	);
}

export default IndividualEvent;
