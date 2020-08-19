import React from 'react';
import Styles from './BottomMenu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCog, faChartBar } from '@fortawesome/free-solid-svg-icons';

interface Props {
	title: String,
	isActive: Boolean
}

const MenuItem = ({ title, isActive }: Props) => {
	const icon: typeof faClock = 
		title === 'Timer' ? faClock : 
		title === 'Setting' ? faCog : faChartBar;

	// const color: number = isActive ? 1 : 0;
	
	return(
		<button className={Styles.Btn}>
			<FontAwesomeIcon 
				className={Styles.Icon} 
				icon={icon} 
				size="lg" 
			/>
			{title}
		</button>
	)
}

export default MenuItem;