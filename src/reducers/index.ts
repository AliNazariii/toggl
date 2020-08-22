import { combineReducers } from 'redux';
import runningTask from './runningTask';
import taskDetails from './taskDetails';
import fetchTasks from './fetchTasks';

const appReducers = combineReducers({
    runningTask,
    taskDetails,
    fetchTasks
})

export default appReducers;