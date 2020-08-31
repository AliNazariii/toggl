import { ProjectActionTypeKeys } from './index'; 

export type ModalProjectActionType = {
    type: typeof ProjectActionTypeKeys.CLOSE_MODAL | typeof ProjectActionTypeKeys.OPEN_MODAL
};

export const openModal = (): ModalProjectActionType => {
    return {
        type: ProjectActionTypeKeys.OPEN_MODAL
    };
};

export const closeModal = (): ModalProjectActionType => {
    return {
        type: ProjectActionTypeKeys.CLOSE_MODAL
    };
};