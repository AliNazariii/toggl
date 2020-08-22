import React from 'react';
import Styles from './RunningTask.module.scss';
import Button from './Button';
import { useDispatch } from 'react-redux';

interface Props {
	running: boolean
}

const RunningTaskContainer = ({ running }: Props) => {
	const dispatch = useDispatch()
	return(
		<div 
			className={Styles.RunningTaskContainer} 
			style={{ backgroundColor: running ? "#303030" : "transparent" }}
		>
			{running ? (
				<div 
					className={Styles.DescriptionContainer}
					onClick={() => dispatch({ type: 'TOGGLE_OPENNING' })}
				>
					<h3 className={Styles.Time}>00:00:03</h3>
					<p className={Styles.Description}>Add Description</p>
				</div>
			) : null}
			<Button running={running} />
		</div>
	)
}

export default RunningTaskContainer;