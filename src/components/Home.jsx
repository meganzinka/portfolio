import React from 'react';
import computer from "./../images/Background2.png"
import { useHistory } from "react-router-dom";

const Home = (props) => {
	const history = useHistory() 

	function enterSite (event) {
		props.setShowLanding(false)
		history.push("/about")
	}
	return (
		<div id ="home-page">
			<img src = {computer} onClick={enterSite} />
		</div>
	);
};

export default Home;
