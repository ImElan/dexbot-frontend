import React from 'react';
import SingleWorkShopInfoCard from './SingleWorkShopInfoCard';

function WorkShopInfoContainer(props) {
	const { subtitle, title, detail } = props.info;
	const { data, route } = props;
	return (
		<div className='workshopInfoContainer'>
			<div className='workshopInfoContainer__heading'>
				<h4 className='heading--4 heading--4-dark text-center'>{subtitle}</h4>
				<h1 className='heading--1 heading--1-dark text-center'>{title}</h1>
				<div className='workshopInfoContainer__dots'>
					<div className='workshopInfoContainer__dot'></div>
					<div className='workshopInfoContainer__dot'></div>
					<div className='workshopInfoContainer__dot'></div>
					<div className='workshopInfoContainer__dot'></div>
				</div>
			</div>
			<div className='workshopInfoContainer__workshops'>
				{data.map((workshop, index) => (
					<SingleWorkShopInfoCard
						{...workshop}
						index={index}
						key={workshop.name}
						route={route}
					/>
				))}
			</div>
		</div>
	);
}

export default WorkShopInfoContainer;
