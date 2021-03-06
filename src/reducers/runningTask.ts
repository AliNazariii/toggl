import { ActionTypeKeys } from '../actions/actionTypes';

interface Action {
    type: string,
    description: string
}

const runningTask = (state = { isRunning: false, description: '' }, action: Action) => {
    switch (action.type) {
        case ActionTypeKeys.TOGGLE_RUNNING:
            return {
                ...state,
                isRunning: !state.isRunning,
                description: action.description
            };
        default:
            return state;
    };
};

export default runningTask;