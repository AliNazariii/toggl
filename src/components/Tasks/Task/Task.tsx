import React from 'react';
import Styles from './Task.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

interface Props {
    data: {
        duration: number,
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
                <h5 className={Styles.Duration}>{moment.utc(data.duration * 1000).format('HH:mm:ss')}</h5>
    			<FontAwesomeIcon color="#8a8a8a" icon={faPlay} />
            </div>
        </div>
    )
}

export default Task;