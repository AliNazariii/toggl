interface Action {
    type: string
}

const taskDetails = (state = { isOpen: false }, action: Action) => {
    switch (action.type) {
        case 'TOGGLE_OPENNING':
            return {
                isOpen: !state.isOpen
            };
        default:
            return state;
    };
};

export default taskDetails;