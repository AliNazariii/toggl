import React from 'react';
import Styles from './Task.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { TaskType } from '../../../reducers/tasks';
import { openDetails } from '../../../actions/taskDetails';

interface Props {
    data: TaskType
}

const Task = ({ data }: Props) => { 
    const dispatch = useDispatch()
    const startTask = () => {
        dispatch({ type: 'TOGGLE_RUNNING', description: data.description });
    }

    return(
        <div className={Styles.TaskContainer}>
            <div className={Styles.DescriptionBlock} onClick={() => dispatch(openDetails(data))}>
                {data.counter === 1 ? null : (
                    <div className={Styles.Counter}>
                        {data.counter}
                    </div>
                )}
                <h5 className={Styles.Title}>{data.description || "Add Description"}</h5>
            </div>
            <div 
                className={Styles.TimePlayBlock}
                onClick={startTask}
            >
                <h5 className={Styles.Duration}>{moment.utc(data.duration * 1000).format('HH:mm:ss')}</h5>
                <FontAwesomeIcon 
                    color="#8a8a8a" 
                    icon={faPlay} 
                    className={Styles.Icon}
                />
            </div>
        </div>
    )
}

export default Task;