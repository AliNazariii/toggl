import React from 'react';
import Styles from './RunningTask.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const GreenBtn = () => {
	return(
		<button className={Styles.GreenBtn}>
			<FontAwesomeIcon style={{marginLeft: "3px"}} color="#ffffff" size="lg" icon={faPlay} />
		</button>
	)
}

export default GreenBtn;