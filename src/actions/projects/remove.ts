import { ProjectType } from '../../reducers/projects';
import { AppDispatch } from '../../index';
import { ProjectActionTypeKeys } from './index'; 

export type RemoveProjectActionType = {
    type: typeof ProjectActionTypeKeys.REMOVE_PROJECT,
    project: ProjectType
};

const remove = (project: ProjectType): RemoveProjectActionType => {
    return {
        type: ProjectActionTypeKeys.REMOVE_PROJECT,
        project: project
    };
};

export const removeProject = (project: ProjectType) => {
    return (dispatch: AppDispatch) => {
        fetch(`https://www.toggl.com/api/v8/projects/${project.id}`, {
            method: 'DELETE',
            redirect: 'follow',
            headers: new Headers({
                "Authorization": `Basic ${Buffer.from(`b8a34732a49b28401bee4f8619dce939:api_token`).toString('base64')}`,
                "Content-Type": "application/json"
            })
        })
        .then(response => console.log(response.text()))
        .catch(e => console.log(e))
        dispatch(remove(project));
    };
};