import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { toast } from 'react-toastify';

import { API_DOMAIN } from '../Data/env';
import { STRIPE_KEY } from '../Data/env';

const stripePromise = loadStripe(STRIPE_KEY);

const bookEvent = async (eventId, body) => {
	try {
		const stripe = await stripePromise;
		const response = await axios.post(
			`${API_DOMAIN}/events/checkout-session/${eventId}`,
			body
		);
		await stripe.redirectToCheckout({ sessionId: response.data.session.id });
	} catch (error) {
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
	}
};

export { bookEvent };
