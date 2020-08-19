import React from 'react';
import Styles from './Task.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

interface Props {
    data: {
        duration: Int16Array,
        description: string
    }
}

const Task = ({ data }: Props) => { 
    return(
        <div className={Styles.TaskContainer}>
            <div className={Styles.DescriptionBlock}>
                <h5 className={Styles.Title}>{data.description}</h5>
            </div>
            <div className={Styles.TimePlayBlock}>
                <h5 className={Styles.Duration}>{data.duration}</h5>
    			<FontAwesomeIcon color="#8a8a8a" icon={faPlay} />
            </div>
        </div>
    )
}

export default Task;