import React from 'react';
import Layout from './components/Layout/Layout';
import TasksContainer from './components/Tasks/TasksContainer';
import LogoContainer from './components/LogoContainer/LogoContainer';
import TaskDetails from './components/TaskDetails/TaskDetails';
import { Switch, Route, Link } from "react-router-dom";

function App() {
	return (
		<Layout>
			<Route path="/Timer">
				<TaskDetails />
				<LogoContainer />
				<TasksContainer />
			</Route>
			<Route path="/Setting">
				<h1>setting</h1>
			</Route>
			<Route path="/Reports">
				<h1>report</h1>
			</Route>
		</Layout>
	);
}

export default App;
