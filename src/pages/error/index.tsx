import { Text } from '@/components';
import ErrorImg from '@/assets/images/404.png';
import { Link } from 'react-router-dom';
import TextCircle from '@/components/textCircle';

import * as S from './styles';

const ErrorPage = () => {
  return (
    <S.Container>
        <S.Top>
          <S.Left>
            <Text typography='t3' color='gray600' bold='medium'>Web Concept Series: </Text>
            <Text typography='t2' color='black' bold='bold'>NOT FOUND</Text>
          </S.Left>
          <S.Right>
            <TextCircle name='Gallery Exhibition' size={120} />
          </S.Right>
        </S.Top>
        <S.Middle>
          <img src={ErrorImg} alt='Error Image'/>
        </S.Middle>
        <S.Bottom>
          <S.Left>
            <Text typography='t1' color='gray500' bold='medium'>This page does not exist.</Text>
          </S.Left>
          <S.Right>
            <Link to='/' >
              <Text typography='t1' color='black' bold='bold'>Click to Home</Text>
            </Link>
          </S.Right>
        </S.Bottom>
    </S.Container>
  );
};

export default ErrorPage;
