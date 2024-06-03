import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import StepZero from './components/stepZero';
import StepOne from './components/stepOne';
import StepTwo from './components/stepTwo';
import { Icon } from '@/components';
import * as S from './styles';
import { Post } from '@/types/post';

const PostPage = () => {
  const methods = useForm();
  const { handleSubmit } = methods;
  const navigate = useNavigate();

  const onSubmit = (data: Post) => {
    console.log(data);
    //결제 및 생성 api 호출
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
