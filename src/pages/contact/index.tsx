import { TeamUserData } from '@/consts/teamUser';
import * as S from './styles';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';
import Footer from '@/components/footer';

const breakpointColumnsObj = {
    default: 2,
    1024: 1,
    500: 1,
};

const ContactPage = () => {
    return (
      <S.Container>
          <S.TopBox>
              <S.TeamText typography='t0' bold='semibold' className='mainText'>LuckySeven</S.TeamText>
              <S.TeamText typography='t3' bold='medium' color='black' className='subText'>
                  서비스 런칭까지의 여정을
                  <br/>
                  다재다능한 동료들과 함께 나아갔습니다
              </S.TeamText>
          </S.TopBox>
          <S.BottomBox>
              <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
              >
              {TeamUserData.map((user, index) => (
                  <S.Member key={index}>
                      <Link to={user.github}>
                        <S.MemberImage src={user.image} alt={user.name} />
                      </Link>
                      <S.MemberDescription typography='t4' bold='semibold'>{user.description}</S.MemberDescription>
                      <S.MemberInfo>
                          <S.MemberTeam typography='t6' bold='medium'>{user.team}</S.MemberTeam>
                          <div className='wall1'></div>
                          <S.MemberRole typography="t6" bold="medium">{user.role}</S.MemberRole>
                          <div className='wall2'></div>
                          <S.MemberName typography="t6" bold="regular">{user.name}</S.MemberName>
                      </S.MemberInfo>
                  </S.Member>
              ))}
              </Masonry>
          </S.BottomBox>
          <Footer />
      </S.Container>
    )
  }
  
  export default ContactPage;