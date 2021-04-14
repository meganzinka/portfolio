import React from 'react';
import resume from './../files/MeganZinkaResume.pdf';

const ResumeLarge = () => {
	return (
		<div id="popup-wrapper">
			<div id="popup">
				<embed src={resume} type="application/pdf" width="100%" height="600px" />
			</div>
		</div>
	);
};

export default ResumeLarge;
