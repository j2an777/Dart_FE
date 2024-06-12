import { Link } from 'react-router-dom';
import Text from '../Text';
import * as S from './styles';
import Logo from '@/assets/images/logoCol.png';

const FooterData = [
  { name: '이용약관' },
  { name: '개인정보처리방침' },
  { name: '서비스문의' },
  { name: '도움말' },
  { name: '자주묻는질문' },
];

const Footer = () => {
  return (
    <S.Container>
        <img src={Logo} alt='Logo'/>
        <S.ContentBox>
            <S.ContentBlock>
              {FooterData.map((data, index) => (
                <span key={index}>
                  <Link to='/'>{data.name}</Link>
                  {index < FooterData.length - 1 && <div className='line'></div>}
                </span>
              ))}
            </S.ContentBlock>
            <Text typography='t7' color='gray300' bold='regular'>
                2024 Gallery from &copy; D'art Corp. All Rights Reserved.
            </Text>
        </S.ContentBox>
    </S.Container>
  )
}

export default Footer;
