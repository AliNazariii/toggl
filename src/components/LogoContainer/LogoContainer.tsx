import React from 'react';
import Styles from './LogoContainer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface LogoProps {
    icon: IconDefinition
};

function LogoContainer({ icon }: LogoProps) {
    return (
        <div className={Styles.LogoContainer}>
            <div className={Styles.Logo}>
			    <FontAwesomeIcon color="#ffffff" size="lg" icon={icon} />
            </div>
            <h3>Toggl</h3>
        </div>
    );
};

export default LogoContainer;
