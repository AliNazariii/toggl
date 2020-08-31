import { AppDispatch } from '../../index';
import { TaskType } from '../../reducers/tasks';
import { ActionTypeKeys } from '../actionTypes'; 

export type FetchTaskActionType = {
    type: typeof ActionTypeKeys.SET_TASKS,
    tasks: Array<TaskType>
};

export const setTasks = (tasks: Array<TaskType>): FetchTaskActionType => {
    return {
        type: ActionTypeKeys.SET_TASKS,
        tasks: tasks
    };
};

export const fetchTasks = () => {
    return (dispatch: AppDispatch) => {
        fetch('https://www.toggl.com/api/v8/time_entries', {
            method: 'GET',
            redirect: 'follow',
            headers: new Headers({
                "Authorization": `Basic ${Buffer.from(`b8a34732a49b28401bee4f8619dce939:api_token`).toString('base64')}`,
                "Content-Type": "application/json"
        })})
        .then(response => response.text())
        .then(result => dispatch(setTasks(JSON.parse(result))))
        .catch(e => console.log(e))
    };
};