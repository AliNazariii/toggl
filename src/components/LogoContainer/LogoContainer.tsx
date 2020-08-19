import React from 'react';
import Styles from './LogoContainer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

function LogoContainer() {
    return (
        <div className={Styles.LogoContainer}>
            <div className={Styles.Logo}>
			    <FontAwesomeIcon color="#ffffff" size="lg" icon={faPowerOff} />
            </div>
            <h3>Bale Toggl App</h3>
        </div>
    )
}

export default LogoContainer;
