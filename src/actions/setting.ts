import { ActionTypeKeys } from './actionTypes';

export const changeDateFormat = (format: string) => {
    return {
        type: ActionTypeKeys.SET_DATE_FORMAT,
        format: format
    };
};

export const changeDurationFormat = (format: number) => {
    return {
        type: ActionTypeKeys.SET_DURATION_FORMAT,
        format: format
    };
};

export const openModal = (format: string) => {
    return {
        type: ActionTypeKeys.OPEN_MODAL,
        format: format
    };
};

export const closeModal = () => {
    return {
        type: ActionTypeKeys.CLOSE_MODAL
    };
};