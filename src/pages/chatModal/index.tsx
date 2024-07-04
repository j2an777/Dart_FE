import { useState } from 'react';
import { chatStore } from '@/stores/modal';
import Text from '@/components/Text';
import ChatMenu from './components/chat/ChatMenu';
import ViewerMenu from './components/viewer/ViewerMenu';
import { memberStore } from '@/stores/member';
import useCustomNavigate from '@/hooks/useCustomNavigate';
import * as S from './styles';

export interface ChatProps {
  open: boolean;
  chatRoomId: number;
  galleryNick: string;
}

const ChatModal = ({ open, chatRoomId, galleryNick }: ChatProps) => {
  const close = chatStore((state) => state.close);
  const navigate = useCustomNavigate();
  const isLogin = !!memberStore((state) => state.accessToken);
  const [menuDown, setMenuDown] = useState(false);
  const [menuOption, setMenuOption] = useState('실시간 채팅');

  const dropDownMenu = () => {
    setMenuDown(!menuDown);
  };

  const handleSelect = (option: string) => {
    setMenuOption(option);
    setMenuDown(false);
  };

  const renderContent = () => {
    switch (menuOption) {
      case '실시간 접속자':
        return <ViewerMenu chatRoomId={chatRoomId} />;
      case '실시간 채팅':
        return <ChatMenu chatRoomId={chatRoomId} galleryNick={galleryNick} />;
      default:
        return <ChatMenu chatRoomId={chatRoomId} galleryNick={galleryNick} />;
    }
  };

  const handleLoginClick = () => {
    close();
    navigate('/login');
  };

  if (!open) return null;

  return (
    <S.Container>
      <S.Outline>
        <S.HeaderBox>
          <div>
            <Text typography="t5">{menuOption}</Text>
            <S.Select value="select" isActive={menuDown} onClick={dropDownMenu} />
          </div>
          <S.Close value="cancel" size={15} onClick={close} />
        </S.HeaderBox>
        {isLogin ? (
          <>
            {menuDown &&
              (menuOption === '실시간 채팅' ? (
                <S.Menu typography="t5" onClick={() => handleSelect('실시간 접속자')}>
                  실시간 접속자
                </S.Menu>
              ) : (
                <S.Menu typography="t5" onClick={() => handleSelect('실시간 채팅')}>
                  실시간 채팅
                </S.Menu>
              ))}
            <S.Content>{renderContent()}</S.Content>
          </>
        ) : (
          // 비로그인 시 비활성화
          <S.BlurBox>
            <Text typography="t5" bold="regular">
              로그인 후 이용해주세요.
            </Text>
            <S.LoginButton onClick={handleLoginClick}> 로그인</S.LoginButton>
          </S.BlurBox>
        )}
      </S.Outline>
    </S.Container>
  );
};

export default ChatModal;
