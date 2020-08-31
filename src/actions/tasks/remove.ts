import { TaskType } from '../../reducers/tasks';
import { AppDispatch } from '../../index';
import { TaskActionTypeKeys } from './index'; 

export type RemoveTaskActionType = {
    type: typeof TaskActionTypeKeys.REMOVE_TASK,
    taskId: number
};

export const remove = (taskId: number): RemoveTaskActionType => {
    return {
        type: TaskActionTypeKeys.REMOVE_TASK,
        taskId: taskId
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
            .then(() => dispatch(remove(id)))
            .catch(e => console.log(e))
        }
    }
};