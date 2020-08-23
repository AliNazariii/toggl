interface Action {
    type: string,
}

const setting = (state = { theme: 'dark' }, action: Action) => {
    switch (action.type) {
        case 'SET_THEME':
            return {
                ...state,
                theme: action.type,
            };
        default:
            return state;
    };
};

export default setting;