import React from 'react';
import Styles from './Task.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const task = () => { 
    return(
        <div className={Styles.TaskContainer}>
            <div className={Styles.DescriptionBlock}>
                <h5 className={Styles.Title}>Add Title</h5>
            </div>
            <div className={Styles.TimePlayBlock}>
                <h5 className={Styles.Duration}>1:01:23</h5>
    			<FontAwesomeIcon color="#8a8a8a" icon={faPlay} />
            </div>
        </div>
    )
}

export default task;