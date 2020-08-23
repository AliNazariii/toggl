import { TaskType } from '../reducers/tasks';

export const openDetails = (task: TaskType) => {
    return {
        type: 'OPEN_DETAILS',
        task: task
    };
};

export const closeDetails = () => {
    return {
        type: 'CLOSE_DETAILS'
    };
};