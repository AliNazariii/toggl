import React, { useEffect } from 'react';
import Layout from './components/Layout/Layout';
import TimerPage from './components/TimerPage/TimerPage';
import SettingPage from './components/SettingPage/SettingPage';
import ReportPage from './components/ReportPage/ReportPage';
import LogoContainer from './components/LogoContainer/LogoContainer';
import { Switch, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchTasks } from './actions/tasks/fetch';
import { fetchProjects } from './actions/projects/fetch';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
        dispatch(fetchProjects());
        dispatch(fetchTasks());
	}, []);
	
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
