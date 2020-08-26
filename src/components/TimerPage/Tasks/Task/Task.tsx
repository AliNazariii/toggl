import React from 'react';
import Styles from './Task.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { TaskType } from '../../../../reducers/tasks';
import { openDetails } from '../../../../actions/taskDetails';
import { AppState } from '../../../../reducers/index';

interface Props {
    data: TaskType
}

const Task = ({ data }: Props) => { 
    const dispatch = useDispatch();
    const state = useSelector((state: AppState) => state);
    const startTask = () => {
        dispatch({ type: 'TOGGLE_RUNNING', description: data.description });
    }

    return(
        <div className={Styles.TaskContainer}>
            <div className={Styles.DescriptionBlock} onClick={() => dispatch(openDetails(data))}>
                {data.counter === 1 ? null : (
                    <div className={Styles.Counter}>
                        <p>{data.counter}</p>
                    </div>
                )}
                {data.pid === undefined ? (
                    <p className={Styles.Title}>{data.description || "Add Description"}</p>
                ): (
                    <div>
                        <p className={Styles.Title}>{data.description || "Add Description"}</p>
                        <p style={{ color: "#ff3333" }} className={Styles.Title}>{state.projects.projects.find((item) => item.id === data.pid)?.name}</p>
                    </div> 
                )}
            </div>
            <div 
                className={Styles.TimePlayBlock}
                onClick={startTask}
            >
                <h5 className={Styles.Duration}>
                    {data.duration < 60 ? (
                        `${moment.utc(data.duration * 1000).format(state.setting.durationFormat === 0 ? 'ss' : 'HH:mm:ss')} ${state.setting.durationFormat === 0 ? "sec" : ""}`

                    ) : (
                        `${moment.utc(data.duration * 1000).format(state.setting.durationFormat === 0 ? 'mm:ss' : 'HH:mm:ss')} ${state.setting.durationFormat === 0 ? "min" : ""}`
                    )}
                </h5>
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