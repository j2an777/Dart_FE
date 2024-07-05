import { Gallery } from '@/types/gallery';
import parseDate from '@/utils/parseDate';

import * as S from './styles';

interface Ticket extends Gallery {
  onGallery: (galleryId: number) => void;
  onDelete: (galleryId: number) => void;
  isOwner: boolean;
}
const Ticket = ({
  thumbnail,
  title,
  startDate,
  endDate,
  fee,
  hashtags,
  galleryId,
  onGallery,
  onDelete,
  isOwner,
}: Ticket) => {
  return (
    <S.TicketContainer>
      <S.TicketIcon value="ticket" $active={false} />
      <S.TicketBox>
        <S.LeftBox>
          <S.Title typography="t4" bold="regular">
            {title}
          </S.Title>
          <S.Date typography="t5" bold="regular">
            {parseDate(startDate)} <span>~</span>{' '}
            {endDate !== null ? parseDate(endDate) : null}
          </S.Date>
          <S.HashTags typography="t5" bold="regular">
            {hashtags.map((tag) => `#${tag}`).join(' ')}
          </S.HashTags>
          <S.Fee typography="t5" bold="semibold">
            ₩ {fee}
          </S.Fee>
          {isOwner && (
            <S.Block>
              <S.Button onClick={() => onGallery(galleryId)}>입장</S.Button>
              {fee == 0 && <S.Button onClick={() => onDelete(galleryId)}>삭제</S.Button>}
            </S.Block>
          )}
        </S.LeftBox>
        <S.RightBox>
          <S.Thumbnail imageUrl={thumbnail} />
        </S.RightBox>
      </S.TicketBox>
    </S.TicketContainer>
  );
};

export default Ticket;
