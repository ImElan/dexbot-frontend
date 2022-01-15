import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import BarLoader from 'react-spinners/BarLoader';

import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import ContactPageContainer from '../Components/ContactPageComponents/ContactPageContainer';

import { API_DOMAIN } from '../Data/env';

function ContactPage(props) {
	const [loading, setLoading] = useState(false);
	const [contactDetails, setContactDetails] = useState({});
	const [contactPageHeader, setContactPageHeader] = useState({});

	const fetchData = () => {
		const contactPageHeaderApi = `${API_DOMAIN}/headers/contactPageHeader`;
		const contactsApi = `${API_DOMAIN}/contacts`;

		const getContactPageHeader = axios.get(contactPageHeaderApi);
		const getContacts = axios.get(contactsApi);

		axios
			.all([getContactPageHeader, getContacts])
			.then(
				axios.spread((...responses) => {
					setLoading(false);
					setContactPageHeader(responses[0].data.document.header);
					setContactDetails(responses[1].data.documents[0]);
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

	return (
		<>
			{loading ? (
				<div className='loaderContainer'>
					<BarLoader color='#005aaa' loading={loading} height={5} width={150} />
				</div>
			) : (
				<div className='container container--contact'>
					<Header {...contactPageHeader} />
					<ContactPageContainer {...contactDetails} />
					<Footer />
				</div>
			)}
		</>
	);
}

export default ContactPage;
