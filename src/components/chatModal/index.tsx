import { useState } from 'react';
import { chatStore } from '@/stores/modal';
import { Icon } from '..';
import Text from '@/components/Text';
import Chat from './chat';
import Viewer from './viewer';
import * as S from './styles';

interface Props {
  open: boolean;
}

const ChatModal = ({ open }: Props) => {
  const close = chatStore((state) => state.close);
  const [menuDown, setMenuDown] = useState(false);
  const [menuOption, setMenuOption] = useState('실시간 채팅');
  const dropdownMenu = () => {
    setMenuDown(!menuDown);
  };

  const handleSelect = (option: string) => {
    setMenuOption(option);
    setMenuDown(false);
  };

  const renderContent = () => {
    switch (menuOption) {
      case '실시간 접속자':
        return <Viewer />;
      case '실시간 채팅':
        return <Chat />;
      default:
        return <Chat />;
    }
  };

  if (!open) return null;

  return (
    <S.Container>
      <S.Outline>
        <S.HeaderBox>
          <div>
            <Text typography="t5" bold="regular">
              {menuOption}
            </Text>
            <S.Select value="select" isActive={menuDown} onClick={dropdownMenu} />
          </div>
          <Icon value="cancel" size={15} onClick={close} />
        </S.HeaderBox>
        {menuDown &&
          (menuOption === '실시간 채팅' ? (
            <S.Menu onClick={() => handleSelect('실시간 접속자')}>실시간 접속자</S.Menu>
          ) : (
            <S.Menu onClick={() => handleSelect('실시간 채팅')}>실시간 채팅</S.Menu>
          ))}
        <S.Content>{renderContent()}</S.Content>
      </S.Outline>
    </S.Container>
  );
};

export default ChatModal;
