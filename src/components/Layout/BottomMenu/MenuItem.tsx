import React from 'react';
import Styles from './BottomMenu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCog, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

interface Props {
	title: String,
	isActive: Boolean
}

const MenuItem = ({ title, isActive }: Props) => {
	const icon: typeof faClock = 
		title === 'Timer' ? faClock : 
		title === 'Setting' ? faCog : faChartBar;

	const color: string = isActive ? "#3e84dc" : "inherits";
	const link: string = 
		title === 'Timer' ? '/' : 
		title === 'Setting' ? '/setting' : '/report';
	
	return(
		<Link to={link} className={Styles.Link}>
			<button className={Styles.Btn} style={{color: color}}>
				<FontAwesomeIcon 
					className={Styles.Icon} 
					icon={icon} 
					size="lg" 
					/>
				<p> 
					{title}
				</p>
			</button>
		</Link>
	)
}

export default MenuItem;