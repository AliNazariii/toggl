import React from 'react';
import Styles from './BottomMenu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCog, faChartBar } from '@fortawesome/free-solid-svg-icons';

interface Props {
	title: String,
	isActive: Boolean
}

const menuItem = ({ title, isActive }: Props) => {
	const icon: typeof faClock = 
		title === 'Timer' ? faClock : 
		title === 'Setting' ? faCog : faChartBar;

	const color: string = isActive ? '#3e84dc' : '#8a8a8a';
	
	return(
		<button className={Styles.Btn} style={{color: color}}>
			<FontAwesomeIcon 
				color={color} 
				className={Styles.Icon} 
				icon={icon} 
				size="lg" 
			/>
			{title}
		</button>
	)
}

export default menuItem;