import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';

import { ROOT_DOMAIN } from '../../Data/env';

import { NavLink } from 'react-router-dom';

class Header extends Component {
	render() {
		const { title, content, image, isHomePage, imageWidth } = this.props;
		return (
			<section className='header'>
				<Navbar />
				<div className='header__content'>
					<h1 className='heading--1 heading--1-dark'>{title}</h1>
					<h3 className='heading--3 heading--3-dark header__content--content'>
						{content}
					</h3>
					{isHomePage && (
						<NavLink
							exact
							to='/register'
							className='btn header__content--btn header__content--btn_primary'
						>
							Register Now
						</NavLink>
					)}
				</div>
				<div className='header__image'>
					<img
						className='header__image--img'
						style={{ width: imageWidth }}
						src={image && `${ROOT_DOMAIN}/images/${image}`}
						alt='Header'
					></img>
				</div>
			</section>
		);
	}
}

export default Header;
