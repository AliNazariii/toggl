import React from 'react';
import Layout from './components/Layout/Layout';
import TimerPage from './components/TimerPage/TimerPage';
import LogoContainer from './components/LogoContainer/LogoContainer';
import { Switch, Route } from "react-router-dom";

function App() {
	return (
		<Layout>
			<LogoContainer />
			<Switch>
				<Route path="/setting">
					<h1>setting</h1>
				</Route>
				<Route path="/report">
					<h1>report</h1>
				</Route>
				<Route path="/">
					<TimerPage />
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
