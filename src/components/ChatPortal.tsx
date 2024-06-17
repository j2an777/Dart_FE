import { chatStore } from '@/stores/modal';
import { createPortal } from 'react-dom';
import ChatModal from '@/pages/chatModal';

const ChatPortal = () => {
  const chatValue = chatStore((state) => state.chatValue);
  const $portal_root = document.getElementById('chat-portal');

  return (
    <>
      {$portal_root
        ? createPortal(
            <div>{chatValue.open && <ChatModal {...chatValue} />}</div>,
            $portal_root,
          )
        : null}
    </>
  );
};

export default ChatPortal;
