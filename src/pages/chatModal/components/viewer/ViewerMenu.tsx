import Member from './Member';
import { useGetMembers } from '../../hooks/useGetMembers';
import * as S from './styles';
import useStomp from '../../hooks/useStomp';
import { useEffect } from 'react';
import { memberStore } from '@/stores/member';
import { ChatMembers } from '@/types/chat';
import { ChatProps } from '../..';

const ViewerMenu = ({ chatRoomId, galleryNick }: Omit<ChatProps, 'open'>) => {
  // 웹소켓 연결
  const { accessToken } = memberStore.getState();
  const { connect, disconnect } = useStomp(
    chatRoomId,
    galleryNick,
    accessToken as string,
  );
  const { data, refetch, isError } = useGetMembers(chatRoomId);

  useEffect(() => {
    connect();

    return () => disconnect();
  }, []);

  if (isError || !data) {
    return;
  }

  refetch();
  return (
    <S.Container>
      {data.map((viewer: ChatMembers, index: number) => (
        <Member
          key={index}
          name={viewer.nickname}
          profileImageUrl={viewer.profileImageUrl}
        />
      ))}
    </S.Container>
  );
};

export default ViewerMenu;
