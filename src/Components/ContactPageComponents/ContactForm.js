import React, { useEffect, useState } from 'react';
import FormInput from './FormInput';

import { bookEvent } from '../../Helpers/bookEvent';
import { bookWorkshop } from '../../Helpers/bookWorkshop';

import { toast } from 'react-toastify';

import contact from '../../Data/contact';

function ContactForm(props) {
	const { fromWorkshop, handleSetLoading } = props;

	let workshop_id;
	let event_id;
	if (fromWorkshop) {
		workshop_id = props.match.params.workshop_id;
	} else {
		event_id = props.match.params.event_id;
	}

	const { inputs } = contact;
	const [fields, setFields] = useState(inputs);

	const handleFieldChange = (id, value) => {
		const newFields = fields.map((field) => {
			if (field.id !== id) return field;
			return {
				...field,
				value,
			};
		});
		setFields(newFields);
	};

	const handleBooking = async (event) => {
		event.preventDefault();
		const fieldNotEmpty = fields.every((field) => field.value !== '');
		let quantityIsDecimal;
		fields.forEach((field) => {
			if (field.id === 'quantity') {
				quantityIsDecimal = field.value.includes('.');
			}
		});

		if (fieldNotEmpty) {
			if (quantityIsDecimal) {
				toast.error(<h2>Don't enter decimal value for number of tickets</h2>, {
					position: toast.POSITION.TOP_CENTER,
				});
			} else {
				const userData = {};
				fields.forEach((field) => {
					userData[field.id] = field.value;
				});
				handleSetLoading(true);
				if (fromWorkshop) {
					await bookWorkshop(workshop_id, userData);
					handleSetLoading(false);
				} else {
					await bookEvent(event_id, userData);
					handleSetLoading(false);
				}
			}
		} else {
			toast.error(<h2>Please Fill in all the fields to continue.</h2>, {
				position: toast.POSITION.TOP_CENTER,
			});
		}
	};

	useEffect(() => {
		if (fromWorkshop) {
			toast.info(<h2>For Every 5 tickets you'll get 1 ticket's price off.</h2>, {
				position: toast.POSITION.TOP_CENTER,
				autoClose: false,
			});
		}
	}, []);

	return (
		<form className='contact__form'>
			{fields.map((input, index) => (
				<FormInput {...input} key={index} handleFieldChange={handleFieldChange} />
			))}
			<button className='contact__sendButton' onClick={handleBooking}>
				Proceed To Checkout
			</button>
		</form>
	);
}

export default ContactForm;
