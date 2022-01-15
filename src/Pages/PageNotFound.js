import React, { Component } from 'react';

class PageNotFound extends Component {
	render() {
		const { image, message } = this.props;
		return (
			<div className='container container--pageNotFound'>
				<div className='pageNotFound'>
					<img className='pageNotFound__image' src={image} alt='Page Not Found' />
					<h1 className='heading--1 heading--1-primary text-center'>{message}</h1>
				</div>
			</div>
		);
	}
}

export default PageNotFound;
