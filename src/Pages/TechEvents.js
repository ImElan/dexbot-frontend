import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import BarLoader from 'react-spinners/BarLoader';

// ============> Components <=================
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import WorkShopInfoContainer from '../Components/WorkShopPageComponent/WorkShopInfoContainer';

import { API_DOMAIN } from '../Data/env';

// ============> Data <=============
import { eventsPageInfo } from '../Data/event';

function TechEvents(props) {
	const [loading, setLoading] = useState(false);
	const [eventPageHeader, setEventPageHeader] = useState({});
	const [events, setEvents] = useState([]);

	const fetchData = () => {
		const techEventPageHeaderApi = `${API_DOMAIN}/headers/techEventPageHeader`;
		const eventsApi = `${API_DOMAIN}/events`;

		const getTechEventPageHeader = axios.get(techEventPageHeaderApi);
		const getEvents = axios.get(eventsApi);

		axios
			.all([getTechEventPageHeader, getEvents])
			.then(
				axios.spread((...responses) => {
					setLoading(false);
					setEventPageHeader(responses[0].data.document.header);
					setEvents(responses[1].data.documents);
				})
			)
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
	};

	useEffect(() => {
		setLoading(true);
		fetchData();
	}, []);

	useEffect(() => {
		const query = new URLSearchParams(window.location.search);
		if (query.get('success')) {
			toast.success(<h2>Event Booked Successfully. Check Your Email for receipt.</h2>, {
				position: toast.POSITION.TOP_CENTER,
			});
		}
		props.history.push('/techEvents');
	}, []);

	return (
		<>
			{loading ? (
				<div className='loaderContainer'>
					<BarLoader color='#005aaa' loading={loading} height={5} width={150} />
				</div>
			) : (
				<div className='container container--workshop'>
					<Header {...eventPageHeader} />
					<WorkShopInfoContainer info={eventsPageInfo} data={events} route='techEvents' />
					<Footer />
				</div>
			)}
		</>
	);
}

export default TechEvents;
