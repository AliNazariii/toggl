import { AddProjectActionType } from '../actions/projects/add';
import { UpdateProjectActionType } from '../actions/projects/update';
import { RemoveProjectActionType } from '../actions/projects/remove';
import { FetchProjectActionType } from '../actions/projects/fetch';
import { ModalProjectActionType } from '../actions/projects/modal';
export type ProjectActionType = 
    | AddProjectActionType | UpdateProjectActionType 
    | RemoveProjectActionType | FetchProjectActionType | ModalProjectActionType;

export type ProjectType = {
    id: number,
    wid: number,
    name: string,
    billable: boolean,
    is_private: boolean,
    active: boolean,
    template: boolean,
    at: string,
    created_at: string,
    color: string,
    auto_estimates: boolean,
    hex_color: string
}

const projects = (state = { projects: new Array<ProjectType>(), modal: false }, action: ProjectActionType) => {
    let projects = state.projects;
    switch (action.type) {
        case 'SET_PROJECTS':
            return {
                ...state,
                projects: action.projects
            };
        case 'ADD_PROJECT':
            return {
                ...state,
                projects: [
                    ...state.projects,
                    action.project
                ]
            };
        case 'REMOVE_PROJECT':
            // projects = state.projects.filter()
            return {
                ...state,
                projects: [
                    ...state.projects,
                    action.project
                ]
            };
        case 'UPDATE_PROJECT':
            return {
                ...state,
                // projects: tempTasks
                modal: false
            };
        case 'OPEN_MODAL':
            return {
                ...state,
                modal: true
            };
        case 'CLOSE_MODAL':
            return {
                ...state,
                modal: false
            };
        default:
            return state;
    };
};

export default projects;