import React from 'react';
import exit from './../images/Exit.svg';
const CapstoneDescription = (props) => {
	console.log('inside capstone description');
	function hidePopup(event) {
		props.setPopup(false);
	}

	if (props.popup) {
		return (
			<div id="popup-wrapper" style={props.popup ? { display: 'flex' } : { display: 'none' }}>
				<div id="popup">
					<div id="left-popup">Capstone Project Sales Dashboard Description</div>
					<div id="right-popup">
						<div id="description">
							Created from scratch an Executive Sales Dashboard for a company that was using CSV files for
							sales reports - they lacked any centralized sales data repository. The dashboard hosts a
							variety of filter tools which are responsive to real-time database updates and user input.
							My principal role in the project was to design and create the filtering tool, from back to
							front end.
						</div>
						<div id="exit-popup" onClick={hidePopup}>
							<img id="exit-icon" src={exit} alt="X arrow" />
						</div>
					</div>
				</div>
			</div>
		);
	} else return null;
};

export default CapstoneDescription;
