import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SyncLoader from 'react-spinners/SyncLoader';

import { API_DOMAIN } from '../../Data/env';

function DiscountBannerComponent(props) {
	const [loading, setLoading] = useState(false);
	const [discountBannerDate, setDiscountBannerDate] = useState('28th March');

	useEffect(() => {
		setLoading(true);
		axios
			.get(`${API_DOMAIN}/banners`)
			.then((response) => {
				setLoading(false);
				setDiscountBannerDate(response.data.documents[0].discountBannerDate);
			})
			.catch((error) => {
				setLoading(false);
			});
	}, []);

	return (
		<>
			{loading ? (
				<div className='contactLoaderContainer'>
					<SyncLoader color='#005aaa' size={18} margin={2} />
				</div>
			) : (
				<div className='discountBanner'>
					<h1 className='heading--3 discountBanner__title'>Welcome To Dexbot</h1>
					<h2 className='heading--4 discountBanner__subtitle'>Offers :</h2>
					<ul className='discountBanner__list'>
						<li className='discountBanner__list--item'>
							<h3 className='heading--5'>
								For Every 5 tickets you book you'll get a offer of 1 ticket's price (only
								for workshops).
							</h3>
						</li>
						<li className='discountBanner__list--item'>
							<h3 className='heading--5'>
								{`EARLY BIRD OFFER: Until ${discountBannerDate} you'll get a 10% discount on both events
						and workshops.`}
							</h3>
						</li>
					</ul>
				</div>
			)}
		</>
	);
}

export default DiscountBannerComponent;
