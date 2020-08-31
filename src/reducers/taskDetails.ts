import { ActionTypeKeys } from '../actions/actionTypes';
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
        case ActionTypeKeys.OPEN_DETAILS:
            return {
                ...state,
                isOpen: true,
                task: action.task
            };
        case ActionTypeKeys.CLOSE_DETAILS:
            return {
                ...state,
                isOpen: false
            };
        default:
            return state;
    };
};

export default taskDetails;