import Member from './Member';
import { useGetMembers } from '../../hooks/useGetMembers';
import * as S from './styles';

const ViewerMenu = ({ chatRoomId }: { chatRoomId: number }) => {
  const { data: members } = useGetMembers(chatRoomId);
  return (
    <S.Container>
      {members &&
        members.map((member: string, index: number) => (
          <Member key={index} name={member} profileImage={'profileImage'} />
        ))}
    </S.Container>
  );
};

export default ViewerMenu;
