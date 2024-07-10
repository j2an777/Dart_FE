import { useParams } from 'react-router-dom';
import Card from '../components/motion';
import * as S from './styles';

const SuccessPage = () => {
  const { galleryId, order } = useParams();
  let title;
  let content;
  let path;

  switch (order) {
    case 'ticket':
      title = '결제가 완료되었습니다.';
      content = '전시관 입장하기';
      path = `/gallery/${galleryId}`;
      break;
    case 'paidGallery':
      title = '전시 생성 및 결제가 완료되었습니다.';
      content = '메인으로';
      path = '/';
      break;
    default:
      title = '전시 생성이 완료되었습니다.';
      content = '메인으로';
      path = '/';
      break;
  }

  return (
    <S.Layout>
      <S.Container>
        <S.PayText typography="t2" bold="bold">
          {title}
        </S.PayText>
        <Card content={content} path={path} key={'ticket'} />
      </S.Container>
    </S.Layout>
  );
};

export default SuccessPage;
