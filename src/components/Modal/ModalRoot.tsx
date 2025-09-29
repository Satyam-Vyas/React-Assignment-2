//enums
import { MODAL_TYPE } from "@/constants/modalType";
import { MODAL_VARIANT } from "@/components/Modal/constants";

//components
import { ConfirmationModal } from "@/components/Modal/ConfirmationModal";
import { TextPromptModal } from "@/components/Modal/TextPromptModal";

//types
import type { ReactNode } from "react";
import type { Conversation as ConversationType } from "@/types/conversationTypes";
import type { UseRootModalManagerReturn } from "@/components/Modal/types";

//classUtils
import { Conversation } from "@/classUtils/Conversation";

//hooks
import { useRootModalManager } from "@/components/Modal/hooks/useRootModalManager";

type ModalRootProps = {
  handleDeleteConversation: (conversationId: string) => void;
  handleDeleteMessage: (messageId: string) => void;
  handleEditMessage: (messageId: string, newText: string) => void;
  handleCreateConversation: (conversation: ConversationType) => void;
};

export function ModalRoot({
  handleDeleteConversation,
  handleDeleteMessage,
  handleEditMessage,
  handleCreateConversation,
}: ModalRootProps): ReactNode {
  const { modal, modalRef, handleModalClose }: UseRootModalManagerReturn =
    useRootModalManager();

  if (!modal) {
    return null;
  }

  switch (modal.type) {
    case MODAL_TYPE.DELETE_CONVERSATION:
      return (
        <ConfirmationModal
          variant={MODAL_VARIANT.DANGER}
          onConfirm={(): void => {
            handleDeleteConversation(modal.conversationId);
            handleModalClose();
          }}
          onClose={handleModalClose}
          closeOnBackdrop={true}
          confirmButtonText="Delete"
          title="Delete Conversation"
          ref={modalRef}
        />
      );
    case MODAL_TYPE.CREATE_CONVERSATION:
      return (
        <TextPromptModal
          variant={MODAL_VARIANT.SUCCESS}
          onSubmit={(connectionName: string): void => {
            handleCreateConversation(
              new Conversation(connectionName, modal.connectionProfileImageUrl)
            );
            handleModalClose();
          }}
          onClose={handleModalClose}
          closeOnBackdrop={true}
          title="Create Conversation"
          ref={modalRef}
          isMultiline={false}
          submitButtonText="Create"
        />
      );
    case MODAL_TYPE.DELETE_MESSAGE:
      return (
        <ConfirmationModal
          variant={MODAL_VARIANT.DANGER}
          onConfirm={(): void => {
            handleDeleteMessage(modal.messageId);
            handleModalClose();
          }}
          closeOnBackdrop={true}
          confirmButtonText="Delete"
          title="Delete Message"
          ref={modalRef}
          onClose={handleModalClose}
        />
      );
    case MODAL_TYPE.EDIT_MESSAGE:
      return (
        <TextPromptModal
          variant={MODAL_VARIANT.SUCCESS}
          onSubmit={(newText: string): void => {
            handleEditMessage(modal.messageId, newText);
            handleModalClose();
          }}
          onClose={handleModalClose}
          closeOnBackdrop={true}
          title="Edit Message"
          ref={modalRef}
          isMultiline={true}
          submitButtonText="Save"
          initialValue={modal.originalText}
        />
      );
    default:
      return null;
  }
}
