import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { StepZero, StepOne, StepTwo, StepThree } from './components';
import { Dimmed, Icon } from '@/components';
import { PostGalleries } from '@/types/post';
import { postGalleries } from '@/apis/gallery';
import { alertStore } from '@/stores/modal';
import useCustomNavigate from '@/hooks/useCustomNavigate';
import { CircularProgressbar } from 'react-circular-progressbar';

import * as S from './styles';
import { useState } from 'react';

const PostPage = () => {
  const methods = useForm<PostGalleries>();
  const { handleSubmit } = methods;
  const navigate = useCustomNavigate();
  const open = alertStore((state) => state.open);
  const [progress, setProgress] = useState(0);

  const onSubmit: SubmitHandler<PostGalleries> = async (data) => {
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
    const response = await postGalleries(data);
    const galleryId = response?.galleryId;
    if (galleryId) {

      // SSE를 통해 진행 상황 받기
      const eventSource = new EventSource(`/galleries/progress/${galleryId}`);

      eventSource.onmessage = (event) => {
        const data = JSON.parse(event.data);
        setProgress(data.progress);

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
      }
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
          <Dimmed />
          <CircularProgressbar value={progress} text={`${progress}%`} />
        </S.ProgressBar>
      )}
    </S.Container>
  );
};

export default PostPage;