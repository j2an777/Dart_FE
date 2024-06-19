import { Button, Icon, Text, UserCircle } from '..';
import { navbarInfo, userBoxInfo } from '@/consts/navbar';
import { Outlet } from 'react-router-dom';
import { memberStore } from '@/stores/member';
import useOutsideClick from '@/hooks/useOutsideClick';
import useCustomNavigate from '@/hooks/useCustomNavigate';

import * as S from './styles';

const Navbar = () => {
  const navigate = useCustomNavigate();
  const { accessToken } = memberStore();
  return (
    <>
      <S.Container>
        <S.MaxWidthWrapper>
          <a href="/">
            <Icon value="mainLogo" $active={false} />
          </a>
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
              } else if (value === 'coupon') {
                return (
                  <Icon
                    key={index}
                    value="coupon"
                    color="gray400"
                    size={40}
                    onClick={() => navigate(path)}
                  />
                );
              }
              return (
                <S.NavItem
                  key={index}
                  typography="t7"
                  bold="regular"
                  onClick={() => navigate(path)}
                >
                  {value.toUpperCase()}
                </S.NavItem>
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
  const navigate = useCustomNavigate();
  const {
    logout,
    auth: { nickname, profileImage },
  } = memberStore();
  const { isExpand, onToggle, ref } = useOutsideClick();
  return (
    <S.UserBoxContainer ref={ref as React.RefObject<HTMLDivElement>} onClick={onToggle}>
      <UserCircle size={15} profileImage={profileImage} />
      <Text typography="t7" bold="regular" ellipsis={50}>
        {nickname}
      </Text>
      {isExpand && (
        <S.MoreBox>
          {userBoxInfo.map(({ path, value }, index) => {
            const onClickItem = () => {
              if (value === '로그아웃') {
                logout();
                location.reload();
              } else {
                navigate(path);
              }
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
