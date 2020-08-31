import { ActionTypeKeys } from './actionTypes';

export type SettingActionType = {
    type: typeof ActionTypeKeys.SET_DATE_FORMAT | typeof ActionTypeKeys.SET_DURATION_FORMAT 
        | typeof ActionTypeKeys.OPEN_MODAL | typeof ActionTypeKeys.CLOSE_MODAL,
    format?: string | number
};

export const changeDateFormat = (format: string): SettingActionType => {
    return {
        type: ActionTypeKeys.SET_DATE_FORMAT,
        format: format
    };
};

export const changeDurationFormat = (format: number): SettingActionType => {
    return {
        type: ActionTypeKeys.SET_DURATION_FORMAT,
        format: format
    };
};

export const openModal = (format: string): SettingActionType => {
    return {
        type: ActionTypeKeys.OPEN_MODAL,
        format: format
    };
};

export const closeModal = (): SettingActionType => {
    return {
        type: ActionTypeKeys.CLOSE_MODAL
    };
};