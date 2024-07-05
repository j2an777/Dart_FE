import { OrderInfo } from '@/types/payment';
import * as S from './styles';
import { UserCircle } from '@/components';
import { Icon } from '@/components';

const Ticket = ({
  title,
  thumbnail,
  nickname,
  profileImage,
}: Omit<OrderInfo, 'cost'>) => {
  return (
    <S.TicketContainer>
      <Icon value="ticket" $active={false} />
      <S.TicketBox>
        <S.LeftBox>
          <S.GalleryName typography="t5" bold="regular" ellipsis={200}>
            {title}
          </S.GalleryName>
          <section>
            <UserCircle size={30} profileImage={profileImage} />
            <S.Nickname typography="t5" bold="regular" ellipsis={200}>
              {nickname}
            </S.Nickname>
          </section>
        </S.LeftBox>

        <S.RightBox>
          <S.Thumbnail profileImage={thumbnail} />
        </S.RightBox>
      </S.TicketBox>
    </S.TicketContainer>
  );
};

export default Ticket;
