import React, { useState, useEffect } from 'react';
import Styles from './RunningTask.module.scss';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../reducers/index';
import moment from 'moment';

const RunningTaskContainer = () => {
	const dispatch = useDispatch()
	const [timer, setTime] = useState(0)
	const state = useSelector((state: AppState) => state.runningTask)
	let start = moment().format();
	useEffect(() => {
		start = moment().format();
		setTime(0);
	}, [state.isRunning]);
	useEffect(() => {
		if (!state.isRunning) return;
		const interval = setInterval(() => {
			let tmp = timer;
			setTime(tmp + 1);
		}, 1000);
		return () => clearInterval(interval);
	});
	return(
		<div 
			className={Styles.RunningTaskContainer} 
			style={{ backgroundColor: state.isRunning ? "#303030" : "transparent" }}
		>
			{state.isRunning ? (
				<div 
					className={Styles.DescriptionContainer}
					onClick={() => dispatch({ type: 'TOGGLE_OPENNING' })}
				>
					<h3 className={Styles.Time}>{moment.utc(timer * 1000).format('HH:mm:ss')}</h3>
					<p className={Styles.Description}>{state.description || "Add Description"}</p>
				</div>
			) : null}
			<Button start={start} duration={timer} description={state.description} running={state.isRunning} />
		</div>
	)
}

export default RunningTaskContainer;