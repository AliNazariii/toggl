import { AppDispatch } from '../../index';
import { TaskType } from '../../reducers/tasks';

export const UPDATE_TASK_PROJECT = 'UPDATE_TASK_PROJECT';
export const UPDATE_TASK = 'UPDATE_TASK';

export type UpdateTaskActionType = {
    type: typeof UPDATE_TASK_PROJECT | typeof UPDATE_TASK,
    task: TaskType
};

export const update = (task: TaskType, project: boolean = false): UpdateTaskActionType => {
    if (project) {
        return {
            type: 'UPDATE_TASK_PROJECT',
            task: task
        };
    } else {
        return {
            type: 'UPDATE_TASK',
            task: task
        };
    }
};

export const updateTask = (task: TaskType, description: string) => {
    return (dispatch: AppDispatch) => {
        for (let id of task.id!) {
            fetch(`https://www.toggl.com/api/v8/time_entries/${id}`, {
                method: 'PUT',
                redirect: 'follow',
                headers: new Headers({
                    "Authorization": `Basic ${Buffer.from(`b8a34732a49b28401bee4f8619dce939:api_token`).toString('base64')}`,
                    "Content-Type": "application/json"
                }),
                body: JSON.stringify({
                    "time_entry": {
                        "description": description,
                        "created_with": "curl"
                    }
                })  
            })
            .then(response => response.text())
            .catch(e => console.log(e))
        }
        dispatch(update({
            ...task,
            description: description
        }));
    }
};

export const updateTaskProject = (task: TaskType, projectID: number | undefined) => {
    return (dispatch: AppDispatch) => {
        for (let id of task.id!) {
            fetch(`https://www.toggl.com/api/v8/time_entries/${id}`, {
                method: 'PUT',
                redirect: 'follow',
                headers: new Headers({
                    "Authorization": `Basic ${Buffer.from(`b8a34732a49b28401bee4f8619dce939:api_token`).toString('base64')}`,
                    "Content-Type": "application/json"
                }),
                body: JSON.stringify({
                    "time_entry": {
                        "pid": projectID,
                        "created_with": "curl"
                    }
                })  
            })
            .then(response => response.text())
            .catch(e => console.log(e))
        }
        dispatch(update({
            ...task,
            pid: projectID
        }, true));
    }
};