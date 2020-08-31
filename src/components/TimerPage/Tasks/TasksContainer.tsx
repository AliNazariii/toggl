import React from 'react';
import Styles from './Tasks.module.scss';
import DayContainer from './DayContainer/DayContainer';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { AppState } from '../../../reducers/index';
import { prepareTasks } from '../../../utils/tasks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMehBlank } from '@fortawesome/free-solid-svg-icons';
import { TaskType } from '../../../reducers/tasks';

const TasksContainer = () => {
    const tasksState: { tasks: TaskType[] } = useSelector((state: AppState) => state.tasks);

    return(
        <div className={Styles.TasksContainer}>
            {[...prepareTasks(tasksState.tasks).keys()].length === 0 ? 
                <div className={Styles.EmptyContainer}>
                    <FontAwesomeIcon 
                        color="#8a8a8a"
                        size="6x"
                        icon={faMehBlank} 
                    />
                    <h4>There is no task.</h4>
                </div> :
                [...prepareTasks(tasksState.tasks).keys()].sort((a, b) => moment(a) > moment(b) ? -1 : 1)
                    .map((day, index) => 
                        <DayContainer 
                            key={index} 
                            day={day} 
                            data={prepareTasks(tasksState.tasks).get(day)!} 
                        /> 
            )}
        </div>
    );
};

export default TasksContainer;