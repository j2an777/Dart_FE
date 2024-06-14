import { Icon } from '@/components';
import { useForm } from 'react-hook-form';
import { PostReview } from '@/types/post';
import useCustomNavigate from '@/hooks/useCustomNavigate';

import * as S from './styles';

type ReviewModalProps = {
  onSubmit: (data: PostReview & { score: number }) => void;
  close: () => void;
  galleryId: number;
};

const ReviewModal = ({ galleryId, onSubmit, close }: ReviewModalProps) => {
  const navigate = useCustomNavigate();

  const { register, handleSubmit, setValue, watch } = useForm<PostReview>({
    mode: 'onChange',
    defaultValues: { score: 0 },
  });

  const handleFormSubmit = (data: PostReview) => {
    onSubmit({ ...data });
  };

  const onHandleRating = (index: number) => {
    setValue('score', index + 1);
  };

  const toHandleReview = () => {
    navigate(`/review/${galleryId}`);
    close();
  };

  const score = watch('score');

  return (
    <S.Container>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <S.ScoreBox>
          <p>{score}</p>
          <span>/ 5</span>
          {Array.from({ length: 5 }, (_, index) => (
            <Icon
              key={index}
              value="review"
              size={30}
              fillColor={index < score ? 'black' : 'white'}
              onClick={() => onHandleRating(index)}
            />
          ))}
        </S.ScoreBox>
        <S.TextReview
          required
          width={520}
          height={300}
          placeholder="관람 후기를 작성해주세요."
          {...register('content')}
        />
        <S.ToReview onClick={toHandleReview}>전체리뷰 보기 &gt;</S.ToReview>
      </form>
    </S.Container>
  );
};

export default ReviewModal;
