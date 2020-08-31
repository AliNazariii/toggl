import { TaskActionTypeKeys } from '../actions/tasks/index';
import { AddTaskActionType } from '../actions/tasks/add';
import { UpdateTaskActionType } from '../actions/tasks/update';
import { RemoveTaskActionType } from '../actions/tasks/remove';
import { FetchTaskActionType } from '../actions/tasks/fetch';
export type TaskActionType = 
    | AddTaskActionType | UpdateTaskActionType 
    | RemoveTaskActionType | FetchTaskActionType;

export type TaskType = {
    at?: string,
    billable?: boolean,
    description?: string,
    duration: number,
    duronly?: boolean,
    guid?: string,
    id?: number | number[],
    start: string,
    stop: string,
    uid?: number,
    wid?: number,
    counter?: number,
    pid?: number
}

const tasks = (state = { tasks: new Array<TaskType>() }, action: TaskActionType) => {
    switch (action.type) {
        case TaskActionTypeKeys.SET_TASKS:
            return {
                ...state,
                tasks: action.tasks
            };
        case TaskActionTypeKeys.ADD_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    action.task
                ]
            };
        case TaskActionTypeKeys.REMOVE_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks.filter((task: TaskType) => task.id !== action.taskId)
                ]
            };
        case TaskActionTypeKeys.UPDATE_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks.map((task: TaskType) => task.id === action.task.id ? action.task : task)
                ]
            };
        case TaskActionTypeKeys.UPDATE_TASK_PROJECT:
            return {
                ...state,
                tasks: [
                    ...state.tasks.map((task: TaskType) => task.id === action.task.id ? action.task : task)
                ]
            };
        default:
            return state;
    };
};

export default tasks;