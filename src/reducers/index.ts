import { combineReducers } from 'redux';
import runningTask from './runningTask';
import taskDetails from './taskDetails';

const appReducers = combineReducers({
    runningTask,
    taskDetails
})

export default appReducers;