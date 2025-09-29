//enums
import { MODAL_TYPE } from "@/constants/modalType";

type ModalTypeMap = {
  [MODAL_TYPE.DELETE_CONVERSATION]: { conversationId: string };
  [MODAL_TYPE.DELETE_MESSAGE]: { messageId: string };
  [MODAL_TYPE.EDIT_MESSAGE]: { messageId: string; originalText: string };
  [MODAL_TYPE.CREATE_CONVERSATION]: {
    connectionProfileImageUrl: string;
  };
};

export type ModalType =
  | {
      [K in keyof ModalTypeMap]: { type: K } & ModalTypeMap[K];
    }[keyof ModalTypeMap]
  | null;

export type ModalContextValue = {
  modal: ModalType;
  openModal: (modal: Exclude<ModalType, null>) => void;
  closeModal: () => void;
};

export interface CompactModeContextValue {
  isCompactMode: boolean;
  onToggleCompactMode: () => void;
}
