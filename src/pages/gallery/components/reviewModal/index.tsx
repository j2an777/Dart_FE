import { Icon } from '@/components';
import * as S from './styles';
import { useState } from 'react';

const ReviewModal = () => {
  const [rating, setRating] = useState(0);

  const onHandleRating = (index: number) => {
    setRating(index + 1);
  };

  return (
    <S.Container>
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
        placeholder='관람 후기를 작성해주세요.'/>
      <S.ToReview to='/review'>전체리뷰 보기 &gt;</S.ToReview>
    </S.Container>
  )
}

export default ReviewModal