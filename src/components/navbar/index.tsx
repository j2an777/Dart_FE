import { Outlet } from 'react-router-dom';
import { memberStore } from '@/stores/member';
import { HTMLAttributes, LegacyRef } from 'react';
import { Button, Icon, Text, UserCircle } from '..';
import useOutsideClick from '@/hooks/useOutsideClick';
import { navbarInfo, userBoxInfo } from '@/consts/navbar';
import useCustomNavigate from '@/hooks/useCustomNavigate';
import { useMutation } from '@tanstack/react-query';
import { postLogout } from '@/apis/member';

import * as S from './styles';

const Navbar = () => {
  const navigate = useCustomNavigate();
  const { ref, excludeRef, isExpand, setIsExpand } = useOutsideClick();
  return (
    <>
      <S.NavbarBackgroundColor />
      <S.Container isExpand={isExpand}>
        <a href="/">
          <Icon className="mainLogo" value="mainLogo" $active={false} />
        </a>
        <S.ButtonBox className="buttonBox" ref={ref as LegacyRef<HTMLUListElement>}>
          <S.NavItemBlock className="navItemBlock">
            {navbarInfo.map(({ path, value }) => {
              if (value === 'coupon')
                return (
                  <Icon
                    key={value}
                    value="coupon"
                    color="gray400"
                    size={40}
                    onClick={() => navigate('/event')}
                  />
                );
              return (
                <S.NavItem
                  key={value}
                  typography="t7"
                  bold="regular"
                  onClick={() => navigate(path)}
                >
                  {value.toUpperCase()}
                </S.NavItem>
              );
            })}
          </S.NavItemBlock>
          <LoginButtonBox className="loginButtonBox" />
          <S.CancelIcon value="cancel" onClick={() => setIsExpand(false)} />
        </S.ButtonBox>
        <S.HamburgerIcon
          ref={excludeRef as LegacyRef<HTMLDivElement>}
          value="hamburger"
          isExpand={isExpand}
          onClick={() => {
            setIsExpand(true);
          }}
        />
      </S.Container>
      <Outlet />
    </>
  );
};

export default Navbar;

const UserBox = () => {
  const navigate = useCustomNavigate();
  const {
    deleteMember,
    auth: { nickname, profileImage },
  } = memberStore();
  const { isExpand, onToggle, ref } = useOutsideClick();
  const { mutate: logout } = useMutation({
    mutationKey: ['loguot'],
    mutationFn: () => postLogout(),
    onSettled: () => {
      deleteMember();
      location.reload();
    },
  });
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

const LoginButtonBox = (props: HTMLAttributes<HTMLDivElement>) => {
  const navigate = useCustomNavigate();
  const accessToken = memberStore().accessToken;
  return (
    <div {...props}>
      {accessToken ? (
        <UserBox />
      ) : (
        <Button
          buttonType="rectangleBlack"
          size="xs"
          bold="regular"
          onClick={() => navigate('/login')}
        >
          로그인
        </Button>
      )}
    </div>
  );
};
