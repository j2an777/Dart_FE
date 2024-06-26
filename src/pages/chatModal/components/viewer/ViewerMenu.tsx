import Member from './Member';
import { useGetMembers } from '../../hooks/useGetMembers';
import * as S from './styles';
import useStomp from '../../hooks/useStomp';
import { useEffect } from 'react';
import { memberStore } from '@/stores/member';

const ViewerMenu = ({ chatRoomId }: { chatRoomId: number }) => {
  // 웹소켓 연결
  const { accessToken } = memberStore.getState();
  const { connect, disconnect } = useStomp(chatRoomId, accessToken as string);
  const { data, refetch } = useGetMembers(chatRoomId);

  useEffect(() => {
    connect();
    refetch();
    return () => disconnect();
  }, []);

  const members = data || []; // 데이터가 없을 경우 빈 배열 사용

  return (
    <S.Container>
      {members.map((member: string, index: number) => (
        <Member key={index} name={member} profileImage={'profileImage'} />
      ))}
    </S.Container>
  );
};

export default ViewerMenu;
