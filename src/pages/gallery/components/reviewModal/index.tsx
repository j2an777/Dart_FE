import { Icon } from '@/components';
import * as S from './styles';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PostReview } from '@/types/post';
import { useNavigate } from 'react-router-dom';

type ReviewModalProps = {
  onSubmit: (data: PostReview & { rating: number }) => void;
  close: () => void;
}

const ReviewModal = ({ onSubmit, close }: ReviewModalProps) => {
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  const onHandleRating = (index: number) => {
    setRating(index + 1);
  };

  const {
    register,
    handleSubmit,
  } = useForm<PostReview>({
    mode: 'onChange',
  });

  const handleFormSubmit = (data: PostReview) => {
    onSubmit({ ...data, rating });
  };

  const toHandleReview = () => {
    navigate('/review');
    close();
  };

  return (
    <S.Container>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <S.ScoreBox>
          <p>{rating}</p>
          <span>/ 5</span>
          {Array.from({ length: 5 }, (_, index) => (
            <Icon 
              key={index} 
              value='review' 
              size={30} 
              fillColor={index < rating ? 'black' : 'white'}
              onClick={() => onHandleRating(index)}/>
          ))}
        </S.ScoreBox>
        <S.TextReview
          required
          width={520}
          height={300}
          placeholder='관람 후기를 작성해주세요.'
          {...register('content')}/>
        <S.ToReview onClick={toHandleReview}>전체리뷰 보기 &gt;</S.ToReview>
      </form>
    </S.Container>
  )
}

export default ReviewModal