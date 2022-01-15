import React, { useState } from 'react';
import BarLoader from 'react-spinners/BarLoader';

import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import ContactForm from '../Components/ContactPageComponents/ContactForm';

function BookingContactsPage(props) {
	const [loading, setLoading] = useState(false);

	const handleSetLoading = (value) => {
		setLoading(value);
	};

	const { fromWorkshop } = props;
	return (
		<>
			{loading ? (
				<div className='loaderContainer'>
					<BarLoader color='#005aaa' loading={loading} height={5} width={150} />
				</div>
			) : (
				<div className='container container--booking'>
					<Navbar />
					<div className='contact'>
						<h1 className='heading--1 heading--1-dark contact__heading'>Your Details</h1>
						<hr className='contact__underline'></hr>
						<h3 className='heading--3 heading--3-dark text-center'>
							Please Fill Your Details Before Proceeding to Booking
						</h3>
						<div className='contact__componentContainer'>
							<ContactForm
								fromWorkshop={fromWorkshop}
								match={props.match}
								handleSetLoading={handleSetLoading}
							/>
						</div>
					</div>
					<Footer />
				</div>
			)}
		</>
	);
}

export default BookingContactsPage;
