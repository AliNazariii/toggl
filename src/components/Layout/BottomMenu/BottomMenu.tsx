import React from 'react';
import Styles from './BottomMenu.module.scss';
import MenuItem from './MenuItem';
import { faClock, faCog, faChartBar } from '@fortawesome/free-solid-svg-icons';

const BottomMenu = () => {
	return(
		<div className={Styles.BottomMenu}>
			<MenuItem icon={faChartBar} link="report" title="Reports" />
			<MenuItem icon={faClock} link="/" title="Timer" />
			<MenuItem icon={faCog} link="setting" title="Setting" />
		</div>
	);
};

export default BottomMenu;