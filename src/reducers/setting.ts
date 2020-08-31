import { ActionTypeKeys } from '../actions/actionTypes';

interface Action {
    type: string,
    format: string | number
}
const initialState = {
    dateFormat: 'ddd, MMM DD', 
    durationFormat: 1,
    modal: {
        status: false,
        type: 'Duration'
    }
}

const setting = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypeKeys.SET_DATE_FORMAT:
            return {
                ...state,
                dateFormat: action.format,
                modal: {
                    ...state.modal,
                    status: false
                }
            };
        case ActionTypeKeys.SET_DURATION_FORMAT:
            return {
                ...state,
                durationFormat: action.format,
                modal: {
                    ...state.modal,
                    status: false
                }
            };
        case ActionTypeKeys.OPEN_MODAL:
            return {
                ...state,
                modal: {
                    ...state.modal,
                    status: true,
                    type: action.format
                }
            };
        case ActionTypeKeys.CLOSE_MODAL:
            return {
                ...state,
                modal: {
                    ...state.modal,
                    status: false
                }
            }
        default:
            return state;
    };
};

export default setting;