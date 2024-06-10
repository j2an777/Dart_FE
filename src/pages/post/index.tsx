import { useNavigate } from 'react-router-dom';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { StepZero, StepOne, StepTwo } from './components';
import { Icon } from '@/components';
import { PostGalleries } from '@/types/post';
import * as S from './styles';
import { postGalleries } from '@/apis/gallery';

const PostPage = () => {
  const methods = useForm<PostGalleries>();
  const { handleSubmit } = methods;
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<PostGalleries> = (data) => {
    console.log(data);
    postGalleries(data);
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
