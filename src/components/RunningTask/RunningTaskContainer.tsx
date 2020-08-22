import React, { useState, useEffect } from 'react';
import Styles from './RunningTask.module.scss';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

interface State {
	runningTask: {
		isRunning: boolean
	}
}
  
const RunningTaskContainer = () => {
	const dispatch = useDispatch()
	const [timer, setTime] = useState(0)
	const isRunning = useSelector((state: State) => state.runningTask.isRunning)
	let start = moment().format();
	useEffect(() => {
		start = moment().format();
		setTime(0);
	}, [isRunning]);
	useEffect(() => {
		if (!isRunning) return;
		const interval = setInterval(() => {
			let tmp = timer;
			setTime(tmp + 1);
		}, 1000);
		return () => clearInterval(interval);
	});
	return(
		<div 
			className={Styles.RunningTaskContainer} 
			style={{ backgroundColor: isRunning ? "#303030" : "transparent" }}
		>
			{isRunning ? (
				<div 
					className={Styles.DescriptionContainer}
					onClick={() => dispatch({ type: 'TOGGLE_OPENNING' })}
				>
					<h3 className={Styles.Time}>{moment.utc(timer * 1000).format('HH:mm:ss')}</h3>
					<p className={Styles.Description}>Add Description</p>
				</div>
			) : null}
			<Button start={start} duration={timer} running={isRunning} />
		</div>
	)
}

export default RunningTaskContainer;