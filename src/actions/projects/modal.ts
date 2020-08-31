import { ActionTypeKeys } from '../actionTypes'; 

export type ModalProjectActionType = {
    type: typeof ActionTypeKeys.CLOSE_MODAL | typeof ActionTypeKeys.OPEN_MODAL
};

export const openModal = (): ModalProjectActionType => {
    return {
        type: ActionTypeKeys.OPEN_MODAL
    };
};

export const closeModal = (): ModalProjectActionType => {
    return {
        type: ActionTypeKeys.CLOSE_MODAL
    };
};