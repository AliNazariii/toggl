import React, { useEffect } from 'react';
import Styles from './Tasks.module.scss';
import DayContainer from './DayContainer/DayContainer';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../reducers/index';
import { fetchTasks } from '../../../actions/tasks/fetch';
import { fetchProjects } from '../../../actions/projects/fetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMehBlank } from '@fortawesome/free-solid-svg-icons';

const TasksContainer = () => {
    const dispatch = useDispatch();
    const tasksState = useSelector((state: AppState) => state.tasks);
    useEffect(() => {
        dispatch(fetchProjects());
        dispatch(fetchTasks());
    }, [])

    return(
        <div className={Styles.TasksContainer}>
            {[...tasksState.tasks.keys()].length === 0 ? 
                <div className={Styles.EmptyContainer}>
                    <FontAwesomeIcon 
                        color="#8a8a8a"
                        size="6x"
                        icon={faMehBlank} 
                    />
                    <h4>There is no task.</h4>
                </div> :
                [...tasksState.tasks.keys()].sort((a, b) => moment(a) > moment(b) ? -1 : 1)
                    .map((day, index) => <DayContainer key={index} day={day} data={tasksState.tasks.get(day)!} /> 
            )}
        </div>
    )
}

export default TasksContainer;