export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'

export type ModalProjectActionType = {
    type: typeof CLOSE_MODAL | typeof OPEN_MODAL
};

export const openModal = (): ModalProjectActionType => {
    return {
        type: 'OPEN_MODAL'
    };
};

export const closeModal = (): ModalProjectActionType => {
    return {
        type: 'CLOSE_MODAL'
    };
};