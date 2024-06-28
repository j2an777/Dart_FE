import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { StepZero, StepOne, StepTwo, StepThree } from './components';
import { Icon } from '@/components';
import { PostGalleries } from '@/types/post';
import { postGalleries } from '@/apis/gallery';
import { alertStore } from '@/stores/modal';
import useCustomNavigate from '@/hooks/useCustomNavigate';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useHandleErrors } from './hooks/useHandleErrors';
import * as S from './styles';

const PostPage = () => {
  const methods = useForm<PostGalleries>();
  const { handleSubmit } = methods;
  const navigate = useCustomNavigate();
  const open = alertStore((state) => state.open);
  const [progress, setProgress] = useState(0);
  const { handleErrors } = useHandleErrors();

  const onSubmit: SubmitHandler<PostGalleries> = async (data) => {
    if (data.images == undefined || data.images.length < 3) {
      open({
        title: '작품 등록 오류',
        description: '최소 3개의 작품을 등록해주세요.',
        buttonLabel: '확인',
      });
    }

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
    try {
      const response = await postGalleries(data);
      const galleryId = response?.galleryId;
      if (galleryId) {
        // SSE를 통해 진행 상황 받기 (이미지를 s3 버킷에 저장하는 시간)
        const eventSource = new EventSource(`/galleries/progress/${galleryId}`);

        eventSource.onmessage = (event) => {
          const data = JSON.parse(event.data);
          setProgress(data.progress);

          // 100이 되면 종료
          if (data.progress === 100) {
            eventSource.close();
            if (data.gallery.generatedCost !== 0) {
              navigate(`/payment/${galleryId}/paidGallery`);
            } else {
              navigate(`/payment/success/${galleryId}/create`);
            }
          }
        };

        eventSource.onerror = () => {
          setProgress(0);
          eventSource.close();
        };
      }
    } catch (error) {
      handleErrors(error, data);
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
            <StepThree />
            <S.Block>
              <S.Submit type="submit">등록</S.Submit>
            </S.Block>
          </form>
        </FormProvider>
      </S.Box>
      {progress !== 0 && (
        <S.ProgressBar>
          <CircularProgressbar value={progress} text={`${progress}%`} />
        </S.ProgressBar>
      )}
    </S.Container>
  );
};

export default PostPage;
