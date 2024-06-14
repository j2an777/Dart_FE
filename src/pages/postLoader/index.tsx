import { postPayment } from '@/apis/payment';
import { useNavigate, useParams } from 'react-router-dom';

import * as S from './styles';

const PostLoaderPage = () => {
  const navigate = useNavigate();
  const { galleryId, cost } = useParams<{ galleryId: string; cost: string }>();

  const paidGallery = async () => {
    const payment = await postPayment(Number(galleryId), 'paidGallery');
    window.location.href = payment.next_redirect_pc_url;
  };

  return (
    <S.Container>
      {cost === 'free' ? (
        <div>
          전시 생성이 완료되었습니다! <br />
          <button onClick={() => navigate('/')}>메인으로</button>
        </div>
      ) : (
        <div>
          전시 생성 중... 전시관 이용료 결제가 필요합니다! <br />
          <button onClick={paidGallery}>결제하기</button>
        </div>
      )}
    </S.Container>
  );
};

export default PostLoaderPage;
