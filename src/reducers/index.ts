import { combineReducers } from 'redux';
import runningTask from './runningTask';
import taskDetails from './taskDetails';
import tasks from './tasks';
import setting from './setting';

export interface AppState {
    runningTask: ReturnType<typeof runningTask>,
    taskDetails: ReturnType<typeof taskDetails>,
    tasks: ReturnType<typeof tasks>,
    setting: ReturnType<typeof setting>
};

const appReducers = combineReducers({
    runningTask,
    taskDetails,
    tasks,
    setting
})
export default appReducers;
