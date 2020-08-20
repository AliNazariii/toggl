interface Action {
    type: string
}

const runningTask = (state = { isRunning: false }, action: Action) => {
    switch (action.type) {
        case 'TOGGLE_RUNNING':
            return {
                isRunning: !state.isRunning
            };
        default:
            return state;
    };
};

export default runningTask;