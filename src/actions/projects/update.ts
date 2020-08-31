import { ProjectType } from '../../reducers/projects';
import { AppDispatch } from '../../index';
import { ActionTypeKeys } from '../actionTypes'; 


export type UpdateProjectActionType = {
    type: typeof ActionTypeKeys.UPDATE_PROJECT,
    project: ProjectType
};

const update = (project: ProjectType): UpdateProjectActionType => {
    return {
        type: ActionTypeKeys.UPDATE_PROJECT,
        project: project
    };
};

export const updateProject = (project: ProjectType, name: string) => {
    return (dispatch: AppDispatch) => {
        fetch(`https://www.toggl.com/api/v8/projects/${project.id}`, {
            method: 'PUT',
            redirect: 'follow',
            headers: new Headers({
                "Authorization": `Basic ${Buffer.from(`b8a34732a49b28401bee4f8619dce939:api_token`).toString('base64')}`,
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({
                "project": {
                    "name": name
                }
            })  
        })
        .then(response => response.text())
        .catch(e => console.log(e))
        dispatch(update({
            ...project,
            name: name
        }));
    };
};
