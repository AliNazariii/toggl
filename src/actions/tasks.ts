import { TaskType } from '../reducers/tasks';

export const setTasks = (tasks: Map<string, Array<TaskType>>) => {
    return {
        type: 'SET_TASKS',
        tasks: tasks
    };
};

export const addTask = (task: TaskType) => {
    return {
        type: 'ADD_TASK',
        task: task
    };
};

export const removeTask = (task: TaskType) => {
    return {
        type: 'REMOVE_TASK',
        task: task
    };
};
