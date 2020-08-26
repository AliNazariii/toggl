interface Action {
    type: string,
    format: string | number
}
const initialState = {
    dateFormat: 'ddd, MMM DD', 
    durationFormat: 0,
    modal: {
        status: false,
        type: 'Duration'
    }
}

const setting = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'SET_DATE_FORMAT':
            return {
                ...state,
                dateFormat: action.format,
                modal: {
                    ...state.modal,
                    status: !state.modal.status
                }
            };
        case 'SET_DURATION_FORMAT':
            return {
                ...state,
                durationFormat: action.format,
                modal: {
                    ...state.modal,
                    status: !state.modal.status
                }
            };
        case 'OPEN_MODAL':
            return {
                ...state,
                modal: {
                    ...state.modal,
                    status: !state.modal.status,
                    type: action.format
                }
            };
        case 'CLOSE_MODAL':
            return {
                ...state,
                modal: {
                    ...state.modal,
                    status: !state.modal.status
                }
            }
        default:
            return state;
    };
};

export default setting;