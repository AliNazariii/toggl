import { ProjectType } from '../../reducers/projects';
import { AppDispatch } from '../../index';

export const ADD_PROJECT = 'ADD_PROJECT';

export type AddProjectActionType = {
    type: typeof ADD_PROJECT,
    project: ProjectType
};

export const add = (project: ProjectType): AddProjectActionType => {
    return {
        type: ADD_PROJECT,
        project: project
    };
};

export const addProject = (name: string) => {
    return (dispatch: AppDispatch) => {
        fetch('https://www.toggl.com/api/v8/projects', {
            method: 'POST',
            redirect: 'follow',
            headers: new Headers({
                "Authorization": `Basic ${Buffer.from(`b8a34732a49b28401bee4f8619dce939:api_token`).toString('base64')}`,
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({
                "project": {
                    "name": name,
                    "wid": 4563431
                }
            })
        })
        .then(response => response.text())
        .then(result => {
            let data: { data: ProjectType } = JSON.parse(result)
            dispatch(add(data.data));
        })
        .catch(e => console.log(e))
    }
}