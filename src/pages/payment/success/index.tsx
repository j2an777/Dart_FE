import { useParams } from 'react-router-dom';
import Card from '../components/motion';
import * as S from './styles';

const SuccessPage = () => {
  const { galleryId, order } = useParams();
  const isTicket = order === 'ticket';
  const title = isTicket
    ? '결제가 완료되었습니다.'
    : '전시 생성 및 결제가 완료되었습니다.';
  const content = isTicket ? '전시관 입장하기' : '메인으로';
  const path = isTicket ? `/gallery/${galleryId}` : '/';

  return (
    <S.Container>
      <S.PayText typography="t2" bold="bold">
        {title}
      </S.PayText>
      <Card content={content} path={path} key={'ticket'} />
    </S.Container>
  );
};

export default SuccessPage;
