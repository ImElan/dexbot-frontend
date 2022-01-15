import React, { Component } from 'react';
import RegisterInfo from './RegisterInfo';
import arrowSprite from '../../assets/arrow_sprite.svg';

import { ROOT_DOMAIN } from '../../Data/env';
import { NavLink } from 'react-router-dom';

class RegisterCard extends Component {
	render() {
		const { title, price, infos, image, color, toLink } = this.props;
		return (
			<div className='register__card'>
				<h2
					className='heading--2 heading--2-dark text-center register__title'
					style={{
						boxShadow: `0 0 15px ${color}`,
						backgroundColor: color,
					}}
				>
					{title}
				</h2>
				<p className='register__price' style={{ color: color }}>
					<span className='register__rupeeSymbol'>&#x20B9;</span>
					{price}
				</p>
				<div className='register__infos'>
					{infos.map((info, index) => (
						<RegisterInfo info={info} key={index} color={color} />
					))}
				</div>
				{image && (
					<div className='register__imageContainer'>
						<img
							className='register__image'
							src={`${ROOT_DOMAIN}/images/${image}`}
							alt='title'
						/>
					</div>
				)}
				<NavLink
					to={toLink}
					style={{
						backgroundColor: color,
					}}
					className='btn register__button'
				>
					Book Now
					<svg className='register__buttonArrow'>
						<use xlinkHref={`${arrowSprite}#right`} />
					</svg>
				</NavLink>
			</div>
		);
	}
}

export default RegisterCard;
