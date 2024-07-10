import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { StepZero, StepOne, StepTwo, StepThree, StepAlpha } from './components';
import { Icon } from '@/components';
import { PostGalleries } from '@/types/post';
import { alertStore, progressStore } from '@/stores/modal';
import useCustomNavigate from '@/hooks/useCustomNavigate';
import usePostGalleries from './hooks/usePostGalleries';
import ProgressPortal from '@/components/ProgressPortal';
import { postValidation } from '@/consts/postValidation';
import { useHandleErrors } from './hooks/useHandleErrors';

import * as S from './styles';

const PostPage = () => {
  const methods = useForm<PostGalleries>();
  const { handleSubmit } = methods;
  const navigate = useCustomNavigate();
  const { open } = alertStore();
  const setProgress = progressStore((state) => state.setProgress);
  const { mutate } = usePostGalleries();
  const { handleErrors } = useHandleErrors();

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
      buttonCancelLabel: '취소',
      onClickButton: () => setTimeout(() => modalConfirm(data), 100),
      onClickCancelButton: () => {},
    });
  };

  const modalConfirm = async (data: PostGalleries) => {
    try {
      postValidation(data);
      setProgress(1);
      mutate(data, {
        onError: (error) => {
          handleErrors(error);
        },
      });
    } catch (error) {
      handleErrors(error);
    }
  };

  return (
    <S.Layout>
      <S.Container>
        <S.Box>
          <S.Quit onClick={() => navigate('/')}>
            <Icon value="cancel" />
          </S.Quit>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <StepZero />
              <StepOne />
              <StepTwo />
              <StepThree />
              <StepAlpha />
              <S.Block>
                <S.Submit type="submit">등록</S.Submit>
              </S.Block>
            </form>
          </FormProvider>
        </S.Box>
        <ProgressPortal />
      </S.Container>
    </S.Layout>
  );
};

export default PostPage;
