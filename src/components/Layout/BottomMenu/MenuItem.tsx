import React, { useState } from 'react';
import Styles from './BottomMenu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCog, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useLocation } from "react-router-dom";
interface Props {
	title: String
}

const MenuItem = ({ title }: Props) => {
	const location = useLocation();
	const icon: typeof faClock = 
		title === 'Timer' ? faClock : 
		title === 'Setting' ? faCog : faChartBar;
	const link: string = 
		title === 'Timer' ? '/' : 
		title === 'Setting' ? '/setting' : '/report';
	const [isActive, setActive] = useState(false);
	return(
		<NavLink 
			to={link} 
			className={Styles.Link} 
		>
			<button className={Styles.Btn} style={{ color: location.pathname === link ? "#3e84dc": "#8a8a8a"}}>
				<FontAwesomeIcon 
					className={Styles.Icon} 
					icon={icon} 
					size="lg" 
					/>
				<p> 
					{title}
				</p>
			</button>
		</NavLink>
	)
}

export default MenuItem;