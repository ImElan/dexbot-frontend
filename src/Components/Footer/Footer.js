import React, { Component } from 'react';

import social_media from '../../assets/social_sprite.svg';

class Footer extends Component {
	render() {
		return (
			<footer className='footer'>
				<h2 className='heading--2 heading--2-light'>Dexbot</h2>
				<div className='footer__socialMedia'>
					<a
						href='https://www.facebook.com/MITROBOTICSASSOCIATION/'
						className='footer__socialMedia_icon'
					>
						<svg className='footer__socialMedia_icon-fb'>
							<use xlinkHref={`${social_media}#facebook`} />
						</svg>
					</a>
					<a
						href='https://instagram.com/mit_robotics_association?igshid=19h2gt2egwdqd'
						className='footer__socialMedia_icon'
					>
						<svg className='footer__socialMedia_icon-insta'>
							<use xlinkHref={`${social_media}#instagram`} />
						</svg>
					</a>
				</div>
				<p className='footer__copyright'>
					&copy; Copyright 2020, Dexbot Inc. All Rights Reserved.
				</p>
			</footer>
		);
	}
}

export default Footer;
