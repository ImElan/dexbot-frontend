import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import BarLoader from 'react-spinners/BarLoader';

import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import RegisterCardsContainer from '../Components/RegisterPage/RegisterCardsContainer';

import { API_DOMAIN } from '../Data/env';

function RegisterPage() {
	const [loading, setLoading] = useState(false);
	const [registerPageHeader, setRegisterPageHeader] = useState({});
	const [registerDetails, setRegisterDetails] = useState([]);

	const fetchData = () => {
		const registerPageHeaderApi = `${API_DOMAIN}/headers/registerPageHeader`;
		const registersApi = `${API_DOMAIN}/registers`;

		const getRegisterPageHeaderApi = axios.get(registerPageHeaderApi);
		const getRegisters = axios.get(registersApi);

		axios
			.all([getRegisterPageHeaderApi, getRegisters])
			.then(
				axios.spread((...responses) => {
					setLoading(false);
					setRegisterPageHeader(responses[0].data.document.header);
					setRegisterDetails(responses[1].data.documents);
				})
			)
			.catch((error) => {
				setLoading(false);
				toast.error(<h2>{error.response.data.message}</h2>, {
					position: toast.POSITION.TOP_CENTER,
				});
			});
	};

	useEffect(() => {
		setLoading(true);
		fetchData();
	}, []);

	return (
		<>
			{loading ? (
				<div className='loaderContainer'>
					<BarLoader color='#005aaa' loading={loading} height={5} width={150} />
				</div>
			) : (
				<div className='container container--register'>
					<Header {...registerPageHeader} />
					<RegisterCardsContainer registerDetails={registerDetails} />
					<Footer />
				</div>
			)}
		</>
	);
}

export default RegisterPage;
