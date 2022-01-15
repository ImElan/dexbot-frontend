import React, { Component } from 'react';
import EventBox from './EventBox';
import { NavLink } from 'react-router-dom';

class Events extends Component {
	render() {
		const { title, subTitle, techEvents } = this.props;
		return (
			<section className='events'>
				<div className='events__content'>
					<h2 className='heading--2 heading--2-light text-center'>{title}</h2>
					<h3 className='heading--3 heading--3-light events__content--subtitle text-center'>
						{subTitle}
					</h3>
					<NavLink
						exact
						to='/techEvents'
						className='btn events__content--btn events__content--btn_secondary'
					>
						Explore Events
					</NavLink>
				</div>
				<div className='events__list events__list--technical'>
					{techEvents.slice(0, Math.ceil(techEvents.length / 2)).map((event) => (
						<EventBox icon={event.icon} event={event.name} key={event.name} side='left' />
					))}
				</div>
				<div className='events__list events__list--nonTechnical'>
					{techEvents.slice(Math.ceil(techEvents.length / 2)).map((event) => (
						<EventBox
							icon={event.icon}
							event={event.name}
							key={event.name}
							side='right'
						/>
					))}
				</div>
			</section>
		);
	}
}

export default Events;
