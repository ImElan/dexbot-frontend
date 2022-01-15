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
import { workShopPageInfo } from '../Data/workshop';

function WorkShop(props) {
	const [loading, setLoading] = useState(false);
	const [workShopPageHeader, setWorkshopPageHeader] = useState({});
	const [workshops, setWorkshops] = useState([]);

	const fetchData = () => {
		const workShopPageHeaderApi = `${API_DOMAIN}/headers/workShopPageHeader`;
		const workshopsApi = `${API_DOMAIN}/workshops`;

		const getWorkShopPageHeaderApi = axios.get(workShopPageHeaderApi);
		const getWorkshops = axios.get(workshopsApi);

		axios
			.all([getWorkShopPageHeaderApi, getWorkshops])
			.then(
				axios.spread((...responses) => {
					setLoading(false);
					setWorkshopPageHeader(responses[0].data.document.header);
					setWorkshops(responses[1].data.documents);
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
			toast.success(<h2>Workshop Booked Successfully.Check Your Email for receipt.</h2>, {
				position: toast.POSITION.TOP_CENTER,
			});
			props.history.push('/workshops');
		}
	}, []);

	return (
		<>
			{loading ? (
				<div className='loaderContainer'>
					<BarLoader color='#005aaa' loading={loading} height={5} width={150} />
				</div>
			) : (
				<div className='container container--workshop'>
					<Header {...workShopPageHeader} />
					<WorkShopInfoContainer
						history={props.history}
						info={workShopPageInfo}
						data={workshops}
						route='workshops'
					/>
					<Footer />
				</div>
			)}
		</>
	);
}

export default WorkShop;
