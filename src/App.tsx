import React from 'react';
import Layout from './components/Layout/Layout';
import TimerPage from './components/TimerPage/TimerPage';
import SettingPage from './components/SettingPage/SettingPage';
import ReportPage from './components/ReportPage/ReportPage';
import LogoContainer from './components/LogoContainer/LogoContainer';
import { Switch, Route } from "react-router-dom";

function App() {
	return (
		<Layout>
			<LogoContainer />
			<Switch>
				<Route path="/setting">
					<SettingPage />
				</Route>
				<Route path="/report">
					<ReportPage />
				</Route>
				<Route path="/">
					<TimerPage />
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
