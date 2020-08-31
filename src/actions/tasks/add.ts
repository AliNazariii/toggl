import { TaskType } from '../../reducers/tasks';
import { AppDispatch } from '../../index';
import { ActionTypeKeys } from '../actionTypes'; 

export type AddTaskActionType = {
    type: typeof ActionTypeKeys.ADD_TASK,
    task: TaskType
};

export const add = (task: TaskType): AddTaskActionType => {
    return {
        type: ActionTypeKeys.ADD_TASK,
        task: task
    };
};

export const addTask = (start: string, duration: number, description: string) => {
    return (dispatch: AppDispatch) => {
        fetch('https://www.toggl.com/api/v8/time_entries', {
            method: 'POST',
            redirect: 'follow',
            headers: new Headers({
                "Authorization": `Basic ${Buffer.from(`b8a34732a49b28401bee4f8619dce939:api_token`).toString('base64')}`,
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({
                "time_entry": {
                    "description": description,
                    "created_with": "curl",
                    "duration": duration,
                    "start": start,
                }
            })
        })
        .then(response => response.text())
        .then(result => {
            let data: { data: TaskType } = JSON.parse(result);
            dispatch(add(data.data));
        })
        .catch(e => console.log(e))
    };
};