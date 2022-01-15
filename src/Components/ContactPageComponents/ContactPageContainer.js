import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import SyncLoader from 'react-spinners/SyncLoader';

import FrequentlyAskedQuestions from '../HomePageComponents/FAQ/FrequentlyAskedQuestions';
import contact_image from '../../assets/contacts.svg';

import { API_DOMAIN } from '../../Data/env';

function ContactPageContainer(props) {
	const [loading, setLoading] = useState(false);
	const [faqs, setFaqs] = useState([]);

	const { title, subtitle_1, contacts } = props;

	useEffect(() => {
		setLoading(true);
		axios
			.get(`${API_DOMAIN}/faqs`)
			.then((response) => {
				setLoading(false);
				setFaqs(response.data.documents);
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
	}, []);

	return (
		<div className='contact'>
			<h1 className='heading--1 heading--1-dark contact__heading'>{title}</h1>
			<hr className='contact__underline'></hr>
			<h3 className='heading--3 heading--3-dark text-center'>{subtitle_1}</h3>
			<div className='contact__componentContainer'>
				{loading ? (
					<div className='contactLoaderContainer'>
						<SyncLoader color='#005aaa' size={18} margin={2} />
					</div>
				) : (
					<FrequentlyAskedQuestions faqs={faqs} padding='2rem 0' />
				)}
			</div>
			<div className='contact__contactUsContainer'>
				<p className='contact__contactText'>Still Having Issues ?</p>
				<p className='contact__contactLink'>Contact Us</p>
			</div>
			<div className='contact__contactsContainer'>
				{contacts &&
					contacts.map((contact) => (
						<div className='accomodation__contact' key={contact._id}>
							<img
								className='accomodation__contactImage'
								src={contact_image}
								alt='phone'
							/>
							<div className='accomodation__contactDetails'>
								<h2 className='heading--2 heading--2-dark'>{contact.name}</h2>
								<h4 className='heading--4 heading--4-dark'>{contact.phoneNumber}</h4>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}

export default ContactPageContainer;
