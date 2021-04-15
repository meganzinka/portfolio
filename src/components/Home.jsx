import React from 'react';
import computer from './../images/Computersmall.png';
import { useHistory } from 'react-router-dom';

const Home = (props) => {
	const history = useHistory();

	function enterSite(event) {
		if (window.location.pathname === '/') {
			props.setShowLanding(false);
			history.push('/about');
		} else history.push(window.location.pathname);
	}
	return (
		<div id="home-page">
			<img src={computer} onClick={enterSite} />
		</div>
	);
};

export default Home;
