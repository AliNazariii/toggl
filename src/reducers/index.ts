import { combineReducers } from 'redux';
import runningTask from './runningTask';
import taskDetails from './taskDetails';
import tasks from './tasks';
import setting from './setting';
import projects from './projects';

export interface AppState {
    runningTask: ReturnType<typeof runningTask>,
    taskDetails: ReturnType<typeof taskDetails>,
    tasks: ReturnType<typeof tasks>,
    setting: ReturnType<typeof setting>,
    projects: ReturnType<typeof projects>
};

const appReducers = combineReducers({
    runningTask,
    taskDetails,
    tasks,
    setting,
    projects
})
export default appReducers;
