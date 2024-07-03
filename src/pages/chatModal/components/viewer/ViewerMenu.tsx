import Member from './Member';
import { useGetMembers } from '../../hooks/useGetMembers';
import { ChatMembers } from '@/types/chat';
import * as S from './styles';

const ViewerMenu = ({ chatRoomId }: { chatRoomId: number }) => {
  const { data, refetch, isError } = useGetMembers(chatRoomId);

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
