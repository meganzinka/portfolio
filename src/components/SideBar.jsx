import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import headshot from '../images/headshot.png';
const SideBar = () => {
	const history = useHistory();

	function changePage(event) {
		console.log('in change page function');
		console.log(event.target);
		history.push(event.target.value);
	}

	return (
		<div id="sidebar">
			<div id="sidebar-item-container">
				<img id="headshot" src={headshot} />
			</div>

			<Link id="link" to="/about">
				<div id="sidebar-item-container">
					<h3>About Me</h3>
				</div>
			</Link>

			<Link id="link" to="/resume">
				<div id="sidebar-item-container">
					<h3>Resume</h3>
				</div>
			</Link>

			<Link id="link" to="/projects">
				<div id="sidebar-item-container">
					<h3>Projects</h3>
				</div>
			</Link>
		</div>
	);
};

export default SideBar;
