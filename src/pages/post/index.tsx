import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { StepZero, StepOne, StepTwo, StepThree, StepAlpha } from './components';
import { Icon } from '@/components';
import { PostGalleries } from '@/types/post';
import { alertStore, progressStore } from '@/stores/modal';
import useCustomNavigate from '@/hooks/useCustomNavigate';
import { EventSourcePolyfill } from 'event-source-polyfill';
import { useEffect, useState } from 'react';
import { memberStore } from '@/stores/member';
import usePostGalleries, { PostGalleriesResponse } from './hooks/usePostGalleries';
import ProgressPortal from '@/components/ProgressPortal';
import { useHandleErrors } from './hooks/useHandleErrors';
import { MyCustomEvent, SSEData } from '@/types/gallery';
import * as S from './styles';
import { getNewToken } from '@/apis/member';

const PostPage = () => {
  const methods = useForm<PostGalleries>();
  const { handleSubmit } = methods;
  const navigate = useCustomNavigate();
  const open = alertStore((state) => state.open);
  const { accessToken } = memberStore.getState();
  const { open: openProgress, close: closeProgress } = progressStore();
  const [eventSource, setEventSource] = useState<EventSourcePolyfill | null>(null);

  const { handleErrors } = useHandleErrors();

  const onProgress = (progress: number) => {
    openProgress(progress);
  };

  const { mutate } = usePostGalleries(onProgress);

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
      buttonCancelLabel:'취소',
      onClickButton: () => modalConfirm(data),
      onClickCancelButton: () => {
        close();
      },
    });
  };

  const startSSE = async (token: string) => {
    const newEventSource = new EventSourcePolyfill(
      'https://dartgallery.site/api/galleries/progress',
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'text/event-stream',
          Connection: 'Keep-Alive',
          Accept: 'text/event-stream',
        },
        withCredentials: true,
        heartbeatTimeout: 86400000,
      },
    );

    newEventSource.addEventListener('notification', (event) => {
      const data = (event as MyCustomEvent).data;
      const parsedData: SSEData = JSON.parse(data);
      const progressData = parsedData.message;

      openProgress(50 + progressData / 2);

      // 100이 되면 종료
      if (progressData === 100) {
        newEventSource.close();
        closeProgress();
      }
    });

    newEventSource.onerror = () => {
      closeProgress();
      newEventSource.close();
    };

    setEventSource(newEventSource);
  };

  const modalConfirm = async (data: PostGalleries) => {
    if (data.images == undefined || data.images.length < 3) {
      open({
        title: '작품 등록 오류',
        description: '최소 3개의 작품을 등록해주세요.',
        buttonLabel: '확인',
      });
    }

    openProgress(0);

    let token = accessToken;

    // 토큰 만료 여부 확인 및 재발급
    try {
      const newTokenData = await getNewToken();
      token = newTokenData.accessToken;
      memberStore.setState({ accessToken: token });
    } catch (error) {
      console.error('토큰 재발급 실패:', error);
      closeProgress();
      open({
        title: '토큰 오류',
        description: '토큰을 재발급받는 도중 오류가 발생했습니다.',
        buttonLabel: '확인',
      });
      return;
    }

    await startSSE(token);

    // POST 요청 보내기
    mutate(data, {
      onSuccess: (idData: PostGalleriesResponse) => {
        const { galleryId } = idData;

        if (galleryId) {
          // galleryId가 있으면 해당 조건에 맞게 navigate
          if (data.gallery.generatedCost !== 0) {
            navigate(`/payment/${galleryId}/paidGallery`);
          } else {
            navigate(`/payment/success/${galleryId}/create`);
          }
        } else {
          console.error('Gallery ID could not be retrieved.');
          closeProgress();
        }
      },
      onError: (error) => {
        handleErrors(error, data);
        closeProgress();
      },
    });
  };

  useEffect(() => {
    return () => {
      if (eventSource) {
        eventSource.close(); // 컴포넌트 언마운트 시 이벤트 소스 닫기
      }
    };
  }, [eventSource]);

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
