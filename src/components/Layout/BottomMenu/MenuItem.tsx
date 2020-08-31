import React from 'react';
import Styles from './BottomMenu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useLocation } from "react-router-dom";
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
interface MenuItemProps {
	title: string, 
	link: string,
	icon: IconDefinition
};

const MenuItem = ({ title, link, icon }: MenuItemProps) => {
	const location = useLocation();
	return(
		<NavLink 
			to={link} 
			className={Styles.Link} 
		>
			<button 
				className={Styles.Btn} 
				style={{ color: location.pathname === link ? "#3e84dc" : "#8a8a8a" }}
			>
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
	);
};

export default MenuItem;