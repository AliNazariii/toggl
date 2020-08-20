import React from 'react';
import Styles from './RunningTask.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux'

interface Props {
	running: boolean
}
const GreenBtn = ({ running }: Props) => {
	const dispatch = useDispatch()
	return(
		<button 
			className={Styles.GreenBtn}
			style={{ backgroundColor: running ? "#ff3333" : "#33d54e" }}
			onClick={() => dispatch({ type: 'TOGGLE_RUNNING' })}
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