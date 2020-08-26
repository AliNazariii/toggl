import { TaskType } from '../../reducers/tasks';
import { AppDispatch } from '../../index';

export const REMOVE_TASK = 'REMOVE_TASK';

export type RemoveTaskActionType = {
    type: typeof REMOVE_TASK,
    task: TaskType
};

export const remove = (task: TaskType): RemoveTaskActionType => {
    return {
        type: 'REMOVE_TASK',
        task: task
    };
};

export const removeTask = (task: TaskType) => {
    return (dispatch: AppDispatch) => {
        for (let id of task.id!) {
            fetch(`https://www.toggl.com/api/v8/time_entries/${id}`, {
                method: 'DELETE',
                redirect: 'follow',
                headers: new Headers({
                    "Authorization": `Basic ${Buffer.from(`b8a34732a49b28401bee4f8619dce939:api_token`).toString('base64')}`,
                    "Content-Type": "application/json"
                })
            })
            .then(response => console.log(response.text()))
            .catch(e => console.log(e))
        }
        dispatch(remove(task));
    }
};