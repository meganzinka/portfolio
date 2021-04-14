import React from 'react';
import resume from './../files/MeganZinkaResume.pdf';
import {useState} from "react"
import ResumeLarge from "./ResumeLarge"
const Resume = () => {

	return (
		<div>
			<embed src={resume} type="application/pdf" width="100%" height="600px"/>

		</div>
	);
};

export default Resume;
