import { Gallery } from '@/types/gallery';
import parseDate from '@/utils/parseDate';
import * as S from './styles';

const Ticket = ({
  thumbnail,
  title,
  startDate,
  endDate,
  fee,
  hashtags,
}: Omit<Gallery, 'galleryId'>) => {
  return (
    <S.TicketContainer>
      <S.TicketIcon value="ticket" $active={false} />
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
      <S.Fee typography="t5" bold="regular">
        ₩ {fee}
      </S.Fee>
      <S.Thumbnail imageUrl={thumbnail} />
    </S.TicketContainer>
  );
};

export default Ticket;
