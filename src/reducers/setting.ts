interface Action {
    type: string,
}

const setting = (state = { dateFormat: 'ddd, MMM DD' }, action: Action) => {
    switch (action.type) {
        case 'SET_DATE_FORMAT':
            return {
                ...state,
                dateFormat: action.type,
            };
        default:
            return state;
    };
};

export default setting;