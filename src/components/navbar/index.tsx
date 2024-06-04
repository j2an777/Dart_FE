import { useState } from 'react';
import { Button, Text, UserCircle } from '..';
import { navbarInfo, userBoxInfo } from '@/consts/navbar';
import useGetUserInfo from '@/hooks/useGetUserInfo';
import mainlogo from '@/assets/images/mainLogo.png';
import { Link, Outlet, useNavigate } from 'react-router-dom';

import * as S from './styles';

const Navbar = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken');
  return (
    <>
      <S.Container>
        <S.MaxWidthWrapper>
          <S.MainLogo alt="main-logo" src={mainlogo} />
          <S.ButtonBox>
            {navbarInfo.map(({ path, value }, index) => {
              if (value === '로그인') {
                return accessToken ? (
                  <UserBox key={index} />
                ) : (
                  <Button
                    buttonType="rectangleBlack"
                    key={index}
                    size="xs"
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

const UserBox = () => {
  const { data } = useGetUserInfo();
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <S.UserBoxContainer
      onClick={() => setIsExpand((prev) => !prev)}
      onBlur={() => setIsExpand(false)}
    >
      <UserCircle size={15} />
      <Text typography="t7" bold="regular" ellipsis={50}>
        {data?.nickname}
      </Text>
      {isExpand && (
        <S.MoreBox>
          {userBoxInfo.map(({ path, value }, index) => {
            const onClickItem = () => {
              if (value === '로그아웃') {
                localStorage.removeItem('accessToken');
                location.reload();
              }
              navigate(path);
            };
            return (
              <S.MoreItem
                key={value}
                typography="t7"
                bold="regular"
                isLast={index === userBoxInfo.length - 1}
                onMouseDown={onClickItem}
              >
                {value}
              </S.MoreItem>
            );
          })}
        </S.MoreBox>
      )}
    </S.UserBoxContainer>
  );
};
