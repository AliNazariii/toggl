import { TaskType } from '../reducers/tasks';

export const changeDateFormat = (format: string) => {
    return {
        type: 'SET_DATE_FORMAT',
        format: format
    };
};

export const changeDurationFormat = (format: number) => {
    return {
        type: 'SET_DURATION_FORMAT',
        format: format
    };
};

export const openModal = (format: string) => {
    return {
        type: 'OPEN_MODAL',
        format: format
    };
};

export const closeModal = () => {
    return {
        type: 'CLOSE_MODAL'
    };
};