import { TaskType } from './tasks';

interface Action {
    type: string,
    task: TaskType
}

const taskDetails = (state = { isOpen: false, task: {} }, action: Action) => {
    switch (action.type) {
        case 'OPEN_DETAILS':
            return {
                ...state,
                isOpen: true,
                task: action.task
            };
        case 'CLOSE_DETAILS':
            return {
                ...state,
                isOpen: false
            };
        default:
            return state;
    };
};

export default taskDetails;