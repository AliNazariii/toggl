import React from 'react';
import Styles from './BottomMenu.module.scss';
import MenuItem from './MenuItem';

const BottomMenu = () => {
	return(
		<div className={Styles.BottomMenu}>
			<MenuItem title="Reports" isActive={false} />
			<MenuItem title="Timer" isActive={true} />
			<MenuItem title="Setting" isActive={false} />
		</div>
	)
}

export default BottomMenu;