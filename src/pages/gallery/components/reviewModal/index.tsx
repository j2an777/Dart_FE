import { Icon } from '@/components';
import * as S from './styles';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ReviewModal = () => {
  const [rating, setRating] = useState(0);

  const onHandleRating = (index: number) => {
    setRating(index + 1);
  };

  return (
    <S.Container>
      <S.ScoreBlock>
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
      </S.ScoreBlock>
      <S.TextReview
        required
        width={520}
        height={300}
        placeholder='관람 후기를 작성해주세요.'/>
      <S.ToReview>
        <Link to='/review'>전체리뷰 보기 &gt;</Link>
      </S.ToReview>
    </S.Container>
  )
}

export default ReviewModal