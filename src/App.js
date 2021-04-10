import './style/App.css';
import SideBar from './components/SideBar';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Logo from "./components/Logo"
import { Route, Switch } from "react-router-dom";

function App() {
	return (
		<div>
			<div id="app-container">
				<Logo />
				<div id = "sidebar-container">
					<SideBar />
				</div>
				<div id="main-container">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/resume" component={Resume} />
						<Route path="/projects" component={Projects} />
					</Switch>
				</div>
			</div>
		</div>
	);
}

export default App;
