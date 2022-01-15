import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import BarLoader from 'react-spinners/BarLoader';

// =============> Component <=================
import Header from '../Components/Header/Header';
import IndividualWorkShopContainer from '../Components/IndividualWorkShopPageComponent/IndividualWorkShopContainer';
import Footer from '../Components/Footer/Footer';

import { API_DOMAIN } from '../Data/env';

// =============> Data <================
import { singleWorkShopPageInfo } from '../Data/workshop';

function IndividualWorkShop(props) {
	const [loading, setLoading] = useState(false);
	const [individualWorkShop, setIndividualWorkShop] = useState({});
	const { workshop_id } = props.match.params;

	useEffect(() => {
		setLoading(true);
		axios
			.get(`${API_DOMAIN}/workshops/${workshop_id}`)
			.then((response) => {
				setLoading(false);
				setIndividualWorkShop(response.data.document.workshop);
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
	}, [workshop_id]);

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
		agenda,
		requirements,
	} = individualWorkShop;
	return (
		<>
			{loading ? (
				<div className='loaderContainer'>
					<BarLoader color='#005aaa' loading={loading} height={5} width={150} />
				</div>
			) : (
				<div className='container container--individualWorkShop'>
					<Header
						title={name}
						content={infoDetails}
						isHomePage={false}
						image={infoImage}
						imageWidth={imageWidth}
					/>
					<IndividualWorkShopContainer
						info={singleWorkShopPageInfo}
						agenda={agenda}
						requirements={requirements}
						time={time}
						date={date}
						venue={venue}
						price={price}
						_id={_id}
						history={props.history}
					/>
					<Footer />
				</div>
			)}
		</>
	);
}

export default IndividualWorkShop;
