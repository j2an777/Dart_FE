import { OrderInfo } from '@/types/payment';
import * as S from './styles';
import { UserCircle } from '@/components';
import { Text } from '@/components';

const Ticket = ({
  title,
  thumbnail,
  nickname,
  profileImage,
}: Omit<OrderInfo, 'cost'>) => {
  return (
    <S.TicketContainer>
      <S.TicketIcon value="ticket" $active={false} />
      <S.GalleryName typography="t5" bold="regular" ellipsis={200}>
        {title}
      </S.GalleryName>
      <section>
        <UserCircle size={30} profileImage={profileImage} />
        <Text typography="t5" bold="regular" ellipsis={200}>
          {nickname}
        </Text>
      </section>

      <S.Thumbnail profileImage={thumbnail} />
    </S.TicketContainer>
  );
};

export default Ticket;
