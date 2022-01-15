import React from 'react';

function FormInput(props) {
	const { type, label, id, placeholder, value, handleFieldChange } = props;

	const handleChange = (event) => {
		handleFieldChange(id, event.target.value);
	};

	return (
		<div className='contact__inputGroup'>
			<label className='contact__label' htmlFor={`${id}`}>
				{label}
			</label>
			{type === 'number' ? (
				<input
					className='contact__input'
					type='number'
					placeholder={`${placeholder}`}
					id={`${id}`}
					name={id}
					value={value}
					onChange={handleChange}
					min='1'
					// step='1'
				/>
			) : (
				<input
					className='contact__input'
					type={`${type}`}
					placeholder={`${placeholder}`}
					id={`${id}`}
					name={id}
					value={value}
					onChange={handleChange}
				/>
			)}
			<p className='contact__hint'>Hint : {`${placeholder}`}</p>
		</div>
	);
}

export default FormInput;
