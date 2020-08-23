import { combineReducers } from 'redux';
import runningTask from './runningTask';
import taskDetails from './taskDetails';
import tasks from './tasks';
import setting from './setting';

const appReducers = combineReducers({
    runningTask,
    taskDetails,
    tasks,
    setting
})

export default appReducers;