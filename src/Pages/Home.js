import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import BarLoader from 'react-spinners/BarLoader';

// =============> Components <============
import Header from '../Components/Header/Header';
import Features from '../Components/HomePageComponents/Features/Features';
import WorkShops from '../Components/HomePageComponents/WorkShop/WorkShops';
import Banner from '../Components/HomePageComponents/Banner/Banner';
import Events from '../Components/HomePageComponents/Events/Events';
import FrequentlyAskedQuestions from '../Components/HomePageComponents/FAQ/FrequentlyAskedQuestions';
import Footer from '../Components/Footer/Footer';
import DiscountBannerComponent from '../Components/HelperComponents/DiscountBannerComponent';

import { API_DOMAIN } from '../Data/env';

// =============> Data <=============
import event from '../Data/event';

function Home() {
	const [loading, setLoading] = useState(false);
	const [homePageHeader, setHomePageHeader] = useState({});
	const [events, setEvents] = useState([]);
	const [faqs, setFaqs] = useState([]);
	const [banner, setBanner] = useState({});
	const [features, setFeatures] = useState([]);
	const [workshops, setWorkshops] = useState([]);

	const fetchData = () => {
		const homePageHeaderApi = `${API_DOMAIN}/headers/homePageHeader`;
		const eventsApi = `${API_DOMAIN}/events`;
		const faqsApi = `${API_DOMAIN}/faqs`;
		const bannersApi = `${API_DOMAIN}/banners`;
		const featuresApi = `${API_DOMAIN}/features`;
		const workshopsApi = `${API_DOMAIN}/workshops`;

		const getHomePageHeader = axios.get(homePageHeaderApi);
		const getEvents = axios.get(eventsApi);
		const getFaqs = axios.get(faqsApi);
		const getBanners = axios.get(bannersApi);
		const getFeatures = axios.get(featuresApi);
		const getWorkshops = axios.get(workshopsApi);

		axios
			.all([getHomePageHeader, getEvents, getFaqs, getBanners, getFeatures, getWorkshops])
			.then(
				axios.spread((...responses) => {
					setLoading(false);
					setHomePageHeader(responses[0].data.document.header);
					setEvents(responses[1].data.documents);
					setFaqs(responses[2].data.documents);
					setBanner(responses[3].data.documents[0]);
					setFeatures(responses[4].data.documents);
					setWorkshops(responses[5].data.documents);
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
		const isOldUser = window.localStorage.getItem('dexbot-coupon');
		if (!isOldUser) {
			toast.info(<DiscountBannerComponent />, {
				position: toast.POSITION.TOP_RIGHT,
				autoClose: false,
			});
			window.localStorage.setItem('dexbot-coupon', 'newUser');
		}
	}, []);

	return (
		<>
			{loading ? (
				<div className='loaderContainer'>
					<BarLoader color='#005aaa' loading={loading} height={5} width={150} />
				</div>
			) : (
				<div className='container container--home'>
					<Header {...homePageHeader} />
					<Features features={features} />
					<Banner {...banner} />
					<WorkShops workshops={workshops} />
					<Events {...event} techEvents={events} />
					<FrequentlyAskedQuestions faqs={faqs} padding='8rem 0' />
					<Footer />
				</div>
			)}
		</>
	);
}

export default Home;
