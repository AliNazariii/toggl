import { ProjectType } from '../../reducers/projects';
import { AppDispatch } from '../../index';
import { ProjectActionTypeKeys } from './index'; 

export type FetchProjectActionType = {
    type: typeof ProjectActionTypeKeys.SET_PROJECTS,
    projects: ProjectType[]
};

const setProjects = (projects: ProjectType[]): FetchProjectActionType => {
    return {
        type: ProjectActionTypeKeys.SET_PROJECTS,
        projects: projects
    };
};

export const fetchProjects = () => {
    return (dispatch: AppDispatch) => {
        fetch('https://www.toggl.com/api/v8/workspaces/4563431/projects', {
            method: 'GET',
            redirect: 'follow',
            headers: new Headers({
                "Authorization": `Basic ${Buffer.from(`b8a34732a49b28401bee4f8619dce939:api_token`).toString('base64')}`,
                "Content-Type": "application/json"
        })})
        .then(response => response.text())
        .then(result => {
            const projects: ProjectType[] = JSON.parse(result)
            dispatch(setProjects(projects));
        })
        .catch(e => console.log(e))
    };
};