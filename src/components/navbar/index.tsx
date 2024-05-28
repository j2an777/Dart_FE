import { Link, Outlet, useNavigate } from 'react-router-dom';
import mainlogo from '@/assets/images/mainLogo.png';
import { navbarInfo } from '@/consts/navbar';
import { Button, Text } from '..';

import * as S from './styles';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <S.Container>
        <S.MaxWidthWrapper>
          <S.MainLogo alt="main-logo" src={mainlogo} />
          <S.ButtonBox>
            {navbarInfo.map(({ path, value }, index) => {
              if (value === '로그인') {
                return (
                  <Button
                    buttonType="rectangleBlack"
                    key={index}
                    size="small"
                    bold="regular"
                    onClick={() => navigate(path)}
                  >
                    {value}
                  </Button>
                );
              }
              return (
                <Link key={index} to={path}>
                  <Text typography="t7" bold="regular">
                    {value}
                  </Text>
                </Link>
              );
            })}
          </S.ButtonBox>
        </S.MaxWidthWrapper>
      </S.Container>
      <Outlet />
    </>
  );
};

export default Navbar;
