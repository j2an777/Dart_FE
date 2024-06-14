import { useParams } from 'react-router-dom';

// import * as S from './styles';

const PostLoaderPage = () => {
  const { galleryId, cost } = useParams();

  return (
    <div>
      {cost === 'free' ? '전시 생성이 완료되었습니다.' : '결제가 필요합니다.'}
      <br />
      Gallery ID: {galleryId}
    </div>
  );
};

export default PostLoaderPage;
