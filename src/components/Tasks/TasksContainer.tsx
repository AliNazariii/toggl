import React from 'react';
import Styles from './Tasks.module.scss';
import DayContainer from './DayContainer/DayContainer';

const tasksContainer = () => {
    return(
        <div className={Styles.TasksContainer}>
            <DayContainer date={new Date()} />
            <DayContainer date={new Date()} />
        </div>
    )
}

export default tasksContainer;