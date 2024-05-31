import Dimmed from '@/components/Dimmed';
import * as S from './styles';
import Logo from '@/assets/images/mainLogo.png';
import Icon, { IconValues } from '@/components/icon';
import Text from '@/components/Text';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Colors } from '@/styles/colorPalette';

const ExplainModal = () => {
  const [score, setScore] = useState(4.5);

  const renderIcons = () => {
    const icons = [];
    for (let i = 0; i < 5; i++) {
      let fillColor: Colors = 'black';
      let value: IconValues = 'review';
      
      if (i < Math.floor(score)) {
        fillColor = 'white';
      } else if (i === Math.floor(score) && score % 1 !== 0) {
        value = 'halfreview';
      }
      
      icons.push(
        <Icon 
          key={i} 
          value={value} 
          strokeColor='white' 
          fillColor={fillColor} 
          size={30} 
          $active={false}
        />
      );
    }
    return icons;
  };

  const onHandlePay = () => {
    // 여기서 토스페이 연동 구문
  };

  return (
    <>
      <Dimmed />
      <S.Container>
        <S.InfoBox>
          <div style={{ alignSelf: 'end' }}>
            <Icon value='cancel' size={20} />
          </div>
          <img src={Logo} alt='logo' />
          <S.DescriptionBlock>
            <S.Top>
              <Text typography='t5' color='white' bold='medium'>파동 (WAVE)</Text>
              <S.User>
                <S.Circle />
                <Text typography='t7' bold='regular'>Artist Lee</Text>
              </S.User>
            </S.Top>
            <p id='descript'>
              WAVE. 물질 혹은 공간의 한곳에서 시작된 진동이 퍼져나가는 현상이다. 작품속의 파동은 이리저리 얽혀 있는 현상을 띤다. 여러 울림들이 모여 하나의 커다란 세계가 만들어진다. 울림과 진동, 유동적이고 자유로운 움직임을 가진 것들을 통해 나마의 STORY를 펼쳐나간다.
            </p>
            <Icon value='galaxy' size={20} />
            <Text typography='t6' bold='regular' color='white'>2024.05.22 ~ 2024.06.22</Text>
          </S.DescriptionBlock>
          <S.ButtonBlock>
            <div className='price'>₩ 5,000</div>
            <div className='topay' onClick={onHandlePay}>입장하기</div>
          </S.ButtonBlock>
        </S.InfoBox>
        <S.ReviewBox>
          <Text typography='t7' color='white' bold='thin'>관람객 평점</Text>
          <S.ScoreBlock>
            <S.ScoreWrap>
              <S.Score>
                <Text color='white' bold='bold'>{score}&nbsp;</Text>
                <Text color='white' bold='bold'>/ 5</Text>
              </S.Score>
              {renderIcons()}
            </S.ScoreWrap>
            <Link to='/review'>
              <Text typography='t7' color='gray300' bold='thin'>상세 리뷰 보기 &gt;</Text>
            </Link>
          </S.ScoreBlock>
        </S.ReviewBox>
      </S.Container>
    </>
  );
};

export default ExplainModal;