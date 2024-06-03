import { Text } from '@/components';
import * as S from './styles';

const Banner = () => {
  return (
    <S.Container>
      <S.LineBlock>
        <S.Empty></S.Empty>
        <Text typography='t5' bold='regular' className='left'>Gallery</Text>
        <S.Border></S.Border>
      </S.LineBlock>
      <S.Logo>D'<span>art</span></S.Logo>
      <S.LineBlock>
        <S.Border></S.Border>
        <Text typography='t5' bold='regular' className='right'>
          Entrance
        </Text>
        <S.Empty></S.Empty>
      </S.LineBlock>
    </S.Container>
  )
}

export default Banner