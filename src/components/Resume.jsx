import React from 'react';
import resume from './../files/MeganZinkaResume.pdf';
import {useState} from "react"
import ResumeLarge from "./ResumeLarge"
const Resume = () => {
    const [fullScreen, setFullScreen] = useState(false)

    function showResume(event) { 
        setFullScreen(true)
        console.log("in show resume function")
        console.log(fullScreen)
    }
	return (
		<div>
            {fullScreen ? (
			<embed src={resume} type="application/pdf" width="100%" height="600px" onClick={showResume}/>)
            : (<ResumeLarge setFullScreen = {setFullScreen} />) }
		</div>
	);
};

export default Resume;
