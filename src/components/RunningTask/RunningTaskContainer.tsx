import React from 'react';
import Styles from './RunningTask.module.scss';
import Button from './Button';

interface Props {
	running: boolean
}

const RunningTaskContainer = ({ running }: Props) => {
	return(
		<div className={Styles.RunningTaskContainer} style={{ backgroundColor: running ? "#303030" : "transparent" }}>
			<Button running={running} />
		</div>
	)
}

export default RunningTaskContainer;