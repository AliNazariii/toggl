import React from 'react';
import TasksContainer from './Tasks/TasksContainer';
import TaskDetails from './TaskDetails/TaskDetails';

function TimerPage() {
	return (
        <>
            <TaskDetails />
            <TasksContainer />
        </>
	);
}

export default TimerPage;
