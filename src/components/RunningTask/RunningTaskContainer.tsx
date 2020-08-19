import React from 'react';
import Styles from './RunningTask.module.scss';
import GreenBtn from './GreenBtn';

interface Props {
	running: Boolean
}

const runningTaskContainer = ({ running }: Props) => {
	return(
		<div className={Styles.RunningTaskContainer} style={{ backgroundColor: running ? "#303030" : "#1e1e1e" }}>
			<GreenBtn />
		</div>
	)
}

export default runningTaskContainer;