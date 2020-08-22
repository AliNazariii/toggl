import React from 'react';
import Styles from './RunningTask.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux'

interface Props {
	running: boolean,
	start: string,
	duration: number
}
const GreenBtn = ({ running, start, duration }: Props) => {
	const dispatch = useDispatch();
	const handleToggle = () => {
		if (running) {
			fetch('https://www.toggl.com/api/v8/time_entries', {
				method: 'POST',
				redirect: 'follow',
				headers: new Headers({
					"Authorization": `Basic ${Buffer.from(`b8a34732a49b28401bee4f8619dce939:api_token`).toString('base64')}`,
					"Content-Type": "application/json"
				}),
				body: JSON.stringify({
					"time_entry": {
						"description": '',
						"created_with": "curl",
						"duration": duration,
						"start": start,
					}
				})
			})
			.then(response => response.text())
			.then(result => {
				// let allTasks: Array<Task> = JSON.parse(result);
				console.log(result)
				// dispatch({ type: 'TOGGLE_RUNNING' })
			})
			.catch(e => console.log(e))
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