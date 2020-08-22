import { combineReducers } from 'redux';
import runningTask from './runningTask';
import taskDetails from './taskDetails';
import fetchTasks from './fetchTasks';
import tasks from './tasks';

const appReducers = combineReducers({
    runningTask,
    taskDetails,
    fetchTasks,
    tasks
})

export default appReducers;