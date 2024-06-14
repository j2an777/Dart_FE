import { useNavigate } from 'react-router-dom';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { StepZero, StepOne, StepTwo } from './components';
import { Icon } from '@/components';
import { PostGalleries } from '@/types/post';
import { postGalleries } from '@/apis/gallery';
import { postPayment } from '@/apis/payment';
import { alertStore } from '@/stores/modal';
import * as S from './styles';

const PostPage = () => {
  const methods = useForm<PostGalleries>();
  const { handleSubmit } = methods;
  const navigate = useNavigate();
  const open = alertStore((state) => state.open);

  const onSubmit: SubmitHandler<PostGalleries> = async (data) => {
    console.log(data);
    open({
      title: '전시 등록',
      description: (
        <div>
          <S.ModalText typography="t5" bold="regular">
            전시를 생성한 이후에는 수정이 불가능합니다.
          </S.ModalText>
          <S.ModalText typography="t5" bold="regular">
            전시 생성을 완료 하시겠습니까?
          </S.ModalText>
        </div>
      ),
      buttonLabel: '확인',
      onClickButton: () => modalConfirm(data),
    });
  };

  const modalConfirm = async (data: PostGalleries) => {
    console.log(data);
    // 전시 생성 후, 결제로 이동
    if (data) {
      const response = await postGalleries(data);
      const galleryId = response?.galleryId;
      if (galleryId) {
        // 이용료 있을 때만 결제 진행
        if (data.gallery.fee !== 0) {
          // navigate(`/${galleryId}/pay`);
          const payment = await postPayment(galleryId, 'paidGallery');
          window.location.href = payment.next_redirect_pc_url;
        } else {
          navigate(`/${galleryId}/free`);
        }
      }
    } else {
      console.log('no data');
    }
  };

  return (
    <S.Container>
      <S.Box>
        <S.Quit onClick={() => navigate(-1)}>
          <Icon value="cancel" />
        </S.Quit>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <StepZero />
            <StepOne />
            <StepTwo />
            <S.Block>
              <S.Submit type="submit">등록</S.Submit>
            </S.Block>
          </form>
        </FormProvider>
      </S.Box>
    </S.Container>
  );
};

export default PostPage;
