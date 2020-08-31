import { TaskType } from '../reducers/tasks';
import { ActionTypeKeys } from './actionTypes';

export const openDetails = (task: TaskType) => {
    return {
        type: ActionTypeKeys.OPEN_DETAILS,
        task: task
    };
};

export const closeDetails = () => {
    return {
        type: ActionTypeKeys.CLOSE_DETAILS
    };
};