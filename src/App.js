import './style/App.css';
import SideBar from './components/SideBar';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import About from "./components/About"
import { Route, Switch } from "react-router-dom";
import {useState, useEffect} from "react"

function App() {
const [showLanding, setShowLanding] = useState(false)


return (
	<div id="app-wrapper">
	{showLanding ? (
	<Route exact path="/" render = {props => <Home setShowLanding={setShowLanding} /> } />) 
	: (
		<div>
			<div id="app-container">
				<div id = "sidebar-container">
					<SideBar setShowLanding={setShowLanding}/>
				</div>
				<div id="main-container">
					<Switch>
						<Route exact path="/about" component={About} showLanding = {showLanding} />
						<Route exact path="/resume" component={Resume} showLanding = {showLanding}/>
						<Route path="/projects" component={Projects} showLanding = {showLanding} />
					</Switch>
				</div>
		</div>
		</div> 
	)
}
</div>
)
}

export default App;
