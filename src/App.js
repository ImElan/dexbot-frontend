import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import WorkShop from './Pages/WorkShop';
import IndividualWorkShop from './Pages/IndividualWorkShop';
import IndividualEvent from './Pages/IndividualEvent';
import TechEvents from './Pages/TechEvents';
import RegisterPage from './Pages/RegisterPage';
import ContactPage from './Pages/ContactPage';
import BookingContactsPage from './Pages/BookingContactsPage';
import PageNotFound from './Pages/PageNotFound';

import server_down from './assets/server_down.svg';
import page_not_found from './assets/page_not_found.svg';

import 'react-toastify/dist/ReactToastify.css';
import './sass/main.scss';

function App() {
	return (
		<div>
			<Switch>
				{/* <Route
					exact
					path='/'
					render={() => (
						<PageNotFound
							image={server_down}
							message='Due to unavoidable reasons Dexbot is not live right now. Further informations will be updated soon.'
						/>
					)}
				/> */}
				<Route exact path='/' render={() => <Home />} />
				<Route
					exact
					path='/workshops'
					render={(routeProps) => <WorkShop {...routeProps} />}
				/>
				<Route
					exact
					path='/workshops/:workshop_id'
					render={(routeProps) => {
						return <IndividualWorkShop {...routeProps} />;
					}}
				/>
				<Route
					exact
					path='/techEvents'
					render={(routeProps) => <TechEvents {...routeProps} />}
				/>
				<Route
					exact
					path='/techEvents/:event_id'
					render={(routeProps) => {
						return <IndividualEvent {...routeProps} />;
					}}
				/>
				<Route
					exact
					path='/workshops/booking/:workshop_id'
					render={(routeProps) => {
						return <BookingContactsPage {...routeProps} fromWorkshop={true} />;
					}}
				/>
				<Route
					exact
					path='/techEvents/booking/:event_id'
					render={(routeProps) => {
						return <BookingContactsPage {...routeProps} fromWorkshop={false} />;
					}}
				/>
				<Route exact path='/register' render={() => <RegisterPage />} />
				<Route exact path='/contacts' render={() => <ContactPage />} />
				<Route
					exact
					render={() => (
						<PageNotFound image={page_not_found} message='Please enter a valid URL' />
					)}
				/>
			</Switch>
		</div>
	);
}

export default App;
