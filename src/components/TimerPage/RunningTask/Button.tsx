import React from 'react';
import Styles from './RunningTask.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux'
import { addTask } from '../../../actions/tasks/add';

interface ButtonProps {
	running: boolean,
	start: string,
	duration: number,
	description: string
}
const GreenBtn = ({ running, start, duration, description }: ButtonProps) => {
	const dispatch = useDispatch();
	const handleToggle = () => {
		if (running) {
			dispatch(addTask(start, duration, description));
		}
		dispatch({ type: 'TOGGLE_RUNNING' });
	}

	return(
		<button 
			className={Styles.GreenBtn}
			style={{ backgroundColor: running ? "#ff3333" : "#33d54e" }}
			onClick={handleToggle}
		>
			<FontAwesomeIcon 
				style={{marginLeft: running ? "0px" : "3px"}} 
				color="#ffffff" 
				size="lg" 
				icon={running ? faStop : faPlay} 
			/>
		</button>
	)
}

export default GreenBtn;