import { TaskType } from './tasks';

interface Action {
    type: string,
    task: TaskType
}
const initialTask: TaskType = {
    start: '',
    stop: '',
    duration: 0
} 

const taskDetails = (state = { isOpen: false, task: initialTask }, action: Action) => {
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