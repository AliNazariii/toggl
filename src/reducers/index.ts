import { combineReducers } from 'redux';
import runningTask from './runningTask';
import taskDetails from './taskDetails';
import tasks from './tasks';

const appReducers = combineReducers({
    runningTask,
    taskDetails,
    tasks
})

export default appReducers;