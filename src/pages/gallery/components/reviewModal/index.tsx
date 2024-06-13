import { Icon } from '@/components';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PostReview } from '@/types/post';
import useCustomNavigate from '@/hooks/useCustomNavigate';

import * as S from './styles';

type ReviewModalProps = {
  onSubmit: (data: PostReview & { score: number }) => void;
  close: () => void;
};

const ReviewModal = ({ onSubmit, close }: ReviewModalProps) => {
  const [score, setScore] = useState(0);
  const navigate = useCustomNavigate();

  const onHandleRating = (index: number) => {
    setScore(index + 1);
  };

  const { register, handleSubmit } = useForm<PostReview>({
    mode: 'onChange',
  });

  const handleFormSubmit = (data: PostReview) => {
    onSubmit({ ...data, score });
  };

  const toHandleReview = () => {
    navigate('/review');
    close();
  };

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
