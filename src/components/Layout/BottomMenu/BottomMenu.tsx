import React from 'react';
import Styles from './BottomMenu.module.scss';
import MenuItem from './MenuItem';

const BottomMenu = () => {
	return(
		<div className={Styles.BottomMenu}>
			<MenuItem title="Reports" />
			<MenuItem title="Timer" />
			<MenuItem title="Setting" />
		</div>
	)
}

export default BottomMenu;